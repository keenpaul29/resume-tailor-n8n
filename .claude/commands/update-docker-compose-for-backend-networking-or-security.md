---
name: update-docker-compose-for-backend-networking-or-security
description: Workflow command scaffold for update-docker-compose-for-backend-networking-or-security in resume-tailor-n8n.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /update-docker-compose-for-backend-networking-or-security

Use this workflow when working on **update-docker-compose-for-backend-networking-or-security** in `resume-tailor-n8n`.

## Goal

Updates to the Docker Compose configuration to adjust backend exposure, networking, or security settings, often in response to infrastructure or security requirements.

## Common Files

- `deployment/docker-compose.yml`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit deployment/docker-compose.yml to adjust service ports, network interfaces, or proxy settings.
- Optionally, coordinate with frontend or proxy configuration if related to security or exposure.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.