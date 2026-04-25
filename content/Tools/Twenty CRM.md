---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2026-04-01T14:06:42+08:00
Last Date: 2026-04-08T23:05:01+08:00
References:
  - "https://twenty.com/developers/section/self-hosting"
draft:
description: Lessons learned self-hosting Twenty CRM with Docker Compose behind Traefik, including the database config override pitfall and Google OAuth setup.
---
## Abstract
---
- An open-source CRM (Customer Relationship Management) platform that can be self-hosted with [[Docker Compose]]
- Composed of four services: **server** (Node.js API + frontend), **worker** (background jobs), **db** (PostgreSQL 16), and **redis** (event streams and caching)

## TwentyConfigService Precedence
---
- Twenty reads configuration through `TwentyConfigService`, which follows a **[[Configuration Override Chain|three-tier override chain]]**:
  1. **Env-only** config vars are always read from environment variables
  2. **Database** values (stored in `core."keyValuePair"` table) override environment variables
  3. **Environment variables** are the fallback if no database entry exists

>[!caution] Database overrides env vars silently
> If a config value exists in the `core."keyValuePair"` table, the environment variable in `env_file` or `environment` is **completely ignored**. This can cause confusing bugs where changing the `.env` file has no effect.

>[!tip] Check database config when env changes don't take effect
> ```sql
> SELECT key, value FROM core."keyValuePair" WHERE key LIKE '%YOUR_CONFIG%';
> ```
> Update with:
> ```sql
> UPDATE core."keyValuePair" SET value='"new_value"' WHERE key='YOUR_CONFIG_KEY';
> ```
> Note the double quoting: the value column stores JSON, so strings need `'"value"'`.

## Google OAuth Setup
---
- Twenty uses the [[OAuth 2.0#Login SSO vs Data Integration|two-flow OAuth pattern]]. One Google Cloud [[OAuth 2.0]] client, two distinct [[OAuth 2.0#Redirect URI|redirect URIs]]:

| Env var | Endpoint | Flow |
| --- | --- | --- |
| `AUTH_GOOGLE_CALLBACK_URL` | `/auth/google/redirect` | Login SSO (authenticate user into Twenty) |
| `AUTH_GOOGLE_APIS_CALLBACK_URL` | `/auth/google-apis/get-access-token` | Data integration (Gmail + Calendar sync) |

- Both URIs must be registered in **Google Cloud Console > APIs & Services > Credentials > OAuth 2.0 Client IDs > Authorized redirect URIs** for the same client

## Debugging the No Payload Error
---
- **Symptom**: clicking "Sign in with Google" on Twenty's login page produces a cryptic **"No payload"** error in the frontend and a [[JWT]] decode failure server-side
- **Root cause**: the two `AUTH_GOOGLE_*_CALLBACK_URL` values are swapped. Twenty sends users to Google with the wrong `redirect_uri`, Google returns the auth code to the wrong endpoint, and the handler tries to exchange a code meant for a different flow

>[!bug] The swap can live in the database, NOT just `.env`
> Because of [[#TwentyConfigService Precedence]], DB values in `core."keyValuePair"` silently override environment variables. Editing `.env` and restarting will have no effect if the DB rows still hold the swapped values. Always fix the DB directly.

### Step 1: Verify the Runtime Redirect URI
- Check what Twenty is actually sending to Google

```bash
curl -sk -o /dev/null -w '%{redirect_url}\n' \
  'https://your-twenty-domain/auth/google'
```

- URL-decode the `redirect_uri` parameter in the returned Google URL. It **MUST** point to `/auth/google/redirect`. If it points to `/auth/google-apis/get-access-token`, the values are swapped

### Step 2: Check the Database
```sql
SELECT key, value FROM core."keyValuePair"
WHERE key IN ('AUTH_GOOGLE_CALLBACK_URL', 'AUTH_GOOGLE_APIS_CALLBACK_URL');
```

### Step 3: Fix the Swap in the Database
```sql
BEGIN;
UPDATE core."keyValuePair"
  SET value = '"https://your-twenty-domain/auth/google/redirect"'
  WHERE key = 'AUTH_GOOGLE_CALLBACK_URL';
UPDATE core."keyValuePair"
  SET value = '"https://your-twenty-domain/auth/google-apis/get-access-token"'
  WHERE key = 'AUTH_GOOGLE_APIS_CALLBACK_URL';
COMMIT;
```

- Note the double quoting: the `value` column stores JSON, so string values need `'"..."'`

### Step 4: Restart the Server
```bash
docker compose restart server
```

- Twenty reads config into memory on startup, so a restart is required for the fix to take effect. The `worker` container does NOT need to restart for the login flow

## Deployment Behind Traefik
---
- Twenty's server exposes port `3000` internally and is routed via [[Traefik]] using Docker labels
- If the Twenty instance does its own [[OAuth 2.0]] login, do **not** apply Traefik's [[Traefik#Forward Auth|forward-auth]] middleware to its router, as the two auth flows will conflict

## References
---
- [Twenty Self-Hosting Guide](https://twenty.com/developers/section/self-hosting)
- [Twenty GitHub Repository](https://github.com/twentyhq/twenty)
