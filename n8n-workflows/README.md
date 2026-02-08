# Cosmolocal n8n Workflows

Import these JSON files into [automate.cosmolocal.world](https://automate.cosmolocal.world) via **Settings > Import Workflow**.

## Setup Requirements

API keys are passed as **Docker environment variables** in `docker-compose.yml` (n8n community edition doesn't support Settings > Variables). The workflows access them via `$env.VARIABLE_NAME`.

| Variable | Description | Where to find |
|----------|-------------|---------------|
| `TWENTY_API_KEY` | Twenty CRM API key | crm.cosmolocal.world > Settings > API Keys |
| `RESEND_API_KEY` | Resend email API key | `ssh netcup "cat ~/.resend_credentials"` |
| `LISTMONK_CREDENTIALS` | Listmonk `user:pass` | Internal Docker service credentials |

To set keys, create `/opt/websites/cosmolocal-website/.env` on the server and redeploy.

## Workflows

### 01 — Contact Intake (Form to CRM)
**Trigger:** Webhook POST to `/webhook/contact-intake`
**Flow:** Validate input > Create contact in Twenty CRM > Add note with message > Respond

Use this webhook URL in your website contact form:
```
https://automate.cosmolocal.world/webhook/contact-intake
```

POST body:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "message": "Interested in collaborating"
}
```

### 02 — Lead Nurturing (Welcome Email Sequence)
**Trigger:** Webhook POST to `/webhook/new-contact-created`
**Flow:** Day 0: Welcome email > Day 3: Strategic priorities > Day 10: Ways to participate > Update CRM stage

Chain this from workflow 01 or call it when a new contact is created in the CRM.

### 03 — Newsletter Sync (CRM to Listmonk)
**Trigger:** Daily at 6:00 AM
**Flow:** Fetch CRM contacts > Check if already in Listmonk > Create new subscribers

Syncs all CRM contacts with email addresses to Listmonk list #1. Adjust the list ID if needed.

### 04 — Follow-up Reminders (Stale Contacts)
**Trigger:** Weekly on Monday at 9:00 AM
**Flow:** Fetch contacts > Filter those not updated in 14+ days > Email report to team

Sends an HTML table report to `***REDACTED_EMAIL***` with stale contacts and a link to the CRM.

### 05 — Webhook Events (Git to CRM)
**Trigger:** Webhook POST to `/webhook/git-events`
**Flow:** Parse Gitea/GitHub event > Log as CRM note > Find or create contributor contact

Add this webhook URL to Gitea/GitHub repos:
```
https://automate.cosmolocal.world/webhook/git-events
```

Supports: push, issues, pull_request, star/watch events. Auto-detects Gitea vs GitHub from headers.
