#vault 
>[!abstract] Attached to each [[Token]] sent to the client, specifies the resources the clients can access ([[Authorization]])
>- [Syntax](https://developer.hashicorp.com/vault/docs/concepts/policies#policy-syntax)


## Useful Commands
>[!note] List polies
>```bash
># Vault Cli
>vault policy list
>
># HTTP
>curl -H "X-Vault-Token: <your-token>" -X GET http://vault-server-address:8200/v1/sys/policies/acl
>```

>[!note] Read Polices
>```bash
># Vault Cli
>vault policy read <policy-name>
>
># HTTP
>curl -H "X-Vault-Token: <your-token>" -X GET http://vault-server-address:8200/v1/sys/policies/acl/<policy-name>
>```

>[!note] Write a policy to [[HashiCorp Vault]]
>```bash
>vault policy write <POLICY_NAME> <POLICY.HCL>
>```

^f66dd1

