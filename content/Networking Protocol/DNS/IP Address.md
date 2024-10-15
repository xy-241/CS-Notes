---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - bash
Creation Date: 2023-10-03T11:14:44
Last Date: 2024-10-11T16:09:20+08:00
---
## Abstract
---
- It is like your house address, it provides the specific information to locate a [[Host]] in an [[Computer Network]]

>[!important]
> Unlike [[MAC Address|MAC addresses]], which are **flat** and identify individual devices on the **same physical** [[Computer Network#Local Area Network (LAN)|local network]], IP addresses use a **hierarchical addressing scheme**. 
> 
> This hierarchy enables **efficient routing** of data packets across the vast **interconnected networks** of the internet.
> 
> In conclusion, IP address helps in **routing between networks**, while the MAC address helps **identify devices on the same local network**.


### IPv4

![[ipv4.png|400]]

- [[IP Address]] that consists of 4 [[Computer Data Representation#Byte]]

### IPv6

![[ipv6.png|400]]

- [[IP Address]] that consists of 16 [[Computer Data Representation#Byte]]



## Private IP Address
---
- [[IP Address]] that are for **internal networks** and aren't directly routable on the [[Internet]]. They are **reused** across different [[Computer Network]]


|                           | Private IP Addresses                                                                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[IP Address#IPv4\|IPv4]] | There are 3 private IPv4 ranges:<br>- **10.0.0.0** to **10.255.255.255** (10/8 prefix)<br>- **172.16.0.0** to **172.31.255.255** (172.16/12 prefix)<br>- **192.168.0.0** to **192.168.255.255** (192.168/16 prefix) |
| [[IP Address#IPv6\|IPv6]] | Start with the prefix `FD00::/8`                                                                                                                                                                                    |


## Public IP Address
---
- The [[IP Address]] [[Host]] uses to communicate with other hosts over the [[Internet]]


## Special IP Address
---
- [[IP Address]] that has special meanings or purposes otherwise just locating a [[Host]] on the [[Computer Network]]

### Unspecified Address
- The Unspecified Address is `0.0.0.0`
- Applications listen on address `0.0.0.0`,  indicates that they are willing to accept incoming network connections from any available [[Network Interface]] on the [[Host]]
- Useful when you want the application to be accessible from multiple interfaces or [[IP Address]]

### IP Broadcast Address
- The IP Broadcast Address is `255.255.255.255`, all data with this address will be sent to all devices on the same [[Computer Network]]. The data won't be forwarded by [[Network Router]]
- Useful for tasks such as [[DHCP]] where a device needs to obtain an [[IP Address]] from a **DHCP server**, and the DHCP server needs to broadcast its availability to all devices on the network





## Useful CLI Tool
---
### ipinfo/cli
- IP geolocation and other types of IP data
- Install with `brew install ipinfo-cli`


### asn
- A more advanced [[#ipinfo/cli]] without paying any money 
- Install with `brew install asn`
- Refer to the [Github Page](https://github.com/nitefood/asn?tab=readme-ov-file#screenshots) for a list of features 

>[!caution]
> It seems like it isn't working well for [[#IPv6]], use [[#ipinfo/cli]] for IPv6 instead.


