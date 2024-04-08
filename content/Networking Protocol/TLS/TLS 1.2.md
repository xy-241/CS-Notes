---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-31T15:18:35+08:00
Last Date: 2024-03-02T18:16:13+08:00
References: 
---
## Abstract
---
- Using [[X.509 Certificate#Certificate Authority (CA)]] & [[Asymmetric Cryptography]] to perform [[#Symmetric Key Exchange]]. 
- Takes 2 [[Network Round-trip]] - [[#Certificate Check]]& [[#Symmetric Key Exchange]]

## Certificate Check
---
![[TLS_certificate_check.png|500]]
- [[X.509 Certificate]] is exchanged over the [[Computer Network]]


## Symmetric Key Exchange
---
![[symmetric_key_exchange.png|700]]
- [[Host#Client]] uses [[Asymmetric Cryptography#Public Key]] in [[X.509 Certificate]] to encrypt the [[Symmetric Encryption#Symmetric Key]] it generated
- [[Host#Server]] use its [[Asymmetric Cryptography#Private Key]] to obtain the Symmetric Key
</br>

- Now both client & server can communicate with each other with data encrypted in-transit using [[Symmetric Encryption]] which is way more efficient than [[Asymmetric Cryptography]] 

### Session Key
- The [[Symmetric Encryption#Symmetric Key]] obtained from [[#Symmetric Key Exchange]]




