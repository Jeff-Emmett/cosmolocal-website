---
id: task-2
title: Rotate leaked credentials and scrub git history
status: Done
assignee:
  - '@claude'
created_date: '2026-02-10 01:09'
labels:
  - security
  - infrastructure
  - n8n
dependencies: []
priority: high
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Security hardening after GitGuardian detected exposed SMTP credentials in GitHub. Rotated all leaked secrets, rewrote git history with git-filter-repo, and moved all configuration to server-side .env files.

Changes made:
- Switched n8n email from Resend API to Mailcow SMTP (self-hosted)
- Created hello@cosmolocal.world mailbox in Mailcow
- Created SMTP credential in n8n via API
- Updated workflows 02 (Lead Nurturing) and 04 (Follow-up Reminders) via n8n API
- Removed all hardcoded secrets from docker-compose.yml (DB password, SMTP host/port/sender)
- Rotated: Resend API key (deprecated), Listmonk API password, n8n DB password, SMTP password
- Ran git-filter-repo 3x to scrub secrets from all commits and commit messages
- Force-pushed cleaned history to both Gitea and GitHub
- All credentials now in /opt/websites/cosmolocal-website/.env (gitignored)

Remaining: Revoke old Resend API key in Resend dashboard (manual).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Resend API key removed from codebase and history
- [ ] #2 Listmonk password rotated
- [ ] #3 n8n DB password rotated and moved to .env
- [ ] #4 SMTP password rotated
- [ ] #5 SMTP host/port/sender moved to env vars
- [ ] #6 Git history clean - zero secret matches
- [ ] #7 All services healthy after redeployment
- [ ] #8 GitGuardian alert resolved
<!-- AC:END -->
