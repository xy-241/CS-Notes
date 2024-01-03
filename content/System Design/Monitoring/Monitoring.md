---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2024-01-02, 13:05
Last Date: 2024-01-02T13:15:15+08:00
References: 
draft: 
---
## Abstract
---
- Basically collecting info from different components of the system to help us to better manage the system. We can use tools like [[Datadog#Setup|Datadog]] for this task
- Improving the system's [[System Design#Reliability (可靠性)]]


## Metric
---
- A *time-bound information* related to a system captured at a certain point in time like per second/min
- Collecting different types of metrics help us to gain business insights and understand the health status of the system

### Aggregated Level Metric
- Metric that indicates the *top-level health* of system by measuring its useful output
- Examples are *success rate* & *error rate*
### Host Level Metric
- Metric that indicates *timely information* of *physical resources* like [[CPU]] & [[Main Memory]]
- Examples are *utilisation*

### Key business metrics: 
- Daily active users, retention, revenue

## Log
---
- A detailed list of [[Event-Driven Architecture#Event|Events]] that happen within the system/application 
- Examples can be *web server log* which contains the IP, data & time of [[HTTP Request]]
- Monitoring error logs is important because it helps to identify errors and problems in the system
- We can use [[Datadog]] to aggregate them for easy search and viewing

### Log Router
![[log_router_fluentd-architecture.png]]
- A tool or service that collects log data from *various sources* and *forwards* or routes it to *one or more destinations* 
- Play a crucial role in centralized logging architectures, especially in environments with *multiple* applications, services, or systems that generate logs
- Examples are Fluentd, Fluent Bit(If you need a lightweight, high-performance log shipper, especially for containerized or edge environments, Fluent Bit is the way to go), Logstash (part of the ELK Stack), and AWS FireLens (for Amazon ECS and EKS)