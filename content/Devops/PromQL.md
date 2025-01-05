---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - devops
  - binance
Creation Date: 2024-11-15, 12:27
Last Date: 2024-11-18T13:47:56+08:00
References: 
draft: 
description: A query language for Prometheus time series databases. Its syntax, similar to SQL, is designed for retrieving and analysing time-based data.
---
## Abstract
---
- **Query language** used to retrieve data from [[Prometheus#Prometheus Data Storage|Prometheus's time series database]]. Visualisation tools like **Grafana use PromQL** to create informative dashboards

>[!important]
> ![[SQL_promQL_mapping.png|600]]
> 
> We can **select**, **filter**, and use **regular expressions** with PromQL.

>[!important] Using PromQL to monitor the 4 golden signals
> ![[prometheus_monitoring_4_signals.png|600]]
> 
> [[Monitoring#4 Golden Monitoring Signals]]


## PromQL Data Types
---
- Special operations you can apply to your Prometheus data to transform and analyse it. They're like built-in tools that help you make sense of your [[Prometheus#Prometheus Metric|metric]]
- **Scalar:** A single numerical value. For example, `10` is a scalar. While some [[PromQL#PromQL Functions|PromQL functions]] can return a scalar, it's important to note that not all of them do
- **Instant Vector:** Data point at a single moment in time. Like a snapshot of metrics right now
- **Range Vector:** Data point over a time period. Like a metric's history over the last 5 minutes

>[!important] Instant Vector VS Range Vector
> Instant vectors show the **current state**, while range vectors **show how things change over time**.

## PromQL Functions
---
- **Aggregation:** `sum()`, `avg()`, `max()`, `min()`, `count()`, `quantile()`
- **Mathematical:** `abs()`, `ceil()`, `floor()`, `round()`, `exp()`, `log()`
- **Time series:** `rate()`, `irate()`, `increase()`, `changes()`, `delta()`, `deriv()`
- **Filtering:** `absent()`, `present()`
- **Predictive:** `predict_linear()`, `holt_winters()`
- Refer to [official docs](https://prometheus.io/docs/prometheus/latest/querying/functions/#functions) for more details

>[!important] `rate()` vs `irate()` vs `increase()`
> ![[prometheus_time_series_functions.png|600]]
> 
> The `rate()` function calculates the **average per-second increase** over the specified time range in the range vector.
> 
> The `irate()` function calculates the **instantaneous per-second rate of increase** based on the **last two data points** in the range vector.
> 
> The `increase()` function calculates the **net increase** in the value of the time series in a range vector.

>[!question] What is `sum(rate())`?
> You have two web servers (`server1` and `server2`). Each counts HTTP requests (`http_requests_total`).
> - **server1:** 100 to 200 requests in 5 seconds
> - **server2:** 50 to 150 requests in 5 seconds.
>   
> `sum(rate(http_requests_total[5m]))` calculates:
> 1. **Individual rates:** Each server has a rate of 20 requests/second (100 increase / 5 seconds).
> 2. **Total rate:** 20 + 20 = 40 requests/second across both servers.
> 
> Therefore, `sum(rate(...))` returns **40**, the combined rate of all servers.

>[!important] Label Matching
> We use `sum by (service) (rate(http_requests_total[5m]))` to calculate combined rate for a particular service.
> 
> Maybe we have a frontend and a backend service, each powered by two servers. Each service handles some HTTP requests, and we want to **check the status of each specific service**.


## References
---
- [PromQL (Prometheus Query Language) - YouTube](https://www.youtube.com/watch?v=FLT0d8fyhK4&list=PLrMP04WSdCjrL4OBnaqXRy8X3XEd7ZrKf&index=8)
- [Querying basics | Prometheus](https://prometheus.io/docs/prometheus/latest/querying/basics/#expression-language-data-types)