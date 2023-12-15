---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - vault
  - security
Creation Date: 2023-09-06T15:31:41+08:00
Last Date: 2023-09-06T15:31:41+08:00
References:
---
>[!note] Delegates the responsibility of securing the [[Vault Unseal Key]] from users to a trusted device or service
>![[auto_unseal.png]]

>[!note] Instead of using [[Vault Unseal Key]](split into multiple pieces), we use a trusted service like [[AWS KMS]]

>[!not] Obtain Root Token Key
>```bash
>cat /var/log/syslog | grep "Root Token"
>```

>[!caution]
>[**If the seal mechanism or its keys are permanently deleted, then the Vault cluster cannot be recovered, even from backups**](https://developer.hashicorp.com/vault/docs/concepts/seal#auto-unseal)

>[!example] Reference
>[HashiCorp Auto-unseal with AWS KMS](https://developer.hashicorp.com/vault/tutorials/auto-unseal/autounseal-aws-kms#download-demo-assets)