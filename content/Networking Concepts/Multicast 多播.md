---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-10-03T11:11:00
Last Date: 2024-10-16T16:58:12+08:00
---
## Abstract
---
- A [[Network Protocol|network protocol]] that allows a single source to send [[Data|data]] to **multiple receivers simultaneously**
- Similar to [[Broadcasting]], but more efficient because data is is only **sent once**, and then **replicated by network to reach all receivers**
- When a source sends a **multicast packet**, it uses a [[#Multicast IP address]] as the **destination address**. The network then replicates the packet and sends it to all of the receivers in the [[#Multicast Group|multicast group]]


>[!important] Common use cases
> **Software Update**
> - Used to distribute software updates to multiple devices simultaneously
> 
> **Video Conferencing**
> - Send audio and video streams to multiple participants in a video conference
>
>  **Online Gaming**
>  - Send game state updates to multiple players simultaneously

### Multicast IP address
- [[IP Address]] in the range `224.0.0.0` to `239.255.255.255`

### Multicast Group
- A logical group for receivers who are interested in receiving [[Data]] from sender
- Joining is done by sending an [[IGMP (Internet Group Management Protocol)]] join message to the network
- Once a receiver has joined a multicast group, it will continue to receive all of the packets that are sent to that group, until it leaves the group

