---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - security
Creation Date: 2023-09-12T15:34:55+08:00
Last Date: 2024-01-13T22:21:24+08:00
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
- The Certificate Issuer of the X.509 Certificate is same as the entity that is using it
</br>

- Without a trusted [[Digital Signature]] on the X.509 Certificate, it is prone to [[Man-in-the-middle Attack]]. Because the X.509 Certificate can modified without ways to notice

