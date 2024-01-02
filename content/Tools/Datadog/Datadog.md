---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-10-15T21:32:00
Last Date: 2024-01-02T13:06:39+08:00
References: 
---
## Abstract
---
- A set of monitoring tools provided by a company called *Datadog*

## Components
---
### Agent
- A service that runs alongside the application to collect various [[Event-Driven Architecture#Event |Events]] and [[Monitoring#Metric]], and sends it to the *Datadog servers*
>[!caution] Different from [[Datadog ddtrace]] which is on the application side
### DogStatsD
- An implementation of [[StatsD]] protocol
- A *Metrics Aggregation Service* bundled with [[Datadog#Agent]] to send *custom metrics* from application to **Datadog servers**
- Runs on port `8125` by default
![[datadog_architecture.png]]
## Setup
---
- [[Datadog Integration]]
- [[Datadog ddtrace]]
- [[Datadog APM#ECS Fargate Setup]]
- [[Datadog RUM]]


## Terminologies 
---
### Telemetry 
- A tool used for automatic collection, transmission, and measurement of data from remote sources
- A sharp tool to optimise, debug & monitor system