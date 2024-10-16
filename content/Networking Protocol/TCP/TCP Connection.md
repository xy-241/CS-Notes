---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2024-10-16T16:09:05+08:00
References: 
---
## Abstract
---
- We need to a TCP connection before 2 [[Host]] can communicate over the [[Computer Network]]
- Established with [[TCP Handshake]]


>[!caution] Resource intense
> More resource is required on both [[Host#Client]] and [[Host#Server]] because TCP is a [[Network Protocol#Stateful Network Protocol]].


>[!info] TCP connection in browser
> Browser usually keep multiple TCP Connection to the same [[Host#Server]]. [[Chrome]] & [[Firefox]] default have 6 to have a balance between performance & resource usage

## TCP Connection Termination 
---
- There are 2 options for closing a [[TCP Connection]]

### Graceful TCP Connection Termination
- Four-way closure with `FIN` flags

>[!important] 4 events
> 1. `A -> B`: `A` sends a `FIN` packet to `B`, with its final [[TCP#Sequence Number]] of `x`.
> 2. `A <- B`: `B` [[TCP#TCP ACK|ACK]] and responds to `A` with an [[TCP#Acknowledgement Number|acknowledgment number]] of `x+1`, indicating that it has received `A`'s `FIN` packet.
> 3. `A <- B`: Since [[TCP]] is bidirectional, `B` also sends its own FIN packet to `A`, with its final sequence number of `y`.
> 4. `A -> B`: `A` ACK and responds `B` with an acknowledgment number of `y+1`, indicating that it has received `B`'s `FIN` packet.
> 
> For events two and three, both occur from `B` to `A`, and the fields used in the TCP packet do not overlap, meaning both events can happen in the same packet. 
> 
> However, these events are usually separated. For example, `A` may initiate the connection termination (step one) after finishing sending its data, but `B` may still have data to send. In this case, when `B` receives the `FIN` packet, it cannot immediately proceed to step three. `B` must finish sending its data before sending its own `FIN`. Meanwhile, `A` can still receive data from `B` even after sending its `FIN` packet.

### Ungraceful TCP Connection Termination
- One-way closure with `RST` flags. A `RST` flag is typically used in scenarios where the **connection cannot be continued**, either due to unexpected behaviour, errors, or **forceful termination by the application**

>[!important] 1 event
> `A <-> B`: Either party can send an `RST`. Once sent, the party will forget everything about that [[TCP Connection]], and the party that receives it will also forget everything. 
> 
> The `RST` does not need to be acknowledged!