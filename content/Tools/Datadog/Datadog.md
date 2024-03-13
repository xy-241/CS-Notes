---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-10-15T21:32:00
Last Date: 2024-03-13T15:27:41+08:00
References: 
---
## Abstract
---
- A set of monitoring tools provided by a company called **Datadog**


## Datadog Integration
---
- In order for us to use **Datadog services** on other platforms, we need to integrate with those platforms first
- **Datadog** provides a [list of supported integrations](https://docs.datadoghq.com/integrations/#all) for different third party services

### AWS Integration
- There are [many ways](https://docs.datadoghq.com/integrations/amazon_web_services/) to integrate **AWS** with **Datadog**. The easiest way is [automated AWS integration using CloudFormation](https://docs.datadoghq.com/getting_started/integrations/aws/)

## Datadog Agent
---
![[datadog_architecture.png|500]]
- A service that runs alongside the application to collect various [[Event-Driven Architecture#Event |Events]] and [[Monitoring#Metric]], and sends it to the **Datadog servers**

>[!caution] Different from Datadog ddtrace
> [[Datadog#Datadog ddtrace]] runs as part of the app runtime.

### DogStatsD
- An implementation of [[StatsD]] protocol
- A **Metrics Aggregation Service** bundled with [[Datadog#Datadog Agent]] to send **custom metrics** from application to **Datadog servers**
- Runs on port `8125` by default

## Datadog ddtrace
---
- Datadog ddtrace is a piece of software used to collect [[Trace]] of an application 
- You can integrate Datadog ddtrace with applications easily by [adding the tracer via command line arguments](https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/python/#instrument-your-application) in an non-intrusive manner. If you need to collect more customised traces, you can do so by [adding the tracer into application source codes](https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/python/#configuration)

>[!tip] Datadog ddtrace Configuration
> We can configure the Datadog ddtrace by using this [list of environment variables](https://ddtrace.readthedocs.io/en/stable/configuration.html#). I always set the `DD_ENV` and `DD_SERVICE` to get [[Trace]] categorised nicely inside the Datadog dashboard.




## References
---
- [Official Datadog Tracing Library](https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/)
- [ddtrace Configuration](https://ddtrace.readthedocs.io/en/stable/installation_quickstart.html)

- [Official Datadog Supported Integrations](https://docs.datadoghq.com/integrations/#all)
- [Offical Datadog and AWS Integration](https://docs.datadoghq.com/integrations/amazon_web_services/)