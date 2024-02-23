---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - ngrok
  - cloudflare
Creation Date: 2024-02-23, 23:49
Last Date: 2024-02-24T01:02:50+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Secure Tunneling introduces 2 pieces of software - [[#Secure Tunneling Server]]  and [[#Secure Tunneling Client]] to achieve **secure** yet **convenient** access to a **service running on a local machine**
### Secure Tunneling Server
- Sits in between the **user from the public network** and [[#Secure Tunneling Client]]
- The secure tunneling server ensures
	1. Connection between the **user from the public network** and **itself** is encrypted
	2. Connection between the **Secure Tunneling Client** and **itself** is encrypted
- So in order for it to know where to forward the data to, it needs to decrypt and de-encapsulate the encrypted data it receives. It forwards to user if the encrypted data is from secure tunneling client, vice versa.

>[!success] Protected Data Transmission
> The traffic in transit from users in the public network to the service running on local machine is fully encrypted

### Secure Tunneling Client
- Establishes an outbound connection (often over [[TCP]]) to a [[#Secure Tunneling Server]]

>[!info]- Authentication Methods
> 1. **Pre-shared Keys:** Client and server both have the same secret key (Used by [[#Ngrok]] in the form of API key)
> 2. **Digital Certificates:** The server provides a digital certificate to prove identity, and the client may do the same (Used by [[#Cloudflared]], the cert is stored at the path `$HOME/.cloudflared/cert.pem`)
> 3. **Username/Password:** Less secure, but sometimes used in simple setups.


>[!success] Firewall Bypass
> Enable service running on local machine to be exposed to the public network without opening any ports on the local machine or the firewall of the local network



### Secure Tunneling Architecture
![[secure_tunneling_cloudflare_example.png|600]]
- The above diagram is showing [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/), but the architecture is the pretty much the same for other Secure Tunnel implementations
</br>

- [[#Secure Tunneling Server]]: **Cloudflare Edge Server** running inside the Cloudflare's Network (the yellow box shown above)
- [[#Secure Tunneling Client]] **Cloudflared** running along side the service that runs inside your local machine (the blue box shown above)


## Cloudflared
---
```bash title="Installation"
brew install cloudflared
```

```bash title="Secure Tunneling of a local port"
cloudflared tunnel --url 127.0.0.1:<PORT_NUMBER>
```


## Ngrok
---
```bash title="Installation"
brew install ngrok/ngrok/ngrok
```

```bash title="Secure Tunneling of a local port"
ngrok http <PORT_NUMBER>
```

```bash title="Secure Tunneling of a local port with Google OAuth"
ngrok http --oauth=google --oauth-allow-email=<GOOGLE_EMAIL> <PORT_NUMBER>
```