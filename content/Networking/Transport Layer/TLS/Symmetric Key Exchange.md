---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2023-12-12T11:49:00+08:00
References:
---
##abstract
![[symmetric_key_exchange.png]]
- [[Host]] uses [[Public Key]] in [[TLS Certificate]] to encrypt the [[Symmetric Key]]
- [[Host]] use its [[Private Key]] to decrypt [[Symmetric Key]]
- Now both [[Host]] & [[Host]] can communicate with each other over [[Network]] with data encrypt in-transit with the help of the [[Symmetric Key]]

>[!note] In this case, the [[Symmetric Key]] also known as [[Session Key]]