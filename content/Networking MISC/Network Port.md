---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - bash
Creation Date: 2023-10-04T10:32:00
Last Date: 2024-04-08T20:06:09+08:00
---
## Abstract
---
- [[IP Address]] only give 1-1 connection between 2 entities, **Network Port** allows Many-Many connection between 2 entities. So we can have many different services running under the same IP Address, we just need to assign a different network port for each service to make the services distinguishable 


## Useful CLi Commands
---
```bash title="Test for a Open Port"
telnet <IP_ADDRESS> <PORT_NUMBER>
```

```bash title="Check what service is running on specific port"
sudo lsof -i tcp:<port_number>
```