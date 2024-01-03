---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-09-21T10:08:04+08:00
Last Date: 2023-12-25T12:24:16+08:00
References: 
---
## Abstract
---
- A [[Combination Circuit]] that performs addition


## Half Adder
---
- Built with 1 [[XOR]] for the current bit & 1 [[AND]] for the carry bit
- Takes in 2 [[Computer Data Representation#Bit]]


## Full Adder
---
- Takes in 3 [[Computer Data Representation#Bit]]
- Built with 2 [[#Half Adder]]
- The sum of the 1st Half Adder is added with the `cin` by the 2nd Half Adder
- The sum output of the 2nd Half Adder is the final sum & the `cout` is the final `cout`
- For the `cout`, we need to have an [[OR]] to pipe out the final `cout` to handle situation where the first Half Adder's `cout` is 1 while the `cin` is 0 & sum of the first Half Adder is 0