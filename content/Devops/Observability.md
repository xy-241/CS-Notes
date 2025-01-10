---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - devops
  - binance
Creation Date: 2024-11-16, 16:25
Last Date: 2025-01-08T13:28:30+08:00
References: 
draft: 
description: Data points needed to find the root cause of an issue.
---
## Abstract
---
- There are 3 pillars of observability [[#Log]], [[#Metric]] and [[Trace]]

>[!important]
> Observability is a broader concept that includes [[Monitoring]]. The higher the observability, the faster we can **find the root cause** when **notified of an issue**.

>[!info] Linux performance observability tools
> ![[linux_performance_observability_tools.jpeg|500]]

## Metric
---
- Offer a snapshot of a system's performance over time
- Collecting different types of metrics helps us gain business insights and understand the system's health status


>[!tool]
> - [[Prometheus]]
> - [[Datadog]]

### Aggregated Level Metric
- Metric that indicates the *top-level health* of system by measuring its useful output
- Examples are *success rate* & *error rate*
### Host Level Metric
- Metric that indicates *timely information* of *physical resources* like [[CPU]] & [[Main Memory]]
- Examples are *utilisation*

### Key Business Metrics 
- Daily active users, retention, revenue

## Log
---
- A detailed list of [[Event-Driven Architecture#Event|events]] that occur within the system/application, including when and why they happened

>[!example]
> Web server logs, which contain the IP address, date, and time of HTTP request.

>[!important]
> Helps to identify errors and problems in the system.

>[!tool]
> - [[Datadog]]
> - [Grafana Loki](https://grafana.com/oss/loki/)
> - [Elasticsearch](https://medium.com/@vitalypanukhin/elasticsearch-elk-stack-for-log-management-8f4e61a60239)


### Log Router
![[log_router_fluentd-architecture.png|500]]


- A tool or service that collects log data **from various sources** and **forwards it to one or more destinations**

>[!important]
> These tools play a crucial role in **centralised logging architectures**, especially in environments with multiple applications, services, or systems that generate logs.

>[!tool]
> - Fluentd
> - Fluent Bit (a lightweight, high-performance log shipper ideal for containerised or edge environments)
> - Logstash (part of the ELK Stack)
> - AWS FireLens (for Amazon ECS and EKS)

## References
---
- [Observability vs. Monitoring - YouTube](https://www.youtube.com/watch?v=vY61h6cSkVA&t=700s&pp=ygUbb2JzZXJ2YWJpbGl0eSB2cyBtb25pdG9yaW5n)
- [Linux Performance](https://brendangregg.com/linuxperf.html)