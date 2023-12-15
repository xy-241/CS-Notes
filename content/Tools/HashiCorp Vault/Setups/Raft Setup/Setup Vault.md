---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - vault
Creation Date: 2023-08-16T12:13:22+08:00
Last Date: 2023-08-16T12:13:22+08:00
References:
---
1. Run the Terraform codes
2. Initialise
3. >[!note] Initialise the Vault Autopilot
>```bash
>vault operator raft autopilot set-config \
>    -dead-server-last-contact-threshold=10 \
>    -server-stabilization-time=30 \
>    -cleanup-dead-servers=true \
>    -min-quorum=3
>```