---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-07T16:38:28+08:00
Last Date: 2024-01-03T15:38:46+08:00
References: 
---
## Abstract
---
- The [[Process (进程)]] is blocked while the necessary instruction is being located and read in from [[Main Memory]] to [[CPU]]
- Usually happens when not all Process has its whole program codes in the Main Memory


## 3 Possible Causes
---
### Lazy Allocation
- Not allocating [[Main Memory]] until it is actually needed
- By delaying the actual allocation, we speed up startup time & eliminate allocation entirely if it isn't used 
- But this means slower execution speed because Main Memory is only allocated when needed & we are risky to run-time allocation errors aka more likely to crash when running the app halfway 

### Swap
- The required data or instruction are in the [[Swap Space]]

### No Access Rights
- Accessing [[Main Memory]] that isn't assigned to the requesting [[Process (进程)]]. Resulting in [[Segmentation Fault]]