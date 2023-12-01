#security #tool 
>[!note] Process of decrypting [[Vault Root Key]] using [[Vault Unseal Key]]
>- Shares added one at a time until enough shares are present to reconstruct the [[Vault Unseal Key]] to decrypt the [[Vault Root Key]]

>[!note] Done by running
>```bash
>vault operator unseal
>```
>or via [[API]]

## Pros
![[vault_unseal_option_pros.png]]
## Cons
![[vault_unseal_option_unseal.png]]