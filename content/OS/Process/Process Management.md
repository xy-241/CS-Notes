---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-12-11, 22:54
Last Date: 2024-04-08T16:19:00+08:00
References: 
---
## Abstract
---
- Process management is a way for [[Kernel]] to manage multiple [[Process (进程)]] that want to run at the same time ([[Concurrency (并发)]]) **actively**, like in the [[Multi-programming]] or [[Multi-tasking]] systems
- Kernel needs to manage processes actively because process can hog the [[CPU]] forever

## Process Scheduler
---
- A program that perform [[Context Switch]] of [[Process (进程)]] based on the [[#Process Priority]]
- [[Linux Kernel]] uses [CFS](https://docs.kernel.org/scheduler/sched-design-CFS.html)


### Process Priority
- A value that determines which [[Process (进程)]] should get executed first

### Niceness
- An parameter that can be used to adjust the [[#Process Priority]] for the [[#Process Scheduler]]

>[!example] 
> In [[Linux Kernel]]
> - ``-20`` is most not nice
> - ``19`` is most nice
> - Command to adjust niceness - `renice`

