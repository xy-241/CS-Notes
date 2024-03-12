---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - cloudflare
  - linux
  - macos
  - ngrok
Creation Date: 2024-02-23, 23:49
Last Date: 2024-03-12T11:06:01+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Secure Tunneling introduces 2 pieces of software - [[#Secure Tunneling Server]]  and [[#Secure Tunneling Client]] to achieve **secure** yet **convenient** access to a **service running on a local machine**
### Secure Tunneling Server
- Sits in between the **user from the public network** and [[#Secure Tunneling Client]]. A Level-7 [[Reverse Proxy (反向代理)]]
- The secure tunneling server ensures
	1. Connection between the **user from the public network** and **itself** is encrypted
	2. Connection between the **Secure Tunneling Client** and **itself** is encrypted
- So in order for it to know where to forward the data to, it needs to decrypt and de-encapsulate the encrypted data it receives. It forwards to user if the encrypted data is from secure tunneling client, vice versa.

>[!success] Protected Data Transmission
> The traffic in transit from users in the public network to the service running on local machine is fully encrypted

### Secure Tunneling Client
- Establishes an outbound connection (often over [[TCP]]) to a [[#Secure Tunneling Server]]

>[!info]- Authentication Methods
> 1. **Pre-shared Keys:** Client and server both have the same secret key (Used by [[#Ngrok]] in the form of API key, and [[#Cloudflare Tunnel]] in the form of `TunnelSecret`)
> 2. **Digital Certificates:** The server provides a digital certificate to prove identity, and the client may do the same
> 3. **Username/Password:** Less secure, but sometimes used in simple setups.


>[!success] Firewall Bypass
> Enable service running on local machine to be exposed to the public network without opening any ports on the local machine or the firewall of the local network
>>[!caution]
>> Make sure the endpoint of the secure tunneling server isn't blocked by the firewall



### Secure Tunneling Architecture
![[secure_tunneling_cloudflare_example.png|600]]
- The above diagram is showing [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/), but the architecture is the pretty much the same for other Secure Tunnel implementations
</br>

- [[#Secure Tunneling Server]]: **Cloudflare Edge Server** running inside the Cloudflare's Network (the yellow box shown above)
- [[#Secure Tunneling Client]] **Cloudflared** running along side the service that runs inside your local machine (the blue box shown above)


## Cloudflare Tunnel
---
- Cloudflare's Secure Tunneling offering. The notes here focuses on setting it up. For more details refer to [Cloudflare Tunnel · Cloudflare Zero Trust docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
- You need the `cloudflared` cli to managed the [[#Secure Tunneling Client]]
```bash
brew install cloudflared
```

>[!tip]- Create Cloudflare Tunnel without an account
> This is for quick testing without a Cloudflare account, but it comes with minimal control. No custom domain, no authentication, limited bandwidth and unstable etc. Refer to [Cloudflare Quick Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/) for more details
> 
> ```bash title="Secure Tunneling of a local port"
> cloudflared tunnel --url 127.0.0.1:<PORT_NUMBER>
> ```

>[!tip]- Restrict access to Cloudflare Tunnel endpoint with Cloudflare Access
> By default, Cloudflare Tunnel is accesible by anyone from the Internet via the public [[Hostname#Domain Name]]. We can make use of [[Cloudflare Access]] to ensure only authenticated users can access the Cloudflare Tunnel


### Create a remotely-managed tunnel
- This requires us to have a Cloudflare account and the creation of the Cloudflare Tunnel is done inside the Cloudflare website. Refer to [Create a remotely-managed tunnel (dashboard)](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/) for more details

>[!info]- Create a locally-managed Cloudflare Tunnel with cloudflared CLI
> This approach requires you to have a config yaml file on your machine. This comes higher overhead in managing the config files in your [[File System Hierarchy]]. Refer to [Create a locally-managed tunnel (CLI)](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-local-tunnel/) for more details.

</br>

>[!abstract] Client-side Setup
> There are 2 ways to perform the **[[#Secure Tunneling Client]] ([Cloudflare Tunnel Connector](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/tunnel-useful-terms/#connector)) Installation** via **System Service** or **Docker**

**System Service** 
- Use `sudo cloudflared service install <TOKEN>` to register the connector as a service managed by [[Init System]]. You can only have **one Cloudflare Tunnel Service on one machine** at any time!


>[!info]- Cloudflare Tunnel Init System Service on Mac
> When you run `sudo cloudflared service install <TOKEN>`, a service file should be created at the following path `/Library/LaunchDaemons/com.cloudflare.cloudflared.plist`.
> 
> You can remove the Cloudflare Tunnel Service by running `sudo cloudflared service uninstall <TOKEN>`.
> 
> The Cloudflare Tunnel Service's parent is `launchd`.
> 
> ![[cloudflared_tunnel_service_btop.png|500]]

>[!info]- Cloudflare Tunnel Init System Service on Linux
> You can check the status of service the using `sudo systemctl status cloudflared`.


**Docker** 
- Run the connector as a docker container without the need to grant root access but we have to manually manage the lifecycle of the connector

>[!bug] Connector Installation Issue with Docker
> For some reasons, when I close the terminal, the connector container will auto exit. Even thought I used both `-d` and `--restart unless-stopped`. I am running Docker on my Raspberry Pi. If you know why, please comment down below to tell me why. Thanks :)








## Ngrok
---
- [Ngrok](https://ngrok.com/)’s Secure Tunneling offering
</br>

- Installation
```bash
brew install ngrok/ngrok/ngrok
```

- Secure Tunneling of a local port
```bash 
ngrok http <PORT_NUMBER>
```

- Secure Tunneling of a local port with Google OAuth
```bash 
ngrok http --oauth=google --oauth-allow-email=<GOOGLE_EMAIL> <PORT_NUMBER>
```
</br>

- Refer to [Ngrok Docs](https://ngrok.com/docs/getting-started/)for more configuration details