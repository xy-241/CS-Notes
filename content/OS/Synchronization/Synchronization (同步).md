---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-16T09:30:00
Last Date: 2024-01-20T18:14:50+08:00
References: 
---
## Abstract
---
- Coordination of execution of multiple [[Process (进程)]] or [[Thread]] in a system to ensure that they access shared resources in a controlled and predictable manner 
- We can use tools like 
	- [[Barrier (屏障)]]
	- [[Condition Variable (条件变量)]]
	- [[Mutex (互斥体)]]
	- [[Semaphore (信号量)]]
	- [[Spinlock (自旋锁)]]



## Terminologies
---
### Busy Waiting (忙等待)
- Also known as *Spinning*
- [[CPU]] is involved to keep check for the state 
- A [[Process (进程)]]/[[Thread]] repeatedly checks a condition without sleeping or giving up the processor until the condition is satisfied
- This is in contrast to *waiting for a condition* using a mechanism such as a [[Semaphore (信号量)]] or a [[Mutex (互斥体)]], which releases the processor and allows other threads to run while waiting for the condition to be met
#### Benefits
- Simple and efficient synchronization mechanism
- Shines when *condition is expected to be met very quickly*. Like [[Process (进程)]] waiting for input from the keyboard
#### Cons
- Can waste [[CPU]] resources if the condition *is not met quickly*, especially on [[Multi-core Chip]], generally considered to be a bad practice for most applications