---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-09-25T00:07:00
Last Date: 2024-10-16T20:18:43+08:00
---
## Abstract
---
- Stands for **Carrier Sense Multiple Access**
- Basically multiple [[Host]] share the same [[#Carrier]] to communicate

>[!question] How does computers know if they should process the incoming data
> When one computer sends a piece of data to another computer, the other computers sharing the same carrier will also receive the data. This can be solved using [[MAC Address]]. The computer only processes the data when the recipient address matches it's MAC address in the data.
### Carrier
- Refers to any shared transmission medium
- Copper wire in the case of [[Ethernet]]
- Air carrying radio waves for [[Wi-Fi]]
### Multiple Access
- Refers to many computers can send [[Data]] over the same [[#Carrier]] simultaneously 

### Collision
- Happens more than one computer on the [[#Carrier]] sand [[Data]] at the same time
- Data in the carrier will get messed up, requires a re-send
- Can be detected by listening on the signals on the carrier

>[!important] Collision among computers
> Handled by [[Exponential Backoff]].



