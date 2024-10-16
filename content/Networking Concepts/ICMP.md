---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-09-27, 18:05
Last Date: 2024-10-16T13:41:15+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Can be used to gauge the latency between devices.
- If a packet is too large, the router will drop it and send an ICMP message back to the original source.

>[!danger] Attacks
> - ICMP flood attack: each ICMP echo request requires an ICMP echo reply from the server, which consumes computational resources.
> - Ping of death

### ICMP Packet
- An ICMP header follows a normal IP header.
- When a router or server needs to send an error message, the ICMP packet's data section always contains a copy of the IP header of the packet that caused the error.

## ICMP Mechanism
---
- Not associated with transport layer protocols such as TCP or UDP. Therefore, ICMP is connectionless; one device does not need to open a connection with another device before sending an ICMP message.

>[!important]
> The ICMP protocol also does not allow for targeting a specific port on a device.

## ICMP TTL
---
- TTL is a field in the IP header that **limits the lifetime of a packet** as it traverses the network. Every time a packet passes through a router (a hop), the router decreases the TTL by `1`. When the TTL reaches `0`, the router **discards the packet** and sends an **ICMP Time Exceeded** message back to the sender

>[!important]
> Used by `traceroute` to determine the path (or route) that packets take from one device to a destination across a network.
## References
---
- [What is ICMP? | Internet Control Message Protocol | Cloudflare](https://www.cloudflare.com/en-gb/learning/ddos/glossary/internet-control-message-protocol-icmp/)