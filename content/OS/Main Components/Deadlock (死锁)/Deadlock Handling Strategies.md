---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-18T19:20:00
Last Date: 2023-10-19T16:33:39+08:00
References:
---
## Abstract
---



## Terminologies
---
### Prevention
- Ensure that at least one of the [[Coffman Conditions]] does not hold. For example, by implementing a [[resource allocation policy]] that ensures no [[Coffman Conditions#Circular Wait]]
### Avoidance 
- The system has some additional a *priori information* available.
- The most famous algorithm used for deadlock avoidance is the [[Banker's Algorithm]]

### Detection
- The system periodically checks for [[Deadlock (死锁)]]. If detected, actions are taken to recover from it

### Ignorance
- Simply ignore the problem and assume [[Deadlock (死锁)]] will never occur. 
- This is suitable for some environments where deadlocks are rare and the overhead of other handling strategies is not justified.