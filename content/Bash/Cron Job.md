---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - bash
Creation Date: 2024-03-19, 17:24
Last Date: 2024-03-19T20:06:12+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Cron jobs are tasks scheduled to run automatically at specific times or intervals on a Unix-like system using the command `crontab`
- You can set cron job using `crontab -e` and view cron jobs using `crontab -l`
- The cron job is executed in the user profile which sets the cron job

>[!help] Cron Job not triggered?
> Make sure always specify the **absolute path of the command**. Cron job has a limited `PATH` environment variable.

>[!tip] Monitor the health of your cron job
> By default, we aren't alerted when a cron job fails. We can use a 3rd party like [Healthchecks.io](https://healthchecks.io/) to get notified via emails when the cron job fails.

### Set cron job with interactive visual
<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://crontab.guru/#*_*_*_*_*" 
 ></iframe>
 </div>