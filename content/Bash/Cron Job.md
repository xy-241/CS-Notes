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
Last Date: 2025-08-04T17:22:20+08:00
References: 
draft: 
description: Cron jobs are automated tasks scheduled via crontab on Unix-like systems. Tools like Cronitor enhance monitoring for crontab, while XXL-Job supports distributed scheduling for Java applications.
title: Cron Jobs and Enhanced Monitoring Tools
---
## Abstract
---
- Cron jobs are tasks scheduled to run automatically at specific times or intervals


>[!important] Every N units
> `*/5 * * * *`: Runs the job every **5 minutes**.
> 
> `0 */5 * * *`: Runs the job every **5 hours**.
> 
> `0 0 */5 * *`: Runs the job every **5 days**.

>[!info] Systemd Timers
> [Systemd Timers] are the modern alternative to Cron jobs.

### Set cron job with interactive visual

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

>[!code]
> You can set a cron job using `crontab -e` and view cron jobs using `crontab -l`.

>[!help] Cron Job not triggered?
> Make sure always specify the **absolute path of the command**. Cron job has a limited `PATH` environment variable.

### Cronitor
- By default, we aren't alerted when a [[#Crontab]] fails. We can use a 3rd party tools like [Cronitor](https://xy241.cronitorstatus.com/) to get notified via emails when the cron job fails. Cronitor provides **great visibility** into the cron job by installing an agent alongside the cron job, so we are able to obtain **error logs of cron jobs** too!
 - You can also look into [Healthchecks.io](https://healthchecks.io/) or [uptime-kuma](https://github.com/louislam/uptime-kuma)  if you want a self-hosting option

##  Cron Job and Environment Variables
---
- Cron job runs with minimal environment variables compared to the commands/scripts you run in the [[Terminal|terminal]]

>[!question] Why is it so?
> When we run commands/scripts in terminal, we also load [[Terminal#Shell|shell]] profiles like `.bashrc` and `.profile` with all the custom variables.
> 
> For cron `env`, no shell initialisation files are loaded.


>[!important]
> Cron jobs are executed under the user profile that sets them. The script runs from the user's `$HOME`

### Set Environment Variables in Cron Job

```sh
# Set PATH in crontab 
PATH=/usr/local/bin:/usr/bin:/bin 
0 2 * * * script.sh

# Use absolute paths 
0 2 * * * /usr/local/bin/python3 /home/user/script.py

# Debugging script (env, $HOME)
* * * * * env > /tmp/cronenv.txt && echo "\nHome directory: $HOME" >> /tmp/cronenv.txt && echo "\nThe directory cron job running from: $(pwd)" >> /tmp/cronenv.txt
```

## XXL-Job
---
- [XXL-Job](https://github.com/xuxueli/xxl-job) is a tool for Java applications to run scheduled [[Cron Job]] in distributed systems. It comes with a web UI, built-in failover and retry mechanisms, and produces [[Observability#Log]] and [[Observability#Metric]]

