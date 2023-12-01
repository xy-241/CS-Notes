#OS 
>[!note] Put the [[Thread]] entirely in [[Kernel Space]]
>- [[Thread Table]] inside [[Kernel]]
>- When a thread blocks, the [[Kernel]], at its option, can run either another thread from the same [[Process]] (if one is ready) or a thread from a different process
>![[thread_implementation_in_kernel_space.png]]




## Pro
>[!success] Do not require any new, nonblocking [[System Call (系统调用)]]
>If one thread in a process causes a [[Page Faults]], the kernel can easily check to see if the process has any other runnable threads, and if so, run one of them while waiting for the required page to be brought in from the disk


## Cons
>[!caution] All calls that might block a [[Thread]] are implemented as [[System Call (系统调用)]], at considerably greater cost than a call to a [[Pthreads (POSIX threads) | runtime system]] procedure
>

>[!caution] Relatively greater cost of creating and destroying threads in the kernel
>>[!tip] Recycle threads
>>- When a thread is destroyed, it is marked as not runnable, but its kernel data structures are not otherwise affected
>>- When a new thread must be created, an old thread is reactivated, saving some overhead
>>- Thread recycling is also possible for [[User-space Threads (N to 1)| user-level threads]], but since the thread-management overhead is much smaller, there is less incentive to do this.

