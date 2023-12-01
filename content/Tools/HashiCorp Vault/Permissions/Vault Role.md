#vault 
>[!abstract] An entity that has [[Vault Policy]] attached, under a particular [[Auth Method]]


## Useful Commands
>[!note] List Roles
>```bash
># Vault Cli
>vault list auth/<auth-method>/role
>
># HTTP
>curl -H "X-Vault-Token: <your-token>" -X GET http://vault-server-address:8200/v1/auth/<auth-method>/role
>```

>[!note] Read Roles
>```bash
># Vault Cli
>vault read auth/<auth-method>/role/my-role
>
># HTTP
>curl -H "X-Vault-Token: <your-token>" -X GET http://vault-server-address:8200/v1/auth/<auth-method>/role/<role-name>
>```