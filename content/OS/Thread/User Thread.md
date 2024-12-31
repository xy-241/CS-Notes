---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - go
Creation Date: 2023-08-16T23:11:00
Last Date: 2024-12-31T12:46:19+08:00
References: 
description: User-space threads offer enhanced performance and portability by managing threads in user space with no kernel intervention. They are customizable, scalable, and faster than kernel-based threads. However, they face challenges like thread hogging, requiring efficient thread management via runtime systems and schedulers for optimal execution.
---
## Abstract
---
![[thread_implementation_in_user_space.png|300]]


- [[Thread]] are managed entirely in [[User Space]], running on top of a [[#Runtime System]]. A user thread library is used to implement the threads
- Each process maintains its own private [[Thread#Thread Table|thread table]], in contrast to the [thread table managed by the kernel for kernel threads](thread_implementation_in_kernel_space.png)

>[!important]
> With a pure user-space threading model (many-to-one), the [[Kernel|kernel]] perceives a [[Process (进程)|process]] with multiple [[User Thread|user threads]] as a **single [[Kernel Thread|kernel thread]]**. 
> 
> When a [[Page Fault|page fault]] occurs, it is not possible to schedule another thread within the same process to run. This limitation can be addressed by adopting a **kernel-supported threading model,** such as a [[Kernel Thread|one-to-one kernel thread mapping]] or a [[Hybrid Thread|many-to-many hybrid threading model]]

>[!important] Key advantages
> **Portability**: Threads can be implemented on a kernel that does not natively support threads.
> 
> **Performance**: Thread switching is significantly faster than [[Kernel Thread|kernel-based switching]], with no need for [[Trap Interrupt (陷入)]] or [[Context Switch]], and the [[CPU Cache]] does not need to be flushed.
> 
> **Customisation**: Each process can implement its own **customised process scheduling algorithms** without altering the kernel code.
> 
> **Scalability**: Unlike [[Kernel Thread]], which require additional table space and [[Address Space#Stack Segment]] in the kernel, user threads avoid these limitations, supporting better scalability for large numbers of threads.

>[!caution] Risk of thread hogging
> If a user thread starts running, no other user thread in the same process will execute unless the first thread voluntarily relinquishes the [[CPU]]. Within a single process, there are no [[Interrupts (中断)]], making it impossible to schedule threads in a round-robin manner.
> 
> Implementing [[Interrupts (中断)]] in the [[#Runtime System]] is **resource-intensive**.


## Runtime System
---
- Contains a **Thread Scheduler** in [[User Space]] for managing [[User Thread]]

>[!important] Thread blocking
> The thread calls the runtime system to check if it needs to be put into a blocked state. If so, the runtime system stores the thread’s registers (i.e., its state) in the thread table and searches the table for a thread that is ready to run.

### Scheduler Activations
- Instead of relying on the [[Kernel]] for every thread management decision, the [[#Runtime System]] is responsible for scheduling [[Thread]]
- This approach mitigates inefficiencies caused by kernel involvement in thread management


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




