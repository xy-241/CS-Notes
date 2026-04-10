---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2026-04-10T20:13:08+08:00
Last Date: 2026-04-10T20:15:46+08:00
References:
  - https://12factor.net/config
draft:
description: Most production apps resolve configuration through a layered override chain where database or admin UI values beat environment variables, which beat config file defaults. A common source of debugging pain when edits to a lower-priority layer silently have no effect.
---
## Abstract
---
- Most production apps resolve configuration through a **layered override chain**: higher-priority sources silently win over lower-priority ones
- The general pattern is: **runtime/database config > environment variables > config file defaults**. Editing a lower-priority layer (like. `.env`) has no effect if a higher-priority layer (e.g. a database row) already holds a value

## Common Examples
---

| Framework / Tool | Override chain (highest to lowest) |
| --- | --- |
| [[Twenty CRM#TwentyConfigService Precedence\|Twenty CRM]] | `core."keyValuePair"` DB table > env vars > hardcoded defaults |
| [[Kubernetes]] | ConfigMaps/Secrets (mounted or env-injected) > defaults baked into the container image |
| Spring Boot | Spring Cloud Config (DB-backed) > `SPRING_*` env vars > `application.yml` > `application-default.yml` |
| Rails | `Rails.application.credentials` (encrypted) > `ENV["KEY"]` > `config/database.yml` defaults |
| Consul / Vault / etcd | Centralized key-value store > local env vars > local config file defaults |

>[!caution] The silent-override trap
> The most common debugging pitfall: you edit a **low-priority** source (like an `.env` file), restart the app, and nothing changes because a **high-priority** source (like a database row or admin UI setting) still holds the old value. Always check the highest-priority source first. See [[OAuth 2.0#Debugging Redirect URI Mismatches]] for a real-world example.

## References
---
- [The Twelve-Factor App: III. Config](https://12factor.net/config)
