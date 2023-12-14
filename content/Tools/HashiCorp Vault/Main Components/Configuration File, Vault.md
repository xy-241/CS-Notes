---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - vault
Creation Date: 2023-12-10T19:48:16+08:00
Last Date: 2023-12-10T19:48:16+08:00
References:
---
>[!abstract] Config file for [[HashiCorp Vault]]. Contains different [keywords](https://developer.hashicorp.com/vault/docs/configuration#parameters) to tune the behaviour of the vault like what storage backend to use & how to unseal the vault etc
>![[vault_configuration_file_1.png]]
>![[vault_configuration_file_2.png]]
>![[vault_configuration_file_3.png]]

>[!tip] Some of the config can be done using the specific [[Environment Variable]]

>[!tip] Can be written in either [[JSON]] or [[HCL]]

>[!tip] Some networking related setting can be set dynamically using [go-sockaddr template](https://pkg.go.dev/github.com/hashicorp/go-sockaddr/template)
>- [TCP Listener Example](https://developer.hashicorp.com/vault/docs/configuration/listener/tcp#tcp-listener-parameters)  [``cluster_address``,``api_addr``]

>[!example] [Example Production Configuration File](https://github.com/btkrausen/hashicorp/blob/master/vault/config_files/vault.hcl)

## [seal](https://developer.hashicorp.com/vault/docs/configuration/seal/awskms)
---
```hcl
# Below is using AWS KMS for [[Auto Unseal]]
seal "awskms" {
  region     = "ap-southeast-1"
  kms_key_id = "5b2b78c8-c4db-43d9-ba6b-73295f2ec154"
}
```

>[!example] [vault.hcl with raft enable](https://chat.openai.com/share/3e1552ae-fdac-41b0-8393-c01c431df92c)

## Troubleshooting
---
[SSL Cert Configuration](https://github.com/terraform-google-modules/terraform-google-vault/issues/19)

>[!quote] Reference
>- [Vault with Raft Backend Storage config](https://developer.hashicorp.com/vault/docs/configuration/storage/raft)