---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2023-10-20T14:54:00
Last Date: 
References:
---
## Abstract
---
- A detailed list of [[Event-Driven Architecture#Event|Events]] that happen within the system/application 
- Examples can be *web server log* which contains the IP, data & time of [[HTTP Request]]


## Terminologies
---
### Router
![[log_router_fluentd-architecture.png]]
- A tool or service that collects log data from *various sources* and *forwards* or routes it to *one or more destinations* 
- Play a crucial role in centralized logging architectures, especially in environments with *multiple* applications, services, or systems that generate logs
- Examples are Fluentd, Fluent Bit(If you need a lightweight, high-performance log shipper, especially for containerized or edge environments, Fluent Bit is the way to go), Logstash (part of the ELK Stack), and AWS FireLens (for Amazon ECS and EKS)