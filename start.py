import subprocess
import os

# Use current folder (where the script and index.php are)
current_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(current_dir)

# Run PHP server on all interfaces (public)
subprocess.run(["php", "-S", "0.0.0.0:80"])
