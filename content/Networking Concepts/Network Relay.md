---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-10-10T10:42:00
Last Date: 2024-04-18T23:39:33+08:00
References: 
---
## Abstract
---
- A **third-party server (the relay)** acts as an **intermediary** between two devices that want to communicate but can't connect directly (often due to firewalls or NAT). One example is the [[Secure Tunneling#Secure Tunneling Server]], [[Email Routing]] and [[#Socat Relay]] etc

**Mechanism** 
- Both devices establish a connection to the relay server
- The relay server coordinates the data flow between the devices, even if they can't "see" each other directly on the network

>[!tip] Bridge of Differences
> Can be used to connect networks that use different [[Network Protocol]], extending the range of a network



## Socat Relay
---
- The command below relays [[TCP]] from a local machine [[Network Port]] to a remote network port running on TCP. The command creates a new [[Process (进程)]] for new connection on `localhost:<LOCAL_PORT_NUMBER>`, incoming requests are all **port forwarded** to the `<REMOTE_ENDPOINT>:<REMOTE_PORT_NUMBER>` over TCP
- We can change the [[Network Protocol]] used on both sides, socat acts as a bridge

```bash
# -d -d enables debug mode
# TCP-LISTEN:<PORT_NUMBER>,fork forks a new process for each incoming connection
sudo socat -v -d -d TCP-LISTEN:<LOCAL_PORT_NUMBER>,fork TCP4:<REMOTE_ENDPOINT>:<REMOTE_PORT_NUMBER>
```


>[!help]
> Socat is very slow compared to [[#SSH Local Port Forwarding]] for some reasons. Let me know if you know why :)