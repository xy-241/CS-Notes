---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-08-19, 15:35
Last Date: 2025-08-19T16:47:13+08:00
References:
draft: false
description: Learn how Spanning Tree Protocol (STP) prevents Ethernet loops by blocking redundant paths, ensuring stable, loop-free switch networks.
---
## Abstract
---
- Eliminates loops in a network topology made of [[Network Switch|switches]] and [[Communication Links|cables]] ([[Ethernet]]), which can occur when multiple switches are connected in a redundant manner
- The resulted paths form a [[Tree|tree]], free of loops

>[!important] Prevent crashing of the entire network
> Ethernet has no [[TTL]] like IP packets, so a looping frame could literally go forever until the network dies.
> 
> As we have more and more looping frames in the network, we can crash the entire network!

>[!important] STP is old!
> STP was released in the 1980s, it has [[#STP Port State|slow convergence times (~30secs)]], potentially causing temporary disruptions during topology changes.
> 
> We have [RSTP](https://networklessons.com/spanning-tree/rapid-spanning-tree-rstp) for fast recovery, and [MSTP](https://www.pynetlabs.com/what-is-mstp-protocol/) for handling multiple VLANs efficiently. [TRILL/SPB](https://eng.libretexts.org/Bookshelves/Computer_Science/Networks/An_Introduction_to_Computer_Networks_(Dordal)/02%3A_Ethernet/2.08%3A_TRILL_and_SPB) allows using all paths without loops (like smarter STP with load balancing).

### Root Bridge
- The central point in the STP topology, chosen based on priority (default 32768, but you can configure it) and [[MAC Address|MAC address]]

## STP Port
---
### Root Port
- The port on each non-root bridge that provides the best path to the [[#Root Bridge|root bridge]]

### Designated Port
- The port on each link between two [[Network Switch|switches]] that offers the best path to the [[#Root Bridge|root bridge]]

### Blocked Port
- Redundant ports that are placed in a non-forwarding state to prevent loops

### STP Port State
- The state is different stages a switch port goes through while STP decides if it should forward traffic or stay blocked, to prevent loops

>[!important] 5 states
> 1. **Disabled**: Port is turned off / admin shut down. Not part of the "tree"
> 2. **Blocking**: Port is on, but only listens for BPDUs, no user traffic goes through which avoids loops while STP is deciding
> 3. **Listening**: Port listens to BPDUs to figure out if it should forward or block. Still doesn’t forward user traffic yet
> 4. **Learning**: Port begins learning [[MAC Address|MAC addresses]] (filling up the switch’s MAC table). Still doesn’t forward user traffic yet.
> 5. **Forwarding**: Port is fully active. Forwards user traffic and still processes BPDUs.
> 
> Listening and learning **take about 30secs** before a port starts forwarding frames.

## STP Workflow
---
### STP Election
- All [[Network Switch|switches]] exchange **BPDUs** (control messages)
- They elect **one [[#Root Bridge|root bridge]]**

### STP Path Calculation
- Each [[Network Switch|switch]] calculates its **shortest path to the [[#Root Bridge|bridge]]** (using path cost which is measured with [[Bandwidth|bandwidth]] of the [[Communication Links|cables]])

### STP Port Role Assignment
- The [[#Root Port|root port]], [[#Designated Port|designated port]] and [[#Blocked Port|blocked port]] are decided on the [[Network Switch|switches]]

### STP Traffic Forwarding
- Once the “tree” is built, **only the safe paths are active**
- The [[#Blocked Port|blocked ports]] stay closed to frames, but if something changes (like a cable fails), [[#STP Workflow|STP can re-run, unblock that port, and rebuild the tree]]