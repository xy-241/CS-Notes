---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
  - tool
Creation Date: 2023-08-31T11:34:27+08:00
Last Date: 2023-08-31T11:34:27+08:00
References:
---
>[!note] Process of decrypting [[Vault Root Key]] using [[Vault Unseal Key]]
>- Shares added one at a time until enough shares are present to reconstruct the [[Vault Unseal Key]] to decrypt the [[Vault Root Key]]

>[!note] Done by running
>```bash
>vault operator unseal
>```
>or via [[API]]

## Pros
---
![[vault_unseal_option_pros.png]]
## Cons
---
![[vault_unseal_option_unseal.png]]