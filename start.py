import requests
import os
import subprocess
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[logging.StreamHandler()]
)

GITHUB_REPO = "Ceaserxl/CXL-Website"
BRANCH = "main"
LOCAL_REPO_DIR = os.path.dirname(os.path.abspath(__file__))


def get_latest_commit_sha():
    url = f"https://api.github.com/repos/{GITHUB_REPO}/commits/{BRANCH}"
    logging.info(f"Checking latest commit SHA from {url}")
    resp = requests.get(url)
    resp.raise_for_status()
    sha = resp.json()['sha']
    logging.info(f"Latest commit SHA: {sha}")
    return sha


def read_last_deployed_sha():
    try:
        with open("last_deployed_sha.txt") as f:
            sha = f.read().strip()
            logging.info(f"Last deployed commit SHA: {sha}")
            return sha
    except FileNotFoundError:
        logging.info("No previous deployment record found.")
        return None


def write_last_deployed_sha(sha):
    with open("last_deployed_sha.txt", "w") as f:
        f.write(sha)
    logging.info(f"Updated last deployed commit SHA to {sha}")


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


def main():
    try:
        clone_repo_if_needed()
        latest_sha = get_latest_commit_sha()
        last_sha = read_last_deployed_sha()
        if latest_sha != last_sha:
            logging.info("New commit detected, updating repo...")
            update_repo()
            write_last_deployed_sha(latest_sha)
        else:
            logging.info("No new commits. No update needed.")
    except Exception as e:
        logging.error(f"Update failed: {e}")


if __name__ == "__main__":
    main()

    logging.info("Starting PHP built-in server on 0.0.0.0:8001")
    subprocess.run(["php", "-S", "0.0.0.0:8001"])
