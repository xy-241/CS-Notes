---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - python
  - bash
  - linux
  - docker
Creation Date: 2024-03-11, 12:55
Last Date: 2024-04-06T22:39:03+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A standard to the current date and time at different parts of the world




>[!code]- Read current data and time in python
> ```python
> import datetime
> print(datetime.datetime.now().strftime("%A, %B %d, %Y at %I:%M %p"))
> ```

>[!code]- Read current data and time in POSIX
> ```bash
> date
> ```
> - The current system timezone info is stored inside `/etc/localtime`


## Change Timezone
---
>[!info] Timezone Code
> Refer to this [List of timezone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

**System-level**
- `sudo timedatectl set-timezone <TIMEZONE_CODE>` on [[POSIX]]

**Process-level**
- Install `tzdata`(a time zone database) into the system with a [[Package Manager]] and set the timezone with `export TZ=<TIMEZONE_CODE>`
- [[Docker Container]] is a [[Process (进程)]], so setting timezone in this matter is similar to setting a system-level timezone for the application running inside the container

**Application-level**
- Set it with the corresponding SDK of the language used to code the app

>[!bigbrain] System-level vs Process-level
> ![[change_timezone.png|400]]
> 
> As you can see changing timezone on a process level doesn't affect the system-level timezone. And all processes follow the system-level timezone by default.
