---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - security
Creation Date: 2023-09-12T15:34:55+08:00
Last Date: 2023-12-16T21:57:29+08:00
References: 
---
## Abstract
---
- Also known as *Digital Certificate*
- Contains [[Asymmetric Cryptography#Public Key]] that the client can use to perform [[TLS 1.2#Symmetric Key Exchange]]
- The component that powers [[TLS]]
- Sent with [[Digital Signature]] which is used to *verify* the digital certificate


## Self-signed Certificate
---- 
- A self-created [[X.509 Certificate]] that isn't signed by anyone else
>[!caution] [[Host#Client]] prone to Man-in-the-middle Attack
>- The content of certificate can be modified without ways to notice

