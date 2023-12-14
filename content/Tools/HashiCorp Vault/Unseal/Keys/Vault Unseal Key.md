---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - vault
Creation Date: 2023-08-03T12:20:03+08:00
Last Date: 2023-08-03T12:20:03+08:00
References:
---
>[!note] Used to encrypt/decrypt [[Vault Root Key]]

 
>[!note] Uses [[Shamir's Secret Sharing]] to split the key into shares
>- A certain threshold of shares is required to reconstruct the unseal key

>[!caution] If lost, all data is going to be lost