---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-07-22T18:39:52+08:00
Last Date: 2024-02-14T15:25:17+08:00
References:
---
## Abstract
---
- Decouple the nitty-gritty lower level details from the higher level implementation

### Abstraction Barrier
- Features are grouped in a container aka module
- Providing an interface for other modules to interactive with

>[!success] Limited Impact of Changes
> Changes made within the module doesn't require other modules to get modified

>[!success] Leverage On Others 
> Using a set of concepts without the need to know the nitty gritty

>[!warning] Reduced Flexibility 
> If we want to modify the [[Operation#Computation]] protected by the abstraction barrier. We need to get the one who implemented the nitty gritty to help us. This can be helped with [[Code for Change]]

## 2 Aspects of Abstraction
---
### Control Abstraction
- We don't care how a certain thing is done
- We just know with some inputs, it will get processing done, and return the results we want

### Data Abstraction
- The states/data that is hidden away from us but is used during the processing


## Programming Abstraction
---
![[layers_of_abstraction_in_programming.png|300]]
- Layer 1. [[Instruction]]
- Layer 2. [[Assembly language]]
- Layer 3. [[C]]
- Layer 4. Even high-level languages like Python