#OS 
>[!note] [[Kernel]] only handles critical part of the system like [[Inter-Process Communication (IPC)]]. The rest runs in [[User Space]]
>![[microkernel.png]]

>[!success] So one crash in the [[Procedures]] doesn't crash the entire system 

>[!caution] Lower performance due to the overhead of communication between different modules

>[!example] 
>- [[MINIX]]