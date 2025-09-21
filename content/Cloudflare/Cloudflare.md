---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - cloudflare
  - go
  - terraform
Creation Date: 2024-03-04, 21:42
Last Date: 2025-09-21T16:15:54+08:00
References:
draft:
description: Learn how to manage Cloudflare with Terraform and the Cloudflare CLI. This guide explains zone-level vs account-level resources, API token scopes, common authentication errors, and Zero Trust configuration best practices.
---
## Abstract
---
- A company that offers services that cover these [topics](https://notes.yxy.ninja/tags/cloudflare)

>[!code] Install the Cloudflare Cli
> Make sure you have [[Go]] installed and configured. For more information, refer to [cloudflare cli· GitHub](https://github.com/cloudflare/cloudflare-go/tree/master/cmd/flarectl)
> ```bash
> go install github.com/cloudflare/cloudflare-go/cmd/flarectl@latest
> 
> # Set the API_Token
> $ export CF_API_TOKEN=Abc123Xyz
> ```


>[!tip] Debugging authentication errors
> Common casuses:
> - Using **zone-scoped token** for **account-scoped resource**.
> - Token missing **account-level Access: Apps & Policies (Edit)** scope.
> - Accidentally passing empty `application_id`.

### Zone
- A single DNS zone like `yxy.ninja`
- **API permissions required**: API token must have **Zone-scoped rights** for that domain like “Zone → DNS: Edit”


>[!code] Terraform Cloudflare zone-level resources
> - `cloudflare_dns_record`
> - `cloudflare_page_rule`
> - `cloudflare_workers_route`

### Account
- Entire Cloudflare account (can span many [[#Zone|zones]])
- **Permissions required**: API token must have **Account-scoped rights**

>[!code] Terraform Cloudflare account-level resources
> - `cloudflare_zero_trust_access_application`
> - `cloudflare_zero_trust_access_policy`
> - `cloudflare_account_member`
> - `cloudflare_workers_script`
>   
> **When used**: Features not bound to a single zone but to your Zero Trust / account-wide config.
> 
> In the new Zero Trust model, **all Access / Gateway / Tunnel resources are account-scoped**. That’s why you had to switch from `zone_id` → `account_id`.