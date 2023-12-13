---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-12-13, 13:55
Last Date: 2023-12-13T15:35:36+08:00
References: 
---
## Abstract
- There are 2 ways to trace applications, one way is [Adding the tracer in Code](https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/nodejs#adding-the-tracer-in-code), and another way is [Adding the tracer via command line arguments](https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/nodejs#adding-the-tracer-via-command-line-arguments)
>[!tip] I usually start with the second way, since it is not intrusive, so easy to add in. And it is already pretty powerful
- We can fine tune the *tracer* by using this [list of environment variables](https://ddtrace.readthedocs.io/en/stable/configuration.html#) 
>[!tip] I always set the `DD_ENV` and `DD_SERVICE` to get [[Trace]] display nicely inside the Datadog dashboard



## References
- [Official Datadog Tracing Library](https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/)
- [ddtrace Configuration](https://ddtrace.readthedocs.io/en/stable/installation_quickstart.html)