---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
  - devops
  - binance
  - over
Creation Date: 2024-01-02, 13:05
Last Date: 2025-07-20T20:03:46+08:00
References: 
draft: 
description: Getting alerted when something bad is about to happen
---
## Abstract
---
- This system tracks overall health by **observing predefined [[Observability#Metric|metrics]]** and **alerts** you when something goes wrong **based on established thresholds**, preventing issues before they escalate


## 4 Golden Monitoring Signals
---
> Let's Track Every System


- **Latency:** P50, P95, P99 response times
- **Traffic:** Requests per second, [[Bandwidth#Network Throughput]]
- **Error rate:** Error rates, 4xx/5xx responses
- **Saturation:** CPU, memory, disk, network utilization etc


>[!success] Data points for optimisation
> These data points allow us to easily **evaluate overall performance** and **application health**, enabling informed decisions about **optimisation** and **scaling**.


## References
---
- [Observability vs. Monitoring - YouTube](https://www.youtube.com/watch?v=vY61h6cSkVA&t=700s&pp=ygUbb2JzZXJ2YWJpbGl0eSB2cyBtb25pdG9yaW5n)