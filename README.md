# RESUME.INTEL // AI RESUME TAILORING SYSTEM

A high-fidelity, "Cyber-Minimalist" web platform designed for elite software engineers to automate the tailoring of their professional profiles. Powered by **React** and **n8n**.

---

## 🚀 Quick Start (Local)

1. **Install Dependencies**: `cd frontend && npm install`
2. **Run Locally**: `npm run dev`
3. **Configure n8n Webhook**: Copy `frontend/.env.example` to `frontend/.env` and add your `VITE_N8N_WEBHOOK_URL`.

---

## 🏗️ VPS Deployment (Production) // DUCKDNS + SSL

Follow these steps for a "Full Success" deployment on your VPS using your [DuckDNS](https://www.duckdns.org/) domain.

### 1. Register Domain
1. Log into DuckDNS and create your subdomain (e.g., `resume-intel`).
2. Point the `current ip` to your VPS public IP (`45.251.234.233`).

### 2. Deploy Platform
1. **SSH into your VPS**:
   ```bash
   ssh root@45.251.234.233
   ```
2. **Clone & Setup**:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   chmod +x deployment/setup-vps.sh
   sudo ./deployment/setup-vps.sh
   ```
   *This script installs Docker, Nginx, builds the React frontend, and requests an SSL certificate for HTTPS.*

### 3. Connect n8n Intelligence
1. Access n8n at `https://resume-intel.duckdns.org:5678`.
2. **Import Workflow**: Upload `resume_tailor_workflow.json` from the root directory.
3. **Webhook Handshake**: In your n8n workflow, activate the webhook, copy the **Production URL**, and update your `frontend/.env` on the VPS.

---

## 🎨 Design System: "Cyber-Minimalist"

The UI is built with a custom **Tailwind CSS** configuration defined in `frontend/index.html`. 

### Core Tokens:
- **Primary**: `#a7a5ff` (Neural Indigo)
- **Secondary**: `#bff365` (Action Neon)
- **Surface**: `#060e20` (Void Blue)
- **Typography**: Space Grotesk (Headlines), JetBrains Mono (Data), Inter (Body).

---
**System Status: [OPERATIONAL] // V2.0.4**
