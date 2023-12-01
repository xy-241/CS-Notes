---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-10-15T21:25:00
Last Date: 
References:
---
## Abstract



## Architecture
![[datadog_architecture.png]]


## Setup
### APM Setup
- [Official Docs](https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/python/?tab=containers)
1. Configure [[#Agent]] for [[Application Performance Monitoring (APM)]]
2. Add *Datadog Tracing Library* to code
- By default, runs on port `8126`

## Terminologies 
### Backend
### Agent
- A service that runs alongside the application to collect various [[Event-Driven Architecture#Event |Events]] and [[Metric]], and sends it to the [[#Backend]]

### Host Map
- A visualisation of the host information & status, can be found under `Infrastructure -> Host Map` & `Infrastructure -> Infrastructure List`
### Telemetry
- A tool used for automatic collection, transmission, and measurement of data from remote sources
- A sharp tool to optimise, debug & monitor system

### Tagging
- A way of adding dimensions to *Datadog* [[#Telemetry|Telemetries]] so they can be [[Aggregation|aggregated]] and compared in Datadog visualisations 