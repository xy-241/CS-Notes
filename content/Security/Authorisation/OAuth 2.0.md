#security 
By [xy241](https://www.linkedin.com/in/xinyang-yu)
>[!abstract]
>- Generate tokens for third-party application to access an account with refined permission control
>- Refined access control to account resources 
>- Only for [[Authorisation]], OAuth stands for *Open Authorization*

>[!example] Example Permissions that can be granted to third-party application 
>- Username
>- Account' contacts

>[!success] We don't need to provide password of the account to third-party application which grants them full control & high risk associated with sharing password 

>[!success] Tokens can be attached with a ttl to expire automatically without manual intervention & creating negative impact on UX



## Terminologies 
### Resource Owner (Identity)
- Owner of the identity, user themselves
### Client
- Third-party application that wants to find out more about the [[OAuth 2.0#Resource Owner]] and carry out actions on the behalf of him/her
### Authorization Server
- The application that hosts the account of the  [[OAuth 2.0#Resource Owner]] 
### Resource Server
- The API that  [[OAuth 2.0#Client]] wants to use on behalf of the  [[#Resource Owner (Identity)]]
- Single source for identity 
>[!info] In some cases, both  [[OAuth 2.0#Authorization Server]] &  [[OAuth 2.0#Resource Server]] are bundled together
### Redirect URI (Callback URI)
- The URI the  [[OAuth 2.0#Authorization Server]] will redirect the  [[OAuth 2.0#Resource Owner]] back to after granting permissions to  [[OAuth 2.0#Client]]
### Response Type
- The type of information [[OAuth 2.0#Client]] expects to receive
- Most common type is [[OAuth 2.0#Authorization Code]]
### Scope
- The refined permissions [[OAuth 2.0#Client]] wants
- Access to data & permissions to perform actions on [[OAuth 2.0#Resource Server]] etc
### Consent
- The [[OAuth 2.0#Authorization Server]] takes the [[OAuth 2.0#Scope]] the [[OAuth 2.0#Client]] is requesting and verifies it with the [[OAuth 2.0#Resource Owner]], see if he/she wants to grant the permissions
### Client ID
- ID used to identify the [[OAuth 2.0#Client]] with the [[OAuth 2.0#Authorization Server]]
### Client Secret 
- Secret that only the [[OAuth 2.0#Client]] & the [[OAuth 2.0#Authorization Server]] know
- This allows both entities to share information privately 
- Used by the [[OAuth 2.0#Client]] to verify its identity with the [[OAuth 2.0#Authorization Server]]
### Authorization Code
- Short-lived code [[OAuth 2.0#Authorization Server]] sends back to the [[OAuth 2.0#Client]]
### Access Token
- [[OAuth 2.0#Client]] sends the [[OAuth 2.0#Authorization Code]] & its [[OAuth 2.0#Client Secret]] to the [[OAuth 2.0#Authorization Server]] to obtain the Access Token
- The key the [[OAuth 2.0#Client]] uses to communicate with the [[OAuth 2.0#Resource Server]] on the behalf of [[OAuth 2.0#Resource Owner]]
- Used for [[Authorisation]]



## References
- [An Illustrated Guide to OAuth and OpenID Connect](https://www.youtube.com/watch?v=t18YB3xDfXI&t=44s)
- [Udemy Course](https://nlbsg.udemy.com/course/oauth-2-simplified/learn/lecture/23715618#overview)