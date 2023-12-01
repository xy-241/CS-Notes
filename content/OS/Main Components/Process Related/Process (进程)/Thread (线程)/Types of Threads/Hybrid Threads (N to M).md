#OS 
>[!abstract] Put the [[Thread]] in both [[User Space]] &  [[Kernel Space]]
>- Programmer can determine how many [[Kernel Threads (1 to 1)| kernel threads]]  to use and how many [[User-space Threads (N to 1)| user-space threads]] multiplex on each one
>- [[Kernel]] is aware of only the [[Kernel Threads (1 to 1)| kernel threads]] and schedules those
>-  each [[Kernel Threads (1 to 1)| kernel thread]] has some set of [[User-space Threads (N to 1)| user-space threads]] that take turns using it
>![[hybrid_thread_implementation.png]]


## Pros
>[!success] This model gives the ultimate in flexibility.