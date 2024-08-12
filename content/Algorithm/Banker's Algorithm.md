---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - dsa
Creation Date: 2023-10-14T22:35:00
Last Date: 2024-08-10T16:37:45+08:00
References:
  - "Jenny: https://www.youtube.com/watch?v=bYFVbzLLxfY"
---
## Abstract
---
- An algorithm for [[Deadlock (死锁)#Deadlock Avoidance|deadlock avoidance]] that simulates the allocation of resources to processes and helps in deciding whether it is safe to grant a resource request based on the future availability of resources, thus avoiding unsafe states
- Used in banking to make sure banks don't run out of liquidity aka money aka in [[#Safe State]]
- 2 out 3 pieces of info needed - [[#Max]], [[#Allocation]] & [[#Need]], number of [[Process (进程)]] and either [[#Total]] or [[#Available]] to calculate the [[#Need]] and check if system in [[#Safe State]] (if safe, we need the find the [[#Safe Sequence]]) 



### Safe State
- When we don't run out of resources 
### Safe Sequence
- Running through all [[Process (进程)]] without running out of [[#Safe State]]
- There can be multiple possible sequences
### Max
- How many instances of each resource each [[Process (进程)]] can request
- Represented with 2D [[Array]]
### Allocation 
- How many instances of each resource each [[Process (进程)]] currently hold
- Represented with 2D [[Array]]
### Available 
- How many instances of each resource is available in the the system after the [[#Allocation]]
- Represented with 1D [[Array]]
- Add the [[#Allocation]] back when [[Process (进程)]] finishes running
### Total
- The sum of [[#Allocation]] + [[#Available]]
### Need
- How many instances of resource each [[Process (进程)]] needs
- Obtained from [[#Max]] - [[#Allocation]]
- Represented with 2D [[Array]]


## References 
---
- [ByteByteGo on LinkedIn: #systemdesign #coding #interviewtips](https://www.linkedin.com/posts/bytebytego_systemdesign-coding-interviewtips-activity-7227900069616726016-dGp9/)