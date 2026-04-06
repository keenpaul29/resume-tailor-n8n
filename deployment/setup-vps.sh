#!/bin/bash

# RESUME.INTEL // VPS_PROVISIONING_v2_DUCKDNS
# Run this on your VPS to deploy everything.

export DEBIAN_FRONTEND=noninteractive
DOMAIN="resume-intel.duckdns.org"

echo "--- 🚀 STARTING SYSTEM HANDSHAKE for $DOMAIN ---"

# 1. Update Core
sudo apt-get update && sudo apt-get upgrade -y

# 2. Install Dependencies
sudo apt-get install -y docker.io docker-compose nginx certbot python3-certbot-nginx nodejs npm

# 3. Enable Docker
sudo systemctl enable --now docker

# 4. Clone & Build Frontend
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
sudo ln -sf /etc/nginx/sites-available/resume-intel /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 7. Automate SSL (HTTPS)
echo "--- 🔑 REQUESTING SSL CERTIFICATE ---"
# Only run if not already certified
if [ ! -d "/etc/letsencrypt/live/$DOMAIN" ]; then
    sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --register-unsafely-without-email
fi

echo "--- [OK] // DEPLOYMENT_SUCCESSFUL ---"
echo "--- Access your platform at: https://$DOMAIN ---"
echo "--- n8n Webhook Base: https://$DOMAIN/webhook/ ---"
