---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
Creation Date: 2024-01-02, 15:37
Last Date: 2024-01-02T15:48:08+08:00
References: 
draft: 
---
## Abstract
---
![[basic_http_authentication.png|500]]
- Username and password are sent in every [[HTTP Request]] for protected resources. `Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=` in [[HTTP Headers]]
- Must sent with [[TLS]], or hackers can see the username and password in plaintext

## Cons
---
- Inability to track user login status. Obsolete for modern websites

