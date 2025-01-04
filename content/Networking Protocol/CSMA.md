---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-09-25T00:07:00
Last Date: 2025-01-04T22:23:09+08:00
description: Carrier Sense Multiple Access (CSMA) allows multiple hosts to share a transmission medium like Ethernet or Wi-Fi. Collisions occur when devices send data simultaneously, causing packet loss. Collisions are minimized with bridges and managed using the exponential backoff algorithm for efficient networking.
---
## Abstract
---
- Stands for **Carrier Sense Multiple Access**
- Essentially, [[Host|multiple hosts]] share the same [[#Carrier|carrier]] to communicate

>[!important] Carrier
> Refers to any shared transmission medium.
> 
> **Copper wire** in the case of [[Ethernet]]. **Air carrying radio waves** for **Wi-Fi**.

>[!important] Multiple access
> Refers to the ability of many computers to send **data** over the same **carrier** simultaneously


>[!question] How do computers know if they should process the incoming data?
> When one computer sends a piece of data to another computer, all other computers sharing the same carrier also receive the data. This is resolved using the [[MAC Address]]. A computer **processes the data only if the recipient address in the data matches its own MAC address**.


## Collision
---
- Occurs when more than one computer on the same **collision domain** (sharing the [[CSMA|same carrier]]) sends **data** simultaneously. This causes data on the carrier to become corrupted, requiring a retransmission. This phenomenon is also known as [[Network Router#Packet Loss|packet loss]]
- Collisions can be detected by monitoring the signals on the carrier.

>[!important]
> The more devices connected to the same network, the higher the likelihood of collisions. This reduces the network's performance due to frequent retransmissions.
> 
> To mitigate this, a **bridge device** can be used to divide a network into multiple smaller networks (subnetworks). This reduces the number of devices in each network, thereby lowering the likelihood of collisions.
> 
> Another way to handle it is to use [[Exponential Backoff|exponential backoff algorithm]].



## References
---
- [Docker Networking Tutorial (Bridge - None - Host - IPvlan - Macvlan - Overlay) - YouTube](https://youtu.be/fBRgw5dyBd4?si=7r7CmRrOzOTiaGxL)



