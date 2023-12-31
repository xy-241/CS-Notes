---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-05T17:45:00
Last Date: 2023-12-16T21:07:50+08:00
References: 
---
## Abstract
---
- A group of *fixed-number* worker [[Thread]] that are reused to execute tasks submitted to [[#Task Queue]] by a client. The number of *Thread* is usually the *number of cores* the system has. Less will lead to wasted CPU power, more will introduce [[Context Switch]] which has overhead, unless the task isn't *cpu-bounded*
- Commonly used in scenarios where tasks are small, numerous, and independent(**stateless**). Examples include web servers handling HTTP requests and applications that perform many asynchronous I/O operations

## Benefits
---
### Improved Resource Management
- By limiting the number of [[Thread]] that can be active at any one time
- A thread pool can help to ensure that the system does not become overwhelmed with too many concurrent threads, which can reduce performance due to [[Context Switch]] or lead to *resource thrashing*
### Reduced Overhead
- Creating a new thread is an expensive operation, so reusing threads can improve performance

## 2 coding aspects
---
### 1) Thread Safety
- Make sure the [[#Task Queue]] is manipulated by one [[Thread]] at a time
- Otherwise, we may we may have more than 1 thread processing the same task where [[Race Condition (竞态条件)]] happens
- Thus, we need to have [[Mutex (互斥体)]] on the [[#Task Queue]]

### 2) Computing Resources used by Waiting Threads
- Make sure [[Thread]] that is idle not keep checking for tasks which will result in wasted computation




## Terminologies 
---
### Task Queue
- Tasks that need to be executed are placed in a queue
- When a [[Thread]] becomes available, it pulls a task from the queue and executes it
- After completing the task, the thread returns to the pool to await the next assignment