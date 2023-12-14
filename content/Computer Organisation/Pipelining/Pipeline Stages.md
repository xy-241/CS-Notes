---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:57:00
Last Date: 2023-12-05T17:32:57+08:00
---
#computer_organisation 
## Abstract
---
- 5 stages - [[#Fetch]], [[#Decode]], [[#Read]], [[#Execute]] & [[#Write Back]]
- When one stage is running, the other stages will be idle. This can be countered with [[Instruction-Level Parallelism]]



## Terminologies
---
### Fetch
- Retrieve [[Instruction]] from [[RAM]] 
- Handled by [[Registers#Instruction Address Register]] & [[Registers#Instruction Register]]
### Decode
- Handled by [[Control Unit]]
### Execute
- When [[Operation]] is performed, can be further beak down to [[#Read]] & [[#Write Back]]
### Read
- Retrieve required data from [[Main Memory]] or [[Registers]]
### Write Back
- Result is stored back into [[Main Memory]] or [[Registers]] 
