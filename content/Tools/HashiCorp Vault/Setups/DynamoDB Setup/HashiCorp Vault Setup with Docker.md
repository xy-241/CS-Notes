---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - vault
Creation Date: 2023-08-23T21:05:25+08:00
Last Date: 2023-08-23T21:05:25+08:00
References:
---
>[!note] Command to start container in the [[Docker Host Network]]
>```bash
>sudo docker run --cap-add=IPC_LOCK  -d -v /home/ubuntu/vault.hcl:/vault/config/vault.hcl --network host hashicorp/vault server
>```