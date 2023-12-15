---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
  - tool
Creation Date: 2023-09-06T15:35:23+08:00
Last Date: 2023-09-06T15:35:23+08:00
References:
---
>[!note] 
>- Not sufficient to [[Unseal]] if [[Auto Unseal]] not working
>- Purely an authorization mechanism 

>[!note] Not for re-generation of seal key
>- [vault operator rekey](https://support.hashicorp.com/hc/en-us/articles/4404364271763-How-to-rekey-vault-recovery-keys-when-using-auto-unseal) - Generates new unseal keys if we aren't using [[Auto Unseal]], with [[Auto Unseal]] , it is Re-generate Vault Recovery Keys and [[Vault Token]](root), [references](https://www.reddit.com/r/hashicorp/comments/yqz659/auto_unseal_and_recovery_keysroot_key/?rdt=53030), [generating a root token](https://developer.hashicorp.com/vault/tutorials/operations/generate-root#generate-root)