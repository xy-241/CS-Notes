---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-10-10T10:42:00
Last Date: 2024-04-01T20:50:15+08:00
References: 
---
## Abstract
---
- Establish a **relationship** between **two data sources**

>[!tip] Bridge of Differences
> Can be used to connect networks that use different [[Network Protocol]], extending the range of a network

### Create Bi-directional TCP Relay Between Local and Remote
- Creating a **Relay** on local machine:port listening on [[TCP]], and forward it to the destination:port over TCP
- The command below creates a new [[Process (进程)]] for new connection on `localhost:<LOCAL_PORT_NUMBER>`, incoming requests are all **relayed** to the `<REMOTE_ENDPOINT>:<REMOTE_PORT_NUMBER>` over TCP
```bash
# -d -d enables debug mode
# TCP-LISTEN:<PORT_NUMBER>,fork forks a new process for each incoming connection
sudo socat -v -d -d TCP-LISTEN:<LOCAL_PORT_NUMBER>,fork TCP4:<REMOTE_ENDPOINT>:<REMOTE_PORT_NUMBER>
```
