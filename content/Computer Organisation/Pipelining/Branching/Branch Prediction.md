---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-27T14:44:00
Last Date: 2023-12-05T17:22:10+08:00
References: 
---
## Abstract
---
- Perform [[Instruction-Level Parallelism]] based on the prediction of if [[Branching]] is going out of the loop or going back to the start of the loop
- There are many different [[Branch Prediction Strategies (Heuristics)]]
- [[CPU]] use multiple of the [[Branch Prediction Strategies (Heuristics)]]


## Example
---
### Predict the branch is going back to the start of the loop
- Because we can only be wrong one time when the loop is going out of the loop
- If we predict the loop is going out of the loop, then we will be wrong as many time as the number of loop iterations