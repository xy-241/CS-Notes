---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - opcode
Creation Date: 2023-10-03T11:11:00
Last Date: 2025-05-15T14:56:04+08:00
description: IP multicast enables efficient one-to-many data delivery. Learn how it works, its protocols (IGMP, PIM), use cases, and network requirements.
---
## Abstract
---
- A [[Network Protocol|network protocol]] that allows a single source to send [[Data|data]] to **multiple receivers simultaneously**
- Similar to broadcasting, but more efficient because data is is only **sent once**, and then **replicated by network to reach all receivers**
- When a source sends a **multicast packet**, it uses a [[#Multicast IP address]] as the **destination address**. The network then replicates the packet and sends it to all of the receivers in the [[#Multicast Group|multicast group]]


>[!important] Common use cases
>**Campus networks**
>
> **Enterprise networks**
> 
> **LAN gaming and communication**
>
> **IPTV services by ISPs**
> 
> **Providing real-time stock-market data**
> - All market participants receive the same information at the same time to ensure the market is fair
>
> **Service Discovery**
> - Protocols like SSDP use multicast for device discovery
>
> **Routing Protocols**
> - OSPF and RIP2 use multicast for routing updates

>[!important] Limitations
> - Not widely supported across the public internet
> - Requires multicast-aware infrastructure throughout the path
> - Security and traffic management concerns for ISPs
> - Complex to implement and troubleshoot

## Fundamental Concepts
---

### Types of Network Communication
- **Unicast**: One sender to one receiver (TCP and UDP)
- **Broadcast**: One sender to all hosts (UDP only)
- **Multicast**: One sender to a group of hosts (UDP only)

### Multicast vs. Broadcast
- Broadcast uses a single IP address (all host bits set to 1's)
- Broadcasts are not forwarded by routers; multicasts are
- All hosts receive broadcasts by default
- Hosts must specifically subscribe to receive multicast traffic

### Multicast IP address
- [[IP Address]] in the range `224.0.0.0` to `239.255.255.255` (Class D addresses)
- `224.0.0.0-224.0.0.255` reserved for network protocols (not forwarded by routers)
- [[MAC Address|MAC Multicast Addresses]]: Always start with `01:00:5E`, with the 8th counting from left set to `1`

### Multicast Group
- A logical group for receivers who are interested in receiving [[Data]] from sender
- Joining is done by sending an [[#IGMP (Internet Group Management Protocol)]] join message to the network
- Once a receiver has joined a multicast group, it will continue to receive all of the packets that are sent to that group, until it leaves the group
- A host can be part of multiple groups
- Hosts/routers don't maintain lists of individual group members
- Hosts can send to multicast groups even without being members

## Network Protocols for Multicast
---

### IGMP (Internet Group Management Protocol)
- **Function**: Host-to-router communication for [[#Multicast Group|group membership]]
	- Join messages (subscribe to groups)
	- Leave messages (unsubscribe from groups)
	- Query/Report messages (membership maintenance)
- **Layer**: Operates at Network layer (Layer 3)
- Doesn't handle routing between networks

### PIM (Protocol Independent Multicast)
- **Function**: Router-to-router protocol for multicast distribution, builds multicast distribution trees between networks
- **Independence:** Works with any unicast routing protocol (OSPF, BGP, etc.)
- **Modes**:
	- Sparse Mode (PIM-SM): Uses Rendezvous Points, efficient for widespread networks
	- Dense Mode (PIM-DM): Flood and prune approach for densely clustered receivers
	- Bidirectional PIM: Shared trees without source-specific state
	- Source-Specific Multicast (PIM-SSM): Direct source-to-receiver optimization

### IGMP Operation
- Routers send IGMP queries to 224.0.0.1 (all hosts)
- Hosts respond with IGMP reports to join groups
- Routers track which interfaces (not specific hosts) have group members

## Network Equipment Roles 
---
### Router 
- Maintain multicast group membership tables, one entry for that interface-group pair
- Forward multicast packets between networks
- Use [[#PIM (Protocol Independent Multicast)|PIM]] to build distribution trees
- Interact with hosts via [[#IGMP (Internet Group Management Protocol)|IGMP]]

### Switch 
- [[#IGMP Snooping]]: Examines IGMP traffic to optimise forwarding
- Maps [[#Multicast Group|multicast groups]] to specific switch ports
- Prevents unnecessary traffic flooding
- Operates at Layer 2 (data link layer)

## Multicast Optimisation Technologies
---

### IGMP Snooping
- Layer 2 (switch) optimisation
- Examines IGMP messages to build forwarding tables
- Maps multicast MAC addresses to specific switch ports
- Prevents flooding of multicast traffic to uninterested ports

### IP-to-MAC Multicast Mapping
- Multicast IP addresses map to multicast MAC addresses
- Formula: The first 25 bits are fixed (01:00:5E + 0 bit)
- Last 23 bits of IP address map to last 23 bits of MAC address
- This mapping isn't one-to-one (32 IP addresses can map to one MAC)


## References
---
- [Understanding IP Multicasting](http://www.steves-internet-guide.com/introduction-multicasting/)
- [Multicast - Understand How IP Multicast Works](https://www.firewall.cx/networking/network-fundamentals/network-multicast.html)
- [Multicast Networking: Everything You Need to Know](https://www.auvik.com/franklyit/blog/multicast-networking/)


