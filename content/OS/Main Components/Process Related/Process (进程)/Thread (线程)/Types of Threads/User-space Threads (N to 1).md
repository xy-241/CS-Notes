#OS 
>[!note] Put the [[Thread]] entirely in [[User Space]] 
>- The [[Kernel]] knows nothing about them
>- As far as the kernel is concerned, it is managing single-threaded [[Process]]
>- [[Thread]] are implemented by a library
>- The threads run on top of a [[User Thread| Runtime-System]]
>![[thread_implementation_in_user_space.png]]

>[!note] Each process needs its own private [[Thread Table]]

>[!note] When thread becoming blocked locally
>- Thread calls [[User Thread| run-time system]] procedure
>	1. checks to see if the thread must be put into blocked state. 
>	2. If so, it stores the thread’s registers (i.e., its own) in the thread table, looks in the table for a ready thread to run


## Pro
>[!success] 
>[[Thread]] can be implemented on an operating system that does
not support threads.

>[!success]  Thread switching is at least an order of magnitude faster than trapping to the kernel 
> - No [[Trap Interrupt (陷入)]] is needed
> - No [[Context Switch]] needed
> - the [[Cache]] need not be flushed

>[!success] Allow each process to have its own customized [[Scheduling Algorithm]]

>[!success] Scale better
> [[Kernel Threads (1 to 1)]] require some table space and stack space in the kernel, which can be a problem if there are a very large number of threads.

## Cons
>[!caution] Calling blocking [[System Call (系统调用)]]
> - Letting the thread actually make the system call is unacceptable, since
this will stop all the threads
>- The system calls could all be changed to be nonblocking (e.g., a read on the
keyboard would just return 0 bytes if no characters were already buffered, but requiring changes to the [[OS]] is unattractive

>[!caution] [[Page Faults]]
>The [[Kernel]], unaware of even the existence of threads, naturally blocks
the entire process until the disk I/O is complete, even though other threads might
be runnable

>[!caution]  If a thread starts running, no other thread in that process will ever run unless the first thread voluntarily gives up the CPU
>Within a single process, there are no [[Interrupts (中断)]], making it impossible to schedule processes round-robin fashion (taking turns). The [[Interrupts (中断)]] from [[User Thread| Runtime system]] is resource intensive

>[!caution] Programmers generally want threads in applications where the threads block often
