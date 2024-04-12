---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - bash
Creation Date: 2024-03-19, 17:24
Last Date: 2024-04-12T11:53:42+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Cron jobs are tasks scheduled to run automatically at specific times or intervals on a Unix-like system using the command `crontab`
- You can set cron job using `crontab -e` and view cron jobs using `crontab -l`
- The cron job is executed in the user profile which sets the cron job
- Set cron job with interactive visual
<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://crontab.guru/#*_*_*_*_*" 
 ></iframe>
 </div>

>[!help] Cron Job not triggered?
> Make sure always specify the **absolute path of the command**. Cron job has a limited `PATH` environment variable.
## Cronitor
---
- By default, we aren't alerted when a cron job fails. We can use a 3rd party tools like [Cronitor](https://xy241.cronitorstatus.com/) to get notified via emails when the cron job fails. Cronitor provides **great visibility** into the cron job by installing an agent alongside the cron job, so we are able to obtain **error logs of cron jobs** too!
 - You can also look into [Healthchecks.io](https://healthchecks.io/) or [uptime-kuma](https://github.com/louislam/uptime-kuma)  if you want a self-hosting option.


