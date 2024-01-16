---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-10-10T10:42:00
Last Date: 2024-01-16T20:59:49+08:00
References: 
---
## Abstract
---
- Establish a *relationship* between *two data sources*
- Connecting networks that use different [[Network Protocol]], extending the range of a network

### Create Relay Between Local to Remote
- Creating a *Relay* on local machine:port listening on [[TCP]], and forward it to the destination:port over TCP
- So for requests hitting `local:<PORT_NUMBER>` on TCP, it is *relay* to the `<PRIVATE_ENDPOINT>:<PORT_NUMBER>` over TCP
```bash
sudo socat -v -d -d TCP-LISTEN:<PORT_NUMBER>,fork TCP4:<PRIVATE_ENDPOINT>:<PORT_NUMBER>
```
