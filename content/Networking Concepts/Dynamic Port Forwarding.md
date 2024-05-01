---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-04-18, 23:01
Last Date: 2024-05-01T23:51:07+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Turn [[SSH]] into a [[SOCKS#SOCKS Proxy]] that allows us to **bypass network restrictions**


 
>[!important] Bypass network restrictions
> ![[ssh_dynamic_port_forwarding.png]]
> 
> **Client machine** can be devices like our laptops that are connected to the company network which has a strict firewall setting that doesn't allow us to access this [wonderful website](https://notes.yxy.ninja).
> 
> **Intermediate server** can be a [[Host]] that is outside the company network that has access to the [wonderful website](https://notes.yxy.ninja), and most importantly it isn't blacklisted by the company's strict firewall, that means the **client machine** is able to access it without any issues.
> 
> **Destination machine** is basically the [[Host#Server]] that serves this [wonderful website](https://notes.yxy.ninja)

>[!important] Dynamic
> Unlike [[Local Port Forwarding#SSH Local Port Forwarding]] and [[Remote Port Forwarding#SSH Remote Port Forwarding]] where we need to specify a [[Network Port]] on the **remote server**, dynamic port forwarding doesn't need us to do so, because it allows us to forward the traffic to an **arbitrary destination** like a **website** the local machine is unable to access with the help of the **remote server**.
## sshuttle
---
- Creating **VPN-like tunnels** over [[SSH]], install with `brew install sshuttle`

