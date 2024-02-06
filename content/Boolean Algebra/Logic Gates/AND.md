---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - boolean_algebra
  - computer_organisation
Creation Date: 2023-09-21T13:26:58+08:00
Last Date: 2024-02-06T13:55:18+08:00
References: 
---
## Abstract
---
$$
AB = A\times B = A \cap B = \{x \in U : x \in A \land x \in B\}
$$
- Also known as **Logical Product**, **intersection**


### Logic Gate Implementation
 ![[AND.png|300]]
- Made of 2 [[Transistors (晶体管)]]

### AND Bitmasking
- Extract a [[Subnet]] of [[Computer Data Representation#Bit]] of the given input
```
     1 1 1 0 1 1 0 1     input
(&)  0 0 1 1 1 1 0 0      mask
------------------------------
     0 0 1 0 1 1 0 0    output
```
- The position of mask that is set to `1` extracts the bits of the given input


## References 
---
- [c - What is bit masking? - Stack Overflow](https://stackoverflow.com/a/53722721)