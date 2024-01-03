---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-12-13, 13:55
Last Date: 2023-12-21T11:13:14+08:00
References: 
---
## Abstract
---
There are 2 ways to trace applications:
1. [Adding the tracer in Code](https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/python/#configuration)
2. [Adding the tracer via command line arguments](https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/python/#instrument-your-application)

I usually start with the second way. Because it is not intrusive, so it is easy to add in. And it is already pretty powerful

## Fine-tune ddtrace
---
We can fine tune the *tracer* by using this [list of environment variables](https://ddtrace.readthedocs.io/en/stable/configuration.html#) 

I always set the `DD_ENV` and `DD_SERVICE` to get [[Trace]] display nicely inside the Datadog dashboard



## References
---
- [Official Datadog Tracing Library](https://docs.datadoghq.com/tracing/trace_collection/dd_libraries/)
- [ddtrace Configuration](https://ddtrace.readthedocs.io/en/stable/installation_quickstart.html)