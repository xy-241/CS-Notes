---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
Creation Date: 2023-09-20T17:22:16+08:00
Last Date: 2023-12-28T21:26:18+08:00
References: 
---
## Abstract
---
![[oidc_basic_sign-in_flow.svg]]
- Sits on top of [[OAuth 2.0]]
- Instead of just giving back [[OAuth 2.0#Access Token]], it also gives back a 'badge' - information who you are -> [[#ID Token]]

>[!note] The workflow is pretty similar to [[OAuth 2.0]] except
>1. [[OAuth 2.0#Scope]] in [[OAuth 2.0#Consent]] has ``OPENID``
>2. [[OAuth 2.0#Client]] receives both [[OAuth 2.0#Access Token]] & [[#ID Token]]

### ID Token
- A [[JWT (JSON Web Token)]]
- Used for [[Authentication]], NOT [[Authorisation]]
- Contains [[JWT (JSON Web Token)#Claims]] like ``aud`` (Audience Property) which defines which [[OAuth 2.0#Client]] is meant to be the final recipient of the ID Token
- Contain [[OAuth 2.0#Resource Owner (Identity)]] info like email and username which can be used by [[OAuth 2.0#Client]] to populate the application UI

## [[HashiCorp Vault]] Config
---
### 1. Enable OIDC
```bash
vault auth enable oidc
```

### 2. Create the [[Vault Policy]] 
>[!example] Sample Policy.hcl
>```hcl
>path "rootKV/*" {
>  capabilities = ["create", "read", "update", "patch", "delete", "list"]
>}
>```
>
[[Vault Policy#^f66dd1 | Write Policy to Vault Via Cli]]

>[!tip] The same can be accomplished on the Web UI side

### 3. Configure OIDC with [[Azure AD]]
```bash
vault write auth/oidc/config \
    oidc_client_id="<AD_APP_ID>" \
    oidc_client_secret="<AD_CLIENT_SECRETE>" \
    default_role="${ROLE_NAME}" \
    oidc_discovery_url="https://login.microsoftonline.com/<AD_TENANT_ID>/v2.0"
```
#### Sample
```bash
vault write auth/oidc/config \
    oidc_client_id="d62f2f79-cc8f-49d1-9147-71a3b0162021" \
    oidc_client_secret="-G.8Q~8nyGoi1cfEhdqm7J2hYtFSmTpx85MTtaXW" \
    default_role="rootkv" \
    oidc_discovery_url="https://login.microsoftonline.com/2f67afae-185b-40ab-a1f1-d1983d807511/v2.0"
```

### 4. Create a [[Vault Role]] (Authenticates to Azure by a user's email.)
```bash
vault write auth/oidc/role/<ROLE_NAME> \
   user_claim="email" \
   allowed_redirect_uris="http://localhost:8250/oidc/callback" \
   allowed_redirect_uris="<VAULT_PUBLIC_URL>/ui/vault/auth/oidc/oidc/callback"  \
   policies="<POLICY_NAME>" \
   oidc_scopes="https://graph.microsoft.com/.default"
```
### Sample
```bash
vault write auth/oidc/role/rootkv \
   user_claim="email" \
   allowed_redirect_uris="https://vault.yxy.ninja/ui/vault/auth/oidc/oidc/callback"  \
   policies="rootkv" \
   oidc_scopes="https://graph.microsoft.com/.default"
```


### 5. [Set up Vault External Group & AD Group](https://developer.hashicorp.com/vault/tutorials/auth-methods/oidc-auth-azure#set-up-vault-external-group-and-ad-group)