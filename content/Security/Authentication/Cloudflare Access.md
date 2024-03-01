---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - cloudflare
  - security
Creation Date: 2024-02-29, 22:22
Last Date: 2024-03-01T19:33:15+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A Cloudflare security service that allows you to set up [policies and rules](https://developers.cloudflare.com/cloudflare-one/policies/access/) that let you define who can or cannot access your applications based on [user Identity](https://developers.cloudflare.com/cloudflare-one/identity/), **network attributes**, and **device posture**
- You can access the dashboard at [Cloudflare Access](https://one.dash.cloudflare.com/:account/l)

## Cloudflare Access Temporary Authentication
---
- Users are required to proof their identity first, then obtain approval from application administrator before they can access a specific application
- The administrator will receive an email notification with the user identity to approve or deny the request. Unlike a typical Allow policy, the user will have to request access at the end of each session. This allows you to define the users **who should have persistent access** and those **who must request temporary access**
- Refer to [Cloudflare Access - Temporary authentication](https://developers.cloudflare.com/cloudflare-one/policies/access/temporary-auth/#set-up-temporary-authentication) for setup guide

>[!caution] Email addresses of the approvers
> Make sure you setup [App Launcher · Cloudflare Zero Trust docs](https://developers.cloudflare.com/cloudflare-one/applications/app-launcher/) and create a policy that authenticate the emails of the approvers, or there is no way for you to approve the temporary authentication request
> 
> And you need a different approver email to approve temporary authentication for another approver email!

>[!example]- Allow Temporary Authentication Policy Example
> ![[cloudflare_access_temp_access_example.png]]

>[!tip] Allow some users to access without approval
> You can optionally add a second **Allow** policy for users who should have persistent access (Access without the need to get approved). But make sure this second allow policy is placed above the temporary authentication policy, an example is shown below
> ![[cloudflare_acess_policy_arrangement.png|500]]