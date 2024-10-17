---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - go
Creation Date: 2023-08-16T23:11:00
Last Date: 2024-10-17T17:19:26+08:00
References: 
---
## Abstract
---
![[thread_implementation_in_user_space.png|300]]


- [[Thread]] are managed entirely in [[User Space]]. They run on top of a [[#Runtime System]]. A user thread library is used to implement the threads
- Each process needs its own private [[Thread#Thread Table]], unlike the [thread table managed by the kernel for kernel threads](thread_implementation_in_kernel_space.png)

>[!important]
> The [[Kernel]] knows nothing about them. As far as the kernel is concerned, it is managing single-threaded [[Process (进程)]].


>[!success] Good Compatibility
> Thread can be implemented on an kernel that does not support threads.

>[!success] Great Performance
> Thread switching is at least **an order of magnitude faster** than trapping to the kernel. No [[Trap Interrupt (陷入)]] and [[Context Switch]] are needed. The [[CPU Cache]] also don't need to be flushed.

>[!success] Easy to customise
> Each Process can have its own **customized Process Scheduling Algorithms** without the need to modify the kernel codes.

>[!success] Better Scalability
> [[Kernel Thread]] require some table space and [[Address Space#Stack Segment]] in the Kernel, which can be a problem if there is a very large number of threads.

>[!caution] Declined Performance
> Since Kernel sees a Process with multiple user threads as **one single thread**, when the running user thread has a [[Page Fault]], other user threads can't be scheduled to run.

>[!caution] Risk of Thread Hogging
> If an user thread starts running, no other User Thread in that Process will ever run unless the first thread voluntarily gives up the [[CPU]]. Within a single process, there is no [[Interrupts (中断)]], making it impossible to schedule processes in a round-robin fashion.
> 
> Implementing [[Interrupts (中断)]] in [[#Runtime System]] is **resource intensive**.

>[!question] What happens when thread is blocked locally?
> Thread calls the Runtime System to check if the thread must be put into blocked state. If so, Runtime System stores the thread’s registers (i.e., its own) in the thread table and looks in the table for a thread that is ready to run.


## Runtime System
---
- Contains a **Thread Scheduler** in [[User Space]] for [[User Thread]]
### Scheduler Activations
- Instead of relying on the [[Kernel]] for every thread management decision, the [[#Runtime System]]  is responsible for scheduling [[Thread]]
- Mitigates inefficiency from Kernel


## Goroutines
---
- [[User Thread]] managed by the Go runtime. This design decision allows goroutines to be **[lightweight(2kb)](https://github.com/golang/go/blob/f296b7a6f045325a230f77e9bda1470b1270f817/src/runtime/stack.go#L72)** and **efficiently multiplexed** onto a smaller number of [[Kernel Thread]]
- The Go runtime scheduler handles the mapping of goroutines to kernel threads, utilizing techniques like **multiplexing** and **asynchronous I/O** to optimize performance
- Refer to [here](https://granulate.io/blog/deep-dive-into-golang-performance/) for more information

### Spinning up Goroutine
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




