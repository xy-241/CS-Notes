---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-07T16:57:00
Last Date: 2024-05-05T18:03:46+08:00
---
#computer_organisation 
## Abstract
---

![[pipeline_stages.gif|600]]

- 3 main stages, [[#Fetch]], [[#Decode]] & [[#Execute]] ([[#Read]] & [[#Write Back]])
- Thew 2 main [[Register]] involved are the [[Register#Instruction Register]] and the **address register** ([[Register#Program Counter]])

>[!caution] Wasted computation
> When one stage is running, the other stages will be idle. You can see from the animation above, when the [[Instruction]] is decoded, the instruction register is actually ready to take in the next instruction. 
> 
> This can be optimised with [[Instruction-Level Parallelism]].


## Fetch
---
- Retrieve [[Instruction]] from [[RAM]] 
- Handled by [[Control Unit#Program Counter]] & [[Register#Instruction Register]]
## Decode
---
- [[Control Unit]] configure **different parts** of the [[CPU]] like [[ALU]] with the given [[Instruction]] based on the [[Instruction#Opcode]] with referencing to its [[Instruction Set Architecture (ISA)]]
## Execute
---
- Where the execution of [[Instruction]] is performed, can be further beak down to [[#Read]] & [[#Write Back]]
### Read
- Retrieve required data from [[Main Memory]] or [[Register]]
### Write Back
- Result is stored back into [[Main Memory]] or [[Register]] 