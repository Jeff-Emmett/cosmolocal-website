# Spec: Gmail "Add to CRM" Automation

## Summary

When Jeff, Michel, or Bryan moves an email into a Gmail label called **"Add to CRM"**, n8n automatically:
1. Creates a contact in Twenty CRM (or finds existing)
2. Logs the email subject + body as a CRM note on the contact
3. Removes the "Add to CRM" label so the email isn't re-processed

## Architecture

```
Jeff's Gmail ──┐
Michel's Gmail ─┤──→ n8n (Schedule: every 5 min) ──→ Twenty CRM
Bryan's Gmail ──┘       │                                 │
                        │  1. Search "Add to CRM" label   │
                        │  2. Extract sender info          │
                        │  3. Find or create contact ──────┘
                        │  4. Attach email as CRM note
                        │  5. Remove label from email
```

## Technical Approach

### Gmail API (OAuth2) via n8n Gmail Node

- **n8n node**: `n8n-nodes-base.gmail` (regular node, not trigger)
- **Trigger**: Schedule node — polls every 5 minutes
- **Auth**: Gmail OAuth2 credentials (one per account)
- **Query**: `label:Add-to-CRM` to find emails in the label

### Why Gmail API over IMAP

- Native label search and management (add/remove labels)
- More reliable than IMAP polling
- Better handling of HTML email bodies
- n8n has first-class Gmail support

### Workflow Flow

```
Schedule (every 5 min)
  → Gmail: Get Jeff's "Add to CRM" emails
  → Gmail: Get Michel's "Add to CRM" emails
  → Gmail: Get Bryan's "Add to CRM" emails
  → Merge all results
  → For each email:
      → Extract sender name + email
      → Skip if sender is @cosmolocal.world (internal)
      → Search CRM for existing contact by email
      → If found: update timestamp
      → If not found: create new contact
      → Create CRM note: "[Email] Subject" + email body
      → Gmail: Remove "Add to CRM" label from email
```

## Setup Requirements

### 1. Google Cloud Project (One-time)
- Create project at console.cloud.google.com
- Enable Gmail API
- Create OAuth2 credentials (Web application type)
- Authorized redirect URI: `https://automate.cosmolocal.world/rest/oauth2-credential/callback`

### 2. n8n Gmail Credentials (Per account)
- In n8n: Settings > Credentials > New > Google OAuth2 API
- Enter Client ID + Client Secret from Google Cloud
- Each team member authorizes their Gmail account
- Credentials referenced in workflow: `gmail-jeff`, `gmail-michel`, `gmail-bryan`

### 3. Gmail Label (Per account)
- Each person creates a label called **"Add to CRM"** in their Gmail
- They can then drag/move emails to this label to trigger CRM capture

### 4. Environment Variable
- No new env vars needed — reuses existing `TWENTY_API_KEY`

## CRM Actions

### Contact Creation (new sender)
```json
POST /api/v1/objects/people
{
  "name": { "firstName": "...", "lastName": "..." },
  "emails": { "primaryEmail": "sender@example.com" }
}
```

### Contact Lookup (existing sender)
```
GET /api/v1/objects/people?filter={"emails":{"primaryEmail":{"eq":"sender@example.com"}}}
```

### Note Creation (email log)
```json
POST /api/v1/objects/notes
{
  "title": "[Email] Subject line here",
  "body": "**From**: sender@example.com\n**To**: jeff@cosmolocal.world\n**Date**: 2026-02-10\n\nEmail body content...",
  "noteTargets": [{ "personId": "contact-uuid" }]
}
```

## Acceptance Criteria

- [ ] n8n workflow 06 created and importable
- [ ] Google Cloud project setup documented in README
- [ ] Polls all 3 Gmail accounts every 5 minutes
- [ ] Creates CRM contact from new email senders
- [ ] Finds existing CRM contact and updates timestamp
- [ ] Logs email subject + body as CRM note linked to contact
- [ ] Removes "Add to CRM" label after processing (no duplicates)
- [ ] Skips internal @cosmolocal.world senders
- [ ] README updated with workflow 06 documentation

## Out of Scope

- Bidirectional sync (CRM → Gmail)
- Automatic labeling / classification of emails
- Attachment handling (just text/HTML body for now)
- Email thread tracking (each email treated independently)

## Open Questions

None — requirements are clear.
