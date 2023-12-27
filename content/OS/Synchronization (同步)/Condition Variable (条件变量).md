---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-09T09:54:00
Last Date: 2023-11-10T21:59:04+08:00
References:
---
## Abstract
---
- Coordinate & *synchronise* [[Thread]]
- It allows a thread to wait for a *particular condition* to be met before it can continue execution
- Typically used in conjunction with [[Mutex (互斥体)]] to protect *shared data*

## Benefis
---
### Handles [[Producer Consumer Problem]]
- The *condition variables* are used to ensure that the [[Producer Consumer Problem#Producer|Producer]] does not produce more data than the [[Producer Consumer Problem#Consumer|Consumer]] can consume, and that the consumer does not try to consume data from an empty [[Producer Consumer Problem#Buffer|Buffer]]

## C Example
---
### Wait for a particular condition
- `condFuel` is the *condition variable*
- `mutexFuel` is the [[Mutex (互斥体)]] to protect *shared data*
- `pthread_cond_wait(&condFuel, &mutexFuel);` equivalent to: 
```c
// 1. pthread_mutex_unlock(&mutexFuel); 
// 2. wait for signal on condFuel 
// 3. pthread_mutex_lock(&mutexFuel);`
```
### Particular Condition fulfilled & execution is passed back
- `pthread_cond_signal(&condFuel);`
- The waiting thread *mutex lock* & continue with the execution