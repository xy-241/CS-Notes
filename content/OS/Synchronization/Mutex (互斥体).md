---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - go
Creation Date: 2023-10-16T10:12:00
Last Date: 2024-03-29T14:59:01+08:00
References: 
---
## Abstract
---
- Stands for **Mutual Exclusion**
- A [[Synchronisation (同步)]] mechanism that controls **access** to **shared resources**, such as variables, data structures, or critical sections of code, in a systems that use [[Concurrency (并发)]]
- Powered by [[Atomic Instruction]]

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
> Sometimes, without Mutex (互斥体), the program runs without any issues, this is because the Goroutines **complete too fast**, run a few times to see corrupted data caused by [[Race Condition (竞态条件)]]. 


>[!attention] Placement of `m.Lock()` & `m.Unlock()` matter!
> Try place `m.Lock()` at the first line of the `increment()` function and `mUnlock()` at the last line of the `increment()`. Then re-run the program and observe the time take.
> 
> The time taken jump from `100ms` to `1s`! This is because Mutex forces the Goroutines to **take turns to execute** the code block between `mLock()` and `m.Unlock()`. This means instead of running 10 `time.Sleep(100 * time.Millisecond)` concurrently, which can complete in `100ms`, we now need to run it one by one which accumulates to `1s`. In this case, it is totally safe to run in a concurrent manner, the concurrency is destroyed due to improper place of `m.Lock()` & `m.Unlock()`!