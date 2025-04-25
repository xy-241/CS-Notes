---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2023-07-15T18:13:28+08:00
Last Date: 2025-04-25T19:08:27+08:00
References: 
description: Comprehensive guide to Address Resolution Protocol (ARP) - Learn how ARP maps IP addresses to MAC addresses, understand ARP cache, and master practical commands for network troubleshooting on macOS and Linux systems.
---
## Abstract
---
- A [[Network Protocol]] that resolves [[IP Address]] to [[MAC Address]]


>[!question] Why do we need Address Resolution Protocol?
> We need **MAC Address** in order to **route the data** from **one machine** to **another** on [[Computer Network#Local Area Network (LAN)]].


## ARP Cache
---
- ARP Cache is a mapping of [[IP Address]] and [[MAC Address]] stored in the computer to reduce the frequency of querying the MAC address of other machines
- You can view this copy using `arp -a` or `ip neighbor show` on [[Linux Kernel|Linux Distro]]

## Practical Usage
---
### Getting Private IP & Subnet Mask on macOS
- Private IP:
  ```bash
  ipconfig getifaddr en0
  ```
  → Example output: `172.31.22.131`

- Subnet Mask:
  ```bash
  ipconfig getoption en0 subnet_mask
  ```
  → Example output: `255.255.252.0` (equivalent to /22)

  Meaning:
  - Network range: `172.31.20.0` – `172.31.23.255`
  - Usable IPs: `172.31.20.1` – `172.31.23.254`
  - Broadcast IP: `172.31.23.255`
  - Likely default gateway: `172.31.20.1`

### ARP Table Behavior
- View ARP table:
  ```bash
  arp -a
  ```
- **ARP maps local IPs (in same subnet) to MAC addresses**
- Example output:

  ```
  ? (172.31.20.1) at 0:0:5e:0:1:d6 on en0
  ```

### Accessing External IPs
- When accessing external IPs (like `8.8.8.8`):
  1. Machine checks the subnet → sees IP is not local
  2. Routes the packet to the default gateway
  3. Uses ARP only to get the MAC of the gateway
  4. Only IPs in local subnet get ARP-resolved to MACs
  5. Everything else routes via the gateway MAC