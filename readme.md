# CXL-Website

This is the official website repository for CXL.

## Overview

A simple PHP-based website deployed from this repository. The site is automatically updated via GitHub webhooks and served using the PHP built-in server.

## Features

- Automatic deployment on GitHub push via webhook
- PHP built-in web server for quick development and testing
- Simple structure suitable for customization

## Getting Started

### Prerequisites

- PHP 7.4 or higher
- Git
- Python (for webhook listener and deployment script)

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Ceaserxl/CXL-Website.git

2. Configure the webhook listener (`start.py`) and set your GitHub webhook secret in a `.env` file.

3. Run the deployment script:
   ```bash
   python start.py

4. To keep the script running after disconnecting from the console, run it inside a detached screen session named `cxl`:
   ```bash
   screen -S cxl python start.py

   Detach from the session with `Ctrl + A` then `D`.

5. To reattach later:
   ```bash
   screen -r cxl

6. Configure your GitHub repository webhook to point to:
   ```
   http://your-server-domain:5000/github-webhook

## License

This project is licensed under the MIT License.