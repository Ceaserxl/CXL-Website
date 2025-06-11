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
- Python 3 (for webhook listener and deployment script)

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Ceaserxl/CXL-Website.git
   ```

2. Configure the webhook listener (`start.py`) and set your GitHub webhook secret in a `.env` file.

3. Run the deployment script:

   ```bash
   python3 start.py
   ```

4. Configure your GitHub repository webhook to point to:

   ```
   http://your-server-domain:5000/github-webhook
   ```

## License

This project is licensed under the MIT License.
