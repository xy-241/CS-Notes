---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-16T10:12:00
Last Date: 2024-03-22T18:17:52+08:00
References: 
---
## Abstract
---
- Stands for **Mutual Exclusion**
- A [[Synchronization (同步)]] mechanism that controls **access** to **shared resources**, such as variables, data structures, or critical sections of code, in a systems that use [[Concurrency (并发)]]
- [[Atomic Instruction]]

>[!success] Avoid corrupted data
> Prevent multiple [[Thread]] or [[Process (进程)]] from accessing the same resource simultaneously, which could lead to [[Race Condition (竞态条件)]].


## Go Mutex
---
- The program below simulates incrementing a counter. Each 1000 increments takes `100ms`. We perform 10 iterations to get the counter from `0` to `10000`. Uncomment the code blocks in the editor below to add in [[Mutex (互斥体)]] to prevent [[Race Condition (竞态条件)]].

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/427wzs4fs?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

>[!caution] Corrupted data!
> Since the [[User Thread#Goroutines]] are running in a [[Concurrency (并发)]] manner, both goroutines may read in the same `counter` value, one goroutine will overwrite the changes made by another goroutine - [[Race Condition (竞态条件)]]. Uncomment the code blocks in the editor above to add in the [[Mutex (互斥体)]]!

>[!question] Program runs perfectly without Mutex
> Sometimes, without [[Mutex (互斥体)]], the program runs without any issues, this is because the Goroutines **complete too fast**, run a few times to see corrupted data caused by [[Race Condition (竞态条件)]]. 