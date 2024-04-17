---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:57:00
Last Date: 2024-04-17T21:04:20+08:00
---
#computer_organisation 
## Abstract
---
- 5 stages - [[#Fetch]], [[#Decode]], [[#Read]], [[#Execute]] & [[#Write Back]]
- When one stage is running, the other stages will be idle. This can be optimised with [[Instruction-Level Parallelism]]


## Fetch
---
- Retrieve [[Instruction]] from [[RAM]] 
- Handled by [[Control Unit#Program Counter]] & [[Register#Instruction Register]]
## Decode
---
- Handled by [[Control Unit]]
## Execute
---
- Where the execution of [[Instruction]] is performed, can be further beak down to [[#Read]] & [[#Write Back]]
### Read
- Retrieve required data from [[Main Memory]] or [[Register]]
### Write Back
- Result is stored back into [[Main Memory]] or [[Register]] 