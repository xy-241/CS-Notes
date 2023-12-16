---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
  - cs2030s
Creation Date: 2023-07-22T18:39:52+08:00
Last Date: 2023-12-16T20:33:28+08:00
References: 
---
## Abstract
---
>[!quote] Standing on the shoulders of giants


## 2 Parts
---
### Control Abstraction
- We don't care how a certain thing is done
- We just know with some inputs, it will get processing done, and return the results we want

### Data Abstraction
- The states/data that is hidden away from us but is used during the processing

## Abstraction Barrier
---
- Features are grouped in a container aka module
- Providing an interface for other modules to interactive with

>[!success] Changes made within the module doesn't require other modules to get modified

>[!success] Using a set of concepts without knowing the nitty gritty

>[!warning] Reduced Flexibility 
>- If we want to modify the [[Operation#Computation]] protected by the abstraction barrier. We need to get the one who implemented the nitty gritty to help us. This can be helped with [[Code for Change]]


## Programming Abstraction
---
![[layers_of_abstraction_in_programming.png]]
- Layer 1. [[Instruction]]
- Layer 2. [[Assembly language]]
- Layer 3. [[C]]
- Layer 4. Even high-level languages like Python