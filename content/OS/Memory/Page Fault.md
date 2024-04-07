---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-04-07T16:37:51+08:00
References: 
---
## Abstract
---
- Happens when a [[Virtual Memory#Virtual Address]] is not mapped to a [[Main Memory#Memory Frames]] in the [[Page Table]], basically the actual data under the [[Memory Page]] isn't stored in the [[Main Memory]]. [[CPU]] can only start working on the task after obtaining the **actual data** from the main memory

## Minor Page Fault
---
- The [[Memory Page]] is already created in [[Virtual Memory]] but needs to be brought from the [[Secondary Storage]] into [[Main Memory]], usually caused by [[Swap Space]]. This is relatively fast to resolve

## Major Page Fault
---
- The [[Memory Page]] is not in [[Virtual Memory]] at all. The [[Kernel]] must find a free space in [[Main Memory]], allocate the [[Main Memory#Memory Frames]] and update [[Page Table]], usually caused by [[#Lazy Allocation]]. This is slower




## Lazy Allocation
---
- Not allocating [[Main Memory#Memory Frames]] until it is actually needed
- By delaying the actual allocation, we speed up startup time & eliminate allocation entirely if it isn't used 
- But this means slower execution speed because memory frame is only allocated when needed & we are also risked to run-time allocation errors aka more likely to crash when running the app halfway 


