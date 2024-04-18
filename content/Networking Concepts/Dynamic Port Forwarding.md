---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-04-18, 23:01
Last Date: 2024-04-19T00:32:21+08:00
References: 
draft: 
description: 
---
## Abstract
---
- WIP 
### Using dynamic forwarding to bypass network restrictions 
- **Client machine** can be devices like our laptops that are connected to the company network which has a strict firewall setting that doesn't allow us to access this [wonderful website](https://notes.yxy.ninja)
- **Intermediate server** can be a [[Host]] that is outside the company network that has access to the [wonderful website](https://notes.yxy.ninja), and most importantly it isn't blacklisted by the company's strict firewall, that means the **client machine** is able to access it without any issues
- **Destination machine** is basically the [[Host#Server]] that serves this [wonderful website](https://notes.yxy.ninja)

## SSH Dynamic Port Forwarding
## sshuttle
---
- Creating **VPN-like tunnels** over [[SSH]], install with `brew install sshuttle`