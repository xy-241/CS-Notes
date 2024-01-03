---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-12-11, 22:54
Last Date: 2023-12-12T22:16:56+08:00
References: 
---
## Abstract
---
- Required in an [[OS]] that has multiple [[Process]] that want to run at the same, like in the [[Multi-programming]] or [[Multi-tasking]] systems. Because [[Process]] unlike [[User Thread#^b73e18|Thread]] will give up its [[CPU]] for other [[Process]]


## Components
---
### Process Priority
- A value that determines which [[Process]] should get executed first
### Process Scheduler
- A program that perform [[Context Switch]] of [[Process]] based on the [[#Process Priority]]
- [[Linux]] uses [CFS](https://docs.kernel.org/scheduler/sched-design-CFS.html)


## Terminologies
---
### Niceness
- An parameter that can be used to adjust the [[#Process Priority]] for the [[#Process Scheduler]]

>[!example] In [[Linux]]
>- ``-20`` is most not nice
>- ``19`` is most nice
>- Command to adjust niceness - `renice`