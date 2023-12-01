---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-16T09:30:00
Last Date: 
References:
---
## Abstract
- Coordination of execution of multiple [[Process]] in a [[Multi-process]] system to ensure that they access shared resources in a controlled and predictable manner
- We can use tools like [[Semaphore (信号量)]]



## Terminologies
### Busy Waiting (忙等待)
- Also known as *Spinning*
- [[CPU]] is involved to keep check for the state 
- A [[Process]]/[[Thread]] repeatedly checks a condition without sleeping or giving up the processor until the condition is satisfied
- This is in contrast to *waiting for a condition* using a mechanism such as a [[Semaphore (信号量)]] or a [[Mutex (互斥体)]], which releases the processor and allows other threads to run while waiting for the condition to be met
#### Benefits
- Simple and efficient synchronization mechanism
- Shines when *condition is expected to be met very quickly*. Like [[Process]] waiting for input from the keyboard
#### Cons
- Can waste [[CPU]] resources if the condition *is not met quickly*, especially on [[Multi-core chips]], generally considered to be a bad practice for most applications