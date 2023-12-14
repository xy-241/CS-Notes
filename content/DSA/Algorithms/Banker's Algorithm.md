---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - dsa
Creation Date: 2023-10-14T22:35:00
Last Date: 2023-10-19T16:33:39+08:00
References:
  - "Jenny: https://www.youtube.com/watch?v=bYFVbzLLxfY"
---
## Abstract
---
- Used for [[Deadlock (死锁)]] Avoidance
- Used in banking to make sure banks don't run out of liquidity aka money aka in [[#Safe State]]
- 2 out 3 pieces of info needed - [[#Max]], [[#Allocation]] & [[#Need]], number of [[Process]] and either [[#Total]] or [[#Available]] to calculate the [[#Need]] and check if system in [[#Safe State]] (if safe, we need the find the [[#Safe Sequence]]) 



## Terminologies 
---
### Safe State
- When we don't run out of resources 
### Safe Sequence
- Running through all [[Process]] without running out of [[#Safe State]]
- There can be multiple possible sequences
### Max
- How many instances of each resource each [[Process]] can request
- Represented with 2D [[Array]]
### Allocation 
- How many instances of each resource each [[Process]] currently hold
- Represented with 2D [[Array]]
### Available 
- How many instances of each resource is available in the the system after the [[#Allocation]]
- Represented with 1D [[Array]]
- Add the [[#Allocation]] back when [[Process]] finishes running
### Total
- The sum of [[#Allocation]] + [[#Available]]
### Need
- How many instances of resource each [[Process]] needs
- Obtained from [[#Max]] - [[#Allocation]]
- Represented with 2D [[Array]]