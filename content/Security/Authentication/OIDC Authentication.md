---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - security
Creation Date: 2023-09-07T10:40:04+08:00
Last Date: 2024-01-04T15:40:52+08:00
References: 
---
## Abstract
---
![[oidc_basic_sign-in_flow.svg]]
- Stands for *Open ID Connect*
- Sits on top of [[OAuth 2.0]]
- Instead of just giving back [[OAuth 2.0#Access Token]], it also gives back a 'badge' - information who you are -> [[#ID Token]]

>[!note] The workflow is pretty similar to [[OAuth 2.0]] except
>1. [[OAuth 2.0#Scope]] in [[OAuth 2.0#Consent]] has ``OPENID``
>2. [[OAuth 2.0#Client]] receives both [[OAuth 2.0#Access Token]] & [[#ID Token]]

### ID Token
- A [[JWT]]
- Used for [[Authentication]], NOT [[Authorisation]]
- Contains [[JWT#Claims]] like ``aud`` (Audience Property) which defines which [[OAuth 2.0#Client]] is meant to be the final recipient of the ID Token
- Contain [[OAuth 2.0#Resource Owner (Identity)]] info like email and username which can be used by [[OAuth 2.0#Client]] to populate the application UI

### Identity Provider
- [[OAuth 2.0#Authorization Server]] that supports [[OIDC Authentication]]