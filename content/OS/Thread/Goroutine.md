---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - go
Creation Date: 2025-03-16, 17:54
Last Date: 2025-03-16T17:55:49+08:00
References: 
draft: 
description: 
---
## Abstract
---
- [[User Thread]] managed by the Go runtime. This design decision allows goroutines to be **[lightweight(2kb)](https://github.com/golang/go/blob/f296b7a6f045325a230f77e9bda1470b1270f817/src/runtime/stack.go#L72)** vs. megabytes for OS threads and **efficiently multiplexed** onto a smaller number of [[Kernel Thread]]
- The Go runtime scheduler handles the mapping of goroutines to kernel threads, utilizing techniques like **multiplexing** and **asynchronous I/O** to optimize performance
- Refer to [here](https://granulate.io/blog/deep-dive-into-golang-performance/) for more information

>[!important] Go implements cooperative scheduling with preemption capabilities
> Goroutines yield control at strategic points:
> - Channel operations
> - Network/blocking [[System Call (系统调用)|system calls]]
> - Explicit yielding via `runtime.Gosched()`, read more [here](https://www.cnblogs.com/baiyuxiong/p/4472542.html)
> 
> Preemption occurs during garbage collection or after time thresholds.

>[!important] Advantages Over Other Languages
> - First-class language feature (not a library), integrated with Go's runtime systems
> - Clean syntax with built-in primitives


## Spinning up Goroutine
---
- `go <function_call>` - creates a [[User Thread]] managed by Go runtime
- The program below simulates retrieving data from a [[Database]]. Each retrieval takes `500ms`. But the total execution time is around `10µs`. Continue reading to find out why :). You can remove the `go` keyword to see the performance boost goroutine brings

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/427t7cdqw?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>


>[!attention]+ Program exits before other goroutines finish!
> We need to introduce [[Synchronisation (同步)]] mechanism here to ensure the program only exists when all other goroutines finish running. Uncomment the code blocks in the editor above to add in the synchronization mechanism.
> 
> `sync.WaitGroup` - a Synchronization mechanism used to coordinate the **completion of multiple goroutines**. It acts like a counter that multiple goroutines can interact with.
> 
> `Add(int)` - increments the counter by a specified value, indicating the number of goroutines you will be waiting for
> 
> `Done()` - decrements the counter. Used by each goroutine when it finishes
> 
> `Wait()` - **blocks** the current goroutine until the counter reaches **zero**, signaling that all tracked goroutines have completed

>[!attention]+ Regarding the performance gainz
> The above example shows a significant performance gainz - 5 iterations that take `500ms` each finish in `500ms`! If you increase the number of iterations, it should still complete in about `500ms`. Give it a try! This thanks to [[Concurrency (并发)]] and the lightweight nature of User Thread.
> 
> However, this performance gainz are only for **not CPU-bounded tasks** like [[Async IO]]. The performance gainz declines gradually as the tasks require more CPU power to complete. For non CPU-bounded tasks, they can run in concurrently without needing attention from the CPU. In the code editor below, change the value of `i` in the `main()` from `100` to `1000`, you should observe the time taken 10X!
> <div class="onecompilerCode-wrapper"><iframe class="onecompilerCode" frameBorder="0"  src="https://onecompiler.com/embed/java/4287wrd8f?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" ></iframe></div>