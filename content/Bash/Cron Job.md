---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - bash
  - java
  - OS
  - binance
Creation Date: 2024-03-19, 17:24
Last Date: 2024-12-13T02:23:26+08:00
References: 
draft: 
description: Cron jobs are automated tasks scheduled via crontab on Unix-like systems. Tools like Cronitor enhance monitoring for crontab, while XXL-Job supports distributed scheduling for Java applications.
title: Cron Jobs and Enhanced Monitoring Tools
---
## Abstract
---
- Cron jobs are tasks scheduled to run automatically at specific times or intervals
</br>

- Set cron job with interactive visual
<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://crontab.guru/#*_*_*_*_*" 
 ></iframe>
 </div>




## Crontab
---
- `crontab` is used on Unix-like systems to manage [[Cron Job]]

>[!important]
> Cron jobs are executed under the user profile that sets them.

>[!tool]
> You can set a cron job using `crontab -e` and view cron jobs using `crontab -l`.

>[!help] Cron Job not triggered?
> Make sure always specify the **absolute path of the command**. Cron job has a limited `PATH` environment variable.

### Cronitor
- By default, we aren't alerted when a [[#Crontab]] fails. We can use a 3rd party tools like [Cronitor](https://xy241.cronitorstatus.com/) to get notified via emails when the cron job fails. Cronitor provides **great visibility** into the cron job by installing an agent alongside the cron job, so we are able to obtain **error logs of cron jobs** too!
 - You can also look into [Healthchecks.io](https://healthchecks.io/) or [uptime-kuma](https://github.com/louislam/uptime-kuma)  if you want a self-hosting option

## XXL-Job
---
- [XXL-Job](https://github.com/xuxueli/xxl-job) is a tool for Java applications to run scheduled [[Cron Job]] in distributed systems. It comes with a web UI, built-in failover and retry mechanisms, and produces [[Observability#Log]] and [[Observability#Metric]]

