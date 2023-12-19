---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - Datadog
Creation Date: 2023-12-18, 14:20
Last Date: 2023-12-19T11:41:02+08:00
References: 
---
## Abstract
---
- The following is the architecture, we need to [[#Add Datadog Lambda Extension]], [[#Add Datadog Lambda Library]] and [[#Fine tune with Environment Variables]]
[<img src="https://datadog-docs.imgix.net/images/serverless/serverless_custom_metrics.5c2b598d14c340160ea6a2a0a360af1e.png?fit=max&auto=format">](https://datadog-docs.imgix.net/images/serverless/serverless_custom_metrics.5c2b598d14c340160ea6a2a0a360af1e.png?fit=max&auto=format)

>[!info] Understand messages generated Datadog
>Datadog gives insights to the lambda functions it is monitoring. [Here](https://docs.datadoghq.com/serverless/guide/serverless_warnings/#generated-warnings) is a list of insights it can generate, and the corresponding meanings

## Setup Example
---
We are using Python for the example. But the same setup process applies to other languages. You can refer to the [Official Guilde](https://docs.datadoghq.com/serverless/aws_lambda/installation/) for more information.

Make sure you have the following completed before moving on:
- [ ] [[Datadog Integration#AWS Integration]]

There are mainly 3 things we need to do, and we can automate the process with this [Terraform Template](https://docs.datadoghq.com/serverless/aws_lambda/installation/python/?tab=terraform#installation)
- [ ] [[#Add Datadog Lambda Extension]]
- [ ] [[#Add Datadog Lambda Library]]
- [ ] [[#Fine tune with Environment Variables]]


### Add Datadog Lambda Extension
- This serves as the [[Datadog#Agent]]
- We can add it in as a [Lambda Layer](https://docs.aws.amazon.com/lambda/latest/dg/chapter-layers.html)
- Refer to [2. Install the Datadog Lambda Extension](https://docs.datadoghq.com/serverless/aws_lambda/installation/python/?tab=custom#installation) for more implementation details



### Add Datadog Lambda Library
- This serves as [[Datadog ddtrace]]
- We can add it in as a [Lambda Layer](https://docs.aws.amazon.com/lambda/latest/dg/chapter-layers.html)
- Refer to [1. Install the Datadog Lambda library (Option A)](https://docs.datadoghq.com/serverless/aws_lambda/installation/python/?tab=custom#installation)


### Fine tune with Environment Variables
Below is a table of commonly used environment variables:

| Variable Name                | Description                                                       | Optional |
| ---------------------------- | ----------------------------------------------------------------- | -------- |
| DD_API_KEY                   | Gives the permissions to pipe monitoring data to Datadog          | No       |
| DD_SITE                      | The Datadog endpoint we want to pipe the monitoring data to       | No       |
| DD_TRACE_ENABLED             | If we want to enable [[Trace]] or not                             | Yes      |
| DD_ENV                       | Logical grouping name of monitoring data on the Datadog dashboard | Yes      |
| DD_SERVICE                   | Logical grouping name of monitoring data on the Datadog dashboard | Yes      |
| DD_SERVERLESS_APPSEC_ENABLED | If we want to enable Security Signals on the Lambda function      | Yes      |
| DD_LAMBDA_HANDLER            |   Required for Python and NodeJS Lambda, refer to [official guide](https://docs.datadoghq.com/serverless/guide/handler_wrapper/) for more information                                                                |   Yes/No       |


## References
---
- [Official Lambda Setup Guide](https://docs.datadoghq.com/serverless/aws_lambda/installation/)
- [Official Datadog Lambda Integration Architecture](https://docs.datadoghq.com/serverless/aws_lambda)
- [Official Datadog Warning List](https://docs.datadoghq.com/serverless/guide/serverless_warnings/#generated-warnings)
- [Official Datadog Security Monitoring for Lambda](https://docs.datadoghq.com/serverless/aws_lambda/securing_functions)