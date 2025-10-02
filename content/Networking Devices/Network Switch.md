---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-07-13T22:32:55+08:00
Last Date: 2025-10-02T13:35:59+08:00
References:
---
## Abstract
---
![[network_switch.svg]]
- Serves as a **central device** that **bridges up** all the [[Host]] on a [[Computer Network#Local Area Network (LAN)]], forwards **data packets** among the hosts with the use of [[MAC Address]]
- Network switch can **only read the MAC Address information** from the data it receives, the **other information** is just a **stream of meaningless zeros & ones** to the network switch
- The network switch maintains a **MAC Address Table**, so it knows **which switch port** it should **forward the data to**, **avoids** forwarding the data to **all the switch ports** 

>[!important]
> With the help of network switch, **each host** just needs to have one **single connection** to the **network switch** to **communicate** with **other hosts** connected to the network switch. 
> 
> We just need to use **one wire** to add in a new host and it is **able to communicate all other hosts** without the need to make any modifications to other hosts.

## FPGA-enabled Switches
---
- Usually used to deliver very low latency and high throughput. One industry example is [[FPGA]] [[Network Switch|network switch]] is Arista 7130

>[!info] Arista 7130's 3 features
> **MetaWatch** (provides nanosecond-accurate timestamps for PCAPs)
> - In HFT, microbursts or even a few nanoseconds of jitter can make or break trading strategies. MetaWatch allows firms to measure true wire-level latency, audit trading infrastructure, and prove regulatory compliance.
> 
> **MetaMux** (consolidates multiple network streams into a single feed with deterministic ordering)
> - Market data often comes from multiple sources (exchanges, dark pools, brokers). Combining them with minimal added latency reduces switch port requirements, lowers infrastructure cost, and ensures trading systems always process a consistent, time-ordered view of the market.
> 
> **MetaAccess** (provides controlled, low-latency access to live traffic for monitoring, analytics, or compliance)
> - Firms can observe market data and order flows in real time without interfering with production traffic. This separation helps maintain determinism in the critical trading path, while still enabling risk checks, surveillance, and post-trade analysis.