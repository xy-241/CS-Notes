#tool 
## Features
>[!note] Features
>![[vault_features.png]]
>![[Automate_x509_certificates.png]]
>1. [[Dynamic Secrets]]
>2. [[Encryption as a Service]] - Stores encryption keys for application to decrypt the data it stores at rest

>[!note] 3 ways to interact
>1. Web UI
>2. CLi
>3. [[HTTP]] API (Supports all features, used intensively by app & cicd)


## Server Modes
>[!note] 2 Server Modes
>1. Dev mode - ``vault server -dev``
>2. Prod mode ``vault server -config /vault/config/local.json``


## Vault Paths
![[vault_path.png]]

## Architecture & its config
![[vault_architecture_3.png]]
	- [[Vault System Backend]] is a default backend which is mounted at ``/sys`` - handling policies. and access storage backend
![[vault_architecture_1.png]]
### [[Auth Identity(Auth Methods), Vault]]

### [[Secret Engine (store, generate, encrypt), Vault]]

### [[Audit Devices, Vault]]

### [[Storage Backend, Vault]]
### Outbound Connection
- [VPC Endpoint integration](https://nlbsg.udemy.com/course/integrating-hashicorp-vault-with-aws/learn/lecture/23668904#overview)
### Backup
- [Raft  auto snapshots with S3](https://nlbsg.udemy.com/course/integrating-hashicorp-vault-with-aws/learn/lecture/23879748#overview)
![[vault_architecture_2.png]]


## Useful Commands
### Get the vault status
```bash
curl  --request POST --data '{"key": "<BASE64_TOKEN>"}'  http://<ENDPOINT>/v1/sys/unseal | jq
```

## [HA Setup & How a HA Cluster work](https://developer.hashicorp.com/vault/docs/concepts/ha)

## References
- [Introduction to HashiCorp Vault with Armon Dadgar](https://www.youtube.com/watch?v=VYfl-DpZ5wM)
- [HashiCorp Vault Tutorial for Beginners | FULL COURSE in 1 Hour](https://youtu.be/ae72pKpXe-s)

