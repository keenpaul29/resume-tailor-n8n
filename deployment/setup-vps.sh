#!/bin/bash

# RESUME.INTEL // VPS_PROVISIONING_v2
# Run: curl -sL ... | bash

export DEBIAN_FRONTEND=noninteractive

echo "--- 🚀 STARTING SYSTEM HANDSHAKE ---"

# 1. Update Core
sudo apt-get update && sudo apt-get upgrade -y

# 2. Install Dependencies
sudo apt-get install -y docker.io docker-compose nginx certbot python3-certbot-nginx nodejs npm

# 3. Enable Docker
sudo systemctl enable --now docker

# 4. Clone & Build Frontend (Assuming user is in the repo)
echo "--- 🏗️ BUILDING FRONTEND ASSETS ---"
cd frontend
npm install
npm run build
cd ..

# 5. Connect n8n Infrastructure
echo "--- 🛰️ LAUNCHING N8N NODE ---"
docker-compose -f deployment/docker-compose.yml up -d

# 6. Configure Nginx Proxy
echo "--- 🛡️ DEPLOYING REVERSE PROXY ---"
sudo cp deployment/nginx.conf /etc/nginx/sites-available/resume-intel
sudo ln -s /etc/nginx/sites-available/resume-intel /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo "--- [OK] // DEPLOYMENT_SUCCESSFUL ---"
echo "--- Access your platform on Port 80 and n8n on Port 5678 ---"
