---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-04-19, 20:39
Last Date: 2024-05-02T00:12:57+08:00
References: 
draft: 
description: Build your own Ngrok with remote port forwarding
---
## Abstract
---
- A technique used for **remote machine** to access a service running on **our machine** via an **intermediate server**. It is like the reverse of [[Local Port Forwarding]]. The **intermediate server** functions like a [[Reverse Proxy (反向代理)]], the [[Host#Client]] doesn't know which server it is actually accessing


>[!important] Main purpose: exposing private services with ease securely
> The main purpose of remote port forwarding is exposing **private services** running on **our machine** in [[Computer Network#Local Area Network (LAN)]] as if they are running on the **intermediate server** which is publicly accessible. By exposing the **private services**, we don't need to modify **our machine**'s [[Firewall]] or [[Network Router]]'s firewall, like what can be achieved with [[Secure Tunneling#Cloudflare Tunnel]] and [[Secure Tunneling#Ngrok]].
> 
> **Our machine** usually located in a [[Computer Network#Local Area Network (LAN)]] and isn't expose to the [[Internet]], but has direct access to the **intermediate server**.
> 
> **Intermediate server** needs be a machine is exposed to the **remote machines** and **our machine**. [Bastion host - Wikipedia](https://en.wikipedia.org/wiki/Bastion_host) that has direct access to the **destination machine**
> 
> **Remote machines** are machines that have direct access to the **intermediate server**, but no direct access to **our machine**.
> 
> Refer to [[#SSH Remote Port Forwarding]] for a more visual and concrete explanation.



## SSH Remote Port Forwarding
---
- Using [[SSH]] to build up a secure connection between the **our machine** and the **intermediate server**, this prevents man-in-the-middle attack. The data is transferred in the [[SSH#SSH Channel]]
</br>

>[!attention]
> In order to have SSH remote port forwarding setup successfully, you need to modify `/etc/ssh/sshd_config` on the **intermediate server**, and have `GatewayPorts yes` added in!

- The diagram below shows the SSH commands used to create a [[Remote Port Forwarding]]. So the remote services can access private service running on the **our own machine** via the **intermediate server**

![[ssh_remote_port_forwarding_1.png|500]]


- The private services don't need to be running on your own machine, it can be **any private services** that **our own machine has access to**!

![[ssh_remote_port_forwarding_2.png|500]]




## References
---
- [A Visual Guide to SSH Tunnels: Local and Remote Port Forwarding](https://iximiuz.com/en/posts/ssh-tunnels/)