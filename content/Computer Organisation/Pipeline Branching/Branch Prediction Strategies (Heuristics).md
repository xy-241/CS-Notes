---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-07-19T14:14:00
Last Date: 2024-04-17T21:01:54+08:00
References: 
---
## Abstract
---
- Ways to perform [[Branch Prediction]]


### Static 
- [[Rule-based Approaches]] that may only consider one [[Instruction]] at a time
### Random
- Pick randomly between whether a [[Pipeline Branching]] is taken or not
- Aim for the perfect middle ground of 50%
### Dynamic 
- Typically has some learning or storage capability to detect patterns
- More complicated than [[#Static]] and [[#Random]]. Using [[Address Space#Heap Segment]] to store the state and loading up multiple [[Instruction]] to analysis them

%% ### Neural %%