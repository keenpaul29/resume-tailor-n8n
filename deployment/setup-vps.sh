#!/bin/bash

# RESUME.INTEL // VPS_PROVISIONING_v3_ROBUST
# Fixed: Node.js/NPM conflicts & Nginx install errors

export DEBIAN_FRONTEND=noninteractive
DOMAIN="resume-intel.duckdns.org"

echo "--- 🚀 STARTING SYSTEM HANDSHAKE for $DOMAIN ---"

# 1. Update Core
echo "--- ♻️ UPDATING PACKAGE LISTS ---"
sudo apt-get update || exit 1

# 2. Install Infrastructure (Split to prevent conflict-aborts)
echo "--- 🛰️ INSTALLING INFRASTRUCTURE ---"
sudo apt-get install -y docker.io docker-compose nginx certbot python3-certbot-nginx || { echo "ERROR: Infrastucture install failed"; exit 1; }

# (Check if Node is already installed by Nodesource)
if ! command -v node &> /dev/null; then
    echo "--- 📦 INSTALLING NODEJS ---"
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# 3. Enable Services
sudo systemctl enable --now docker
sudo systemctl enable --now nginx

# 4. Clone & Build Frontend
echo "--- 🏗️ BUILDING FRONTEND ASSETS ---"
cd frontend || exit 1
npm install || exit 1
npm run build || exit 1
cd ..

# Ensure Web Root exists
sudo mkdir -p /var/www/resume-intel/dist
sudo cp -r frontend/dist/* /var/www/resume-intel/dist/
sudo chown -R www-data:www-data /var/www/resume-intel

# 5. Connect n8n Infrastructure
echo "--- 🛰️ LAUNCHING N8N NODE ---"
sudo docker-compose -f deployment/docker-compose.yml up -d

# 6. Configure Nginx Proxy
echo "--- 🛡️ DEPLOYING REVERSE PROXY ---"
if [ -d "/etc/nginx/sites-available" ]; then
    sudo cp deployment/nginx.conf /etc/nginx/sites-available/resume-intel
    sudo ln -sf /etc/nginx/sites-available/resume-intel /etc/nginx/sites-enabled/
    sudo rm -f /etc/nginx/sites-enabled/default
    sudo nginx -t && sudo systemctl reload nginx
else
    echo "ERROR: Nginx directories not found. Install may have failed silently."
    exit 1
fi

# 7. Automate SSL (HTTPS)
echo "--- 🔑 REQUESTING SSL CERTIFICATE ---"
if command -v certbot &> /dev/null; then
    if [ ! -d "/etc/letsencrypt/live/$DOMAIN" ]; then
        sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --register-unsafely-without-email
    fi
else
    echo "WARNING: Certbot not found. Skipping SSL for now. Please run manually later."
fi

echo "--- [OK] // DEPLOYMENT_SUCCESSFUL ---"
echo "--- Access your platform at: https://$DOMAIN ---"
