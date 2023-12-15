---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - vault
Creation Date: 2023-09-03T18:44:57+08:00
Last Date: 2023-09-03T18:44:57+08:00
References:
---
>[!abstract] 3 Types in a basic Vault cluster
>1. Active Node - Responsible for all read/write 
>2. Standby Node - Will forward all requests to the Active Node
>3. Performance Standby - Can process read requests for clients without forwarding to Active Node (Enterprise license required