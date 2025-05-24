---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-04-07, 00:57
Last Date: 2025-05-24T14:57:58+08:00
References: 
draft: 
description: Learn how to logically divide a computer network into smaller, efficient subnets for better security and manageability. Use our embedded visual subnet calculator to plan IPv4 subnetting, and follow practical CLI commands to find your IP range, subnet mask, and more.
---
## Abstract
---
- Logical division of a [[Computer Network]] into smaller isolated network for better efficiency, security, and manageability
- You can use the visual subnet calculator to plan out the logical division for [[IP Address#IPv4]]

<div class="onecompilerCode-wrapper"><iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://www.davidc.net/sites/default/subnets/subnets.html?network=192.168.0.0&mask=16&division=5.50" 
 ></iframe>
 </div>

>[!important] Reserved IP addresses of a subnet
> Every subnet reserves:
> - First address as **network identifier** (also known as network address) used by [[Network Router|routers]] in its routing table to represent the destination network 
> - Last address as [[IP Address#IP Broadcast Address|broadcast address]]

## Obtain IP Range of a Subnet
---
1. Get private IP address with `ipconfig getifaddr <network_interface>`, example output: `172.31.22.131`
2. Get the subnet mask with `ipconfig getoption <network_interface> subnet_mask`, example output: `255.255.252.0` (equivalent to `/22`)
3. The bitwise AND operation (`&`) between the IP and subnet mask determines the network address (`172.31.20.0`), while the broadcast address (`172.31.23.255`) is found by setting **all host bits** to `1`
```
  10101100.00011111.00010110.10000011 (172.31.22.131)
& 11111111.11111111.11111100.00000000 (255.255.252.0)
-------------------------------------
  10101100.00011111.00010100.00000000 -> 172.31.20.0

Setting all host bits (last 10 bits to 1)
  10101100.00011111.00010111.11111111 -> 172.31.23.255
```
- Network range: `172.31.20.0` – `172.31.23.255`
- Broadcast IP: `172.31.23.255`
- Usable IPs: `172.31.20.1` – `172.31.23.254`
- Likely default gateway: `172.31.20.1`

>[!tool] Automate the calculation
> <div class="onecompilerCode-wrapper"><iframe class="onecompilerCode" frameBorder="0" src="https://www.calculator.net/ip-subnet-calculator.html#breadcrumbs"></iframe></div>


