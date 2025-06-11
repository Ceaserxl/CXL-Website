import requests
import os
import subprocess
import logging
import threading
from flask import Flask, request, abort
import hmac
import hashlib
import signal
from dotenv import load_dotenv

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[logging.StreamHandler()]
)

load_dotenv()

GITHUB_REPO = "Ceaserxl/CXL-Website"
BRANCH = "main"
LOCAL_REPO_DIR = os.path.dirname(os.path.abspath(__file__))

secret_str = os.getenv("GITHUB_SECRET")
GITHUB_SECRET = secret_str.encode() if secret_str else None

app = Flask(__name__)

php_process = None  # Will hold the running PHP server process

def clone_repo_if_needed():
    git_dir = os.path.join(LOCAL_REPO_DIR, '.git')
    if os.path.isdir(git_dir):
        logging.info(".git directory found, skipping clone.")
        return

    # Check if directory is empty (ignore hidden files)
    files = [f for f in os.listdir(LOCAL_REPO_DIR) if not f.startswith('.')]
    if files:
        logging.error(f"Directory '{LOCAL_REPO_DIR}' is not empty, cannot clone repository.")
        raise RuntimeError(f"Directory '{LOCAL_REPO_DIR}' is not empty. Please clone manually or clear it.")

    logging.info(".git directory not found and directory is empty, cloning repository into current directory...")
    subprocess.run(
        ["git", "clone", f"https://github.com/{GITHUB_REPO}.git", "."],
        cwd=LOCAL_REPO_DIR,
        check=True
    )

def update_repo():
    logging.info(f"Discarding local changes and pulling latest changes in {LOCAL_REPO_DIR}")
    subprocess.run(["git", "-C", LOCAL_REPO_DIR, "reset", "--hard"], check=True)
    subprocess.run(["git", "-C", LOCAL_REPO_DIR, "clean", "-fd"], check=True)
    subprocess.run(["git", "-C", LOCAL_REPO_DIR, "pull"], check=True)

def start_php_server():
    global php_process
    logging.info("Starting PHP built-in server on 0.0.0.0:8001")
    php_process = subprocess.Popen(["php", "-S", "0.0.0.0:8001"], cwd=LOCAL_REPO_DIR)

def stop_php_server():
    global php_process
    if php_process:
        logging.info("Stopping PHP server...")
        php_process.terminate()
        try:
            php_process.wait(timeout=5)
        except subprocess.TimeoutExpired:
            php_process.kill()
            php_process.wait()
        php_process = None
        logging.info("PHP server stopped.")

def verify_signature(data, signature):
    if not GITHUB_SECRET:
        return True  # No secret set, skip verification
    mac = hmac.new(GITHUB_SECRET, msg=data, digestmod=hashlib.sha256)
    expected = 'sha256=' + mac.hexdigest()
    return hmac.compare_digest(expected, signature)

@app.route('/github-webhook', methods=['POST'])
def github_webhook():
    signature = request.headers.get('X-Hub-Signature-256')
    if GITHUB_SECRET:
        if not signature or not verify_signature(request.data, signature):
            logging.warning("Invalid webhook signature")
            abort(400, 'Invalid signature')

    event = request.headers.get('X-GitHub-Event')
    if event == "push":
        logging.info("Received GitHub push event, updating repo...")
        try:
            update_repo()
            stop_php_server()
            start_php_server()
        except Exception as e:
            logging.error(f"Error updating repo: {e}")
            abort(500, 'Update failed')
        return "Updated", 200

    return "Event not handled", 200

def run_flask_app():
    app.run(host='0.0.0.0', port=5000)

if __name__ == "__main__":
    clone_repo_if_needed()
    start_php_server()

    flask_thread = threading.Thread(target=run_flask_app)
    flask_thread.daemon = True
    flask_thread.start()

    logging.info("Webhook listener started on port 5000. Waiting for events...")

    try:
        signal.pause()
    except KeyboardInterrupt:
        logging.info("Shutting down...")
        stop_php_server()

