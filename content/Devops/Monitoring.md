---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
  - devops
  - binance
Creation Date: 2024-01-02, 13:05
Last Date: 2024-11-16T23:41:07+08:00
References: 
draft: 
description: Getting alerted when something bad is about to happen
---
## Abstract
---
- This system tracks overall health by **observing predefined [[Observability#Metric|metrics]]** and **alerts** you when something goes wrong **based on established thresholds**, preventing issues before they escalate


## 4 Golden Monitoring Signals
---
- **Latency:** The time it takes for a request to travel from the client to the server and back
- **Traffic:** The number of requests a system receives over a specific period
- **Error rate:** The percentage of requests resulting in errors, such as 404 Page Not Found or 500 Internal Server Error
- **Saturation:** A measure of resource utilisation, including CPU, memory, and disk space


>[!success] Data points for optimisation
> These data points allow us to easily **evaluate overall performance** and **application health**, enabling informed decisions about **optimisation** and **scaling**.


## References
---
- [Observability vs. Monitoring - YouTube](https://www.youtube.com/watch?v=vY61h6cSkVA&t=700s&pp=ygUbb2JzZXJ2YWJpbGl0eSB2cyBtb25pdG9yaW5n)