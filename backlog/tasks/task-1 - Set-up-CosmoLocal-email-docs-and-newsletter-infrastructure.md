---
id: task-1
title: Set up CosmoLocal email, docs, and newsletter infrastructure
status: Done
assignee: ['@claude']
created_date: '2026-02-09 12:00'
updated_date: '2026-02-09 21:30'
labels: [infrastructure, email, docs, newsletter]
dependencies: []
priority: high
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Set up CosmoLocal World infrastructure: Mailcow SMTP for cosmolocal.world, Docmost workspace at docs.cosmolocal.world, Listmonk newsletter list with per-list RBAC for Bryan, and email authentication (DKIM, SPF, DMARC).
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Configure Mailcow SMTP for cosmolocal.world domain
- [x] #2 Set up DNS records (SPF, DKIM, DMARC) for cosmolocal.world
- [x] #3 Create noreply@cosmolocal.world mailbox with newsletter@ alias
- [x] #4 Deploy Docmost at docs.cosmolocal.world (separate workspace, shared infra)
- [x] #5 Configure SMTP for Docmost CosmoLocal instance
- [x] #6 Create CosmoLocal World list in Listmonk
- [x] #7 Set up Bryan as editor with per-list RBAC (CosmoLocal list only)
- [x] #8 Set up Google Postmaster Tools for cosmolocal.world
- [x] #9 Configure Traefik websecure + Let's Encrypt for docs.cosmolocal.world
- [x] #10 Invite Bryan to CosmoLocal Docmost workspace
<!-- AC:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
### Mailcow (cosmolocal.world)
- Mailbox: noreply@cosmolocal.world
- Alias: newsletter@cosmolocal.world → noreply@cosmolocal.world (sender_allowed=1)
- SMTP: ***REDACTED_SMTP_HOST***:465 (TLS)
- DNS: SPF, DKIM (2048-bit), DMARC all configured on Cloudflare
- Google Postmaster Tools verified

### Docmost (docs.cosmolocal.world)
- Separate Docmost app container (docmost-cl) sharing Postgres + Redis with docs.jeffemmett.com
- Database: docmost_cosmolocal (in shared docmost-db Postgres)
- Redis: db 1 (shared docmost-redis)
- DNS: proxied A record → 159.195.32.209
- SSL: Traefik websecure entrypoint + Let's Encrypt cert
- SMTP: noreply@cosmolocal.world via Mailcow
- Location: /opt/apps/docmost/docker-compose.yml (single compose file)

### Listmonk (newsletter.cosmolocal.world)
- CosmoLocal World list created (id=21, public, single opt-in)
- SMTP server "cosmolocal.world" configured in Listmonk settings
- Bryan's account: bryan / CosmoLocal-e2dc5eec
  - User role: Editor (campaigns, subscribers, templates, media - no admin)
  - List role: CosmoLocal Editor (scoped to CosmoLocal World list only)
  - Cannot see other lists, settings, users, or roles

### Bryan's Access Summary
| Service | URL | Username | Role |
|---------|-----|----------|------|
| Listmonk | newsletter.jeffemmett.com/admin | bryan | Editor (CosmoLocal list only) |
| Docmost | docs.cosmolocal.world | bryan@cosmolocal.world | Member (invited) |
<!-- SECTION:NOTES:END -->
