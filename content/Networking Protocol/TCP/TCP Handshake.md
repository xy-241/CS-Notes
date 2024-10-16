---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-08-31T14:56:09+08:00
Last Date: 2024-10-16T15:16:55+08:00
References: 
---
## Abstract
---
![[TCP_handshake.png|500]]

- A 3-way handshake which includes 4 events to start a [[TCP Connection]]


>[!important] 4 events
> 1. `A -> B`: `A` sends a [[TCP#Sequence Number|SYN packet]] to `B`, with its [[TCP#Sequence Number|Initial Sequence Number (ISN)]] set to `x`. The [[TCP#Acknowledgement Number]] is set to all zeros.
> 2. `A <- B`: `B` [[TCP#TCP ACK|ACK]] and informs `A` that it is ready for `x+1`, indicating that it has received `A`'s SYN packet.
> 3. `A <- B`: Since [[TCP]] is bidirectional, `B` also sends its own SYN packet to `A`, with its ISN set to `y`.
> 4. `A -> B`: `A` ACK and informs `B` that it is ready for `y+1`, confirming that it has received `B`'s SYN packet.
> 
> For events two and three, both occur from `B` to `A`, and the fields used in the TCP packet do not overlap. This means both events happen in the same packet. This is why the 3-way handshake consists of 4 events.