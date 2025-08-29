---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-08-20, 19:32
Last Date: 2025-08-21T17:24:47+08:00
References:
draft:
description: Learn the basics of BGP, the inter-domain routing protocol that powers the Internet. Understand eBGP vs iBGP, AS-Path, and how scalability and policy—not just speed—shape global routing.
---
## Abstract
---
![[bgp.png|400]]
- The **inter-domain routing protocol** that governs how data travels across the Internet (between [[AS|ASes]])


>[!important] The main focus
> 1. Scalability (ensures the global Internet stays _scalable and stable_, even with millions of routes.)
> 2. Policy over pure performance (each AS uses policies to manage the traffic)
> 
> The protocol that keeps the Internet glued together, not by choosing the fastest path, but by choosing the most [[#BGP Policy|“policy-correct”]] path. It’s about scalability, stability, and business agreements between ASes.

### eBGP
- Used between [[Network Router|routers]] in different [[AS|ASes]] to exchange BGP routes
- Default behaviour: routes learned from eBGP can be passed to both [[#iBGP]] and other eBGP peers

### iBGP
- Used between [[Network Router|routers]] in the same [[AS]] to distribute BGP routes learned from eBGP across the AS
- Special rule: routes learned from one iBGP neighbour are _not_ passed to another iBGP neighbour (to avoid loops) → This is why we need full-mesh or route reflectors

### AS-Path
- Shows the list of [[AS|ASes]] a route has passed through
- Shorter AS-Path is generally preferred, AS-Path is also one of the first attributes BGP considers when choosing a route

>[!important] AS-Path for loop prevention
> Helps avoid loops (if you see your own AS, drop it)


## BGP Policy
---
- [[Border Gateway Protocol]] is not just about “fastest link"
- BGP Policies depend on business deals + reputation


>[!money] Business deals + reputation
> We advertise routes that pay us or maintaining reachability for our own customers and avoid carrying free transit traffic.
> 
> We also avoid unstable [[AS|ASes]] if possible.
> 
> This mean not all possible paths are advertised and the Internet is connected enough to work, shaped by money and agreements.