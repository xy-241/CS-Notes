---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
Creation Date: 2023-09-20T17:09:28+08:00
Last Date: 2023-12-30T23:39:00+08:00
References: 
---
## Abstract
---
- Stands for *Open Authorization*
- Only for [[Authorisation]]
- [[#Authorization Server]] gets [[#Consent]] from [[#Resource Owner]] to generate [[#Access Token]] for [[#Client]] to access [[#Resource Server]] with refined permission control


## Benefits
---
### Refined Permission Control
- We don't need to provide password of the account to [[#Client]] which grants them full control & high risk associated with sharing password 
- We can give Client permissions to access only username and account's contacts, nothing else

### Smaller Attack Surface
- [[#Access Token]] can be attached with a TTL to expire automatically without manual intervention & creating negative impact on UX



## Resource Owner
---
Owner of the identity, live user themselves
### Consent
- The [[OAuth 2.0#Authorization Server]] takes the [[OAuth 2.0#Scope]] the [[OAuth 2.0#Client]] is requesting and verifies it with the [[OAuth 2.0#Resource Owner]], see if he/she wants to grant the permissions
- Resource Owner is directed to the consent page by the client app. Client app includes its [[#Client ID]], [[#Redirect URI]], [[#Response Type]] and [[#Scope]] when redirecting the resource owner to the consent page on the authorization server

**Microsoft Entra ID**
<img src="https://learn.microsoft.com/en-us/entra/identity-platform/media/application-consent-experience/consent_prompt.png" style="height:500px">
- You can read up on the breakdown of each components [here](https://learn.microsoft.com/en-us/entra/identity-platform/application-consent-experience#building-blocks-of-the-consent-prompt)
- You can manage the apps you consented [here](https://myapps.microsoft.com/)

**Google Account**
- You can manage the apps you consented [here](https://myaccount.google.com/connections)

**Github Account**
- You can manage the apps you consented [here](https://github.com/settings/applications)

## Client
---
Third-party application that wants to find out more about the [[OAuth 2.0#Resource Owner]] and carry out actions on the behalf of him/her
### Scope
- The refined permissions [[OAuth 2.0#Client]] wants
- Specifies permissions to access the types of data & types of actions on [[OAuth 2.0#Resource Server]] etc

### Client ID
- ID used to identify the [[OAuth 2.0#Client]] with the [[OAuth 2.0#Authorization Server]]

### Client Secret 
- Secret that only the [[OAuth 2.0#Client]] & the [[OAuth 2.0#Authorization Server]] know
- This allows both entities to share information privately 
- Used by the [[OAuth 2.0#Client]] to verify its identity with the [[OAuth 2.0#Authorization Server]]
### Access Token
- [[OAuth 2.0#Client]] sends its [[#Client ID]], [[#Client Secret]] and the [[OAuth 2.0#Authorization Code]] to the [[OAuth 2.0#Authorization Server]] to obtain the Access Token
- The key the [[OAuth 2.0#Client]] uses to communicate with the [[OAuth 2.0#Resource Server]] on the behalf of [[OAuth 2.0#Resource Owner]]
- Used for [[Authorisation]], NOT [[Authentication]]


## Authorization Server
---
- The application that hosts the account of the  [[OAuth 2.0#Resource Owner]] 
- Single source for identity 
### Redirect URI
- Also known as *Callback URI*
- The URI the  [[OAuth 2.0#Authorization Server]] will redirect the  [[OAuth 2.0#Resource Owner]] back to after granting permissions to  [[OAuth 2.0#Client]]
- It is the url on the [[#Client]]
### Response Type
- The type of information [[OAuth 2.0#Client]] expects to receive
- Most common type is [[OAuth 2.0#Authorization Code]]
### Authorization Code
- Short-lived code [[OAuth 2.0#Authorization Server]] sends back to the [[OAuth 2.0#Client]]

## Resource Server
---
- The API that  [[OAuth 2.0#Client]] wants to use on behalf of the  [[#Resource Owner (Identity)]]
- In some cases, both  [[OAuth 2.0#Authorization Server]] &  [[OAuth 2.0#Resource Server]] are bundled together


## References
---
- [An Illustrated Guide to OAuth and OpenID Connect](https://www.youtube.com/watch?v=t18YB3xDfXI&t=44s)
- [Udemy Course](https://nlbsg.udemy.com/course/oauth-2-simplified/learn/lecture/23715618#overview)