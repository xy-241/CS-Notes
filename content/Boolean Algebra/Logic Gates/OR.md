---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - boolean_algebra
  - computer_organisation
Creation Date: 2023-11-24T18:38:25+08:00
Last Date: 2023-12-24T17:00:42+08:00
References: 
---
## Abstract
---
- Also known as *Logical Sum*, *Union* 
$$
A \cup B = \{x \in U:x\in A \lor x \in B \}
$$
- Made of 2 [[Transistors (晶体管)]]

![[OR.png]]
- Represented by

$$A+B$$

$$
A \cup B
$$

## Use Cases
---
### Turn on Low-level Flags
- Low-level things like [[Interrupts (中断)]] is represented in one bit, different Interrupts (中断) has different bit
- We can use the *OR Gate* on the current status and the flags we want to turn on 