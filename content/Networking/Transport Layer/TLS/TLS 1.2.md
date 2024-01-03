---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-31T15:18:35+08:00
Last Date: 2023-12-16T21:58:04+08:00
References: 
---
## Abstract
---
- Using [[Certificate Authority (CA)]] & [[Asymmetric Cryptography]] to perform [[#Symmetric Key Exchange]]. 
- Takes 2 [[Network Round-trip]] - [[#Certificate Check]]& [[#Symmetric Key Exchange]]

## Certificate Check
- [[X.509 Certificate]] is exchanged over the [[Network]]
![[TLS_certificate_check.png]]
## Symmetric Key Exchange
![[symmetric_key_exchange.png]]
- [[Host#Client]] uses [[Asymmetric Cryptography#Public Key]] in [[X.509 Certificate]] to encrypt the [[Symmetric Encryption#Symmetric Key]]
- [[Host#Server]] use its [[Asymmetric Cryptography#Private Key]] to obtain the Symmetric Key
- Now both client & server can communicate with each other with data encrypted in-transit with the help of the using the efficient [[Symmetric Encryption]] 
- [[Asymmetric Encryption]] is much more computing intensive compared to [[Symmetric Encryption]]

>[!info] In this case, the Symmetric Key also known as **Session Key**



