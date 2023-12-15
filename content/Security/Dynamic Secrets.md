---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
Creation Date: 2023-08-30T20:16:10+08:00
Last Date: 2023-08-30T20:16:10+08:00
References:
---
>[!abstract] Short-live credentials
>![[static_vs_dynamic_secrets.png]]

## Benefits
---
>[!success] Application has a high chance of printing out credentials in the debug text or outputs. This reduce the chance of leaking valid credentials to attackers

>[!success] Each entity gets an unique set of credentials

>[!success] Ability to allocate the compromised entity 