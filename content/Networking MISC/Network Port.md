---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - bash
Creation Date: 2023-10-04T10:32:00
Last Date: 2024-02-25T14:46:40+08:00
---
## Abstract
---
- Allow entities to form connection when there is more than one application running on both sides
- [[IP Address]] only give 1-1 connection between 2 entities, **Network Port** allows Many-Many connection between 2 entities 


## Useful CLi Commands
---
```bash title="Test for a Open Port"
telnet <IP_ADDRESS> <PORT_NUMBER>
```

```bash title="Check what service is running on specific port"
sudo lsof -i tcp:<port_number>
```