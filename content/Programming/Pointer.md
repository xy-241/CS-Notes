---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - rust
Creation Date: 2024-01-04, 14:55
Last Date: 2024-01-16T16:21:04+08:00
References: 
draft: 
---
## Abstract
---
- A variable whose value is [[Memory Address]]

### Pointee
- The value that a pointer points-to 



## Null Pointer
---
- [[Pointer]] that doesn't point to any memory location, basically contains a invalid [[Memory Address]]
- In [[C]], it is represented by `0` or `nullptr`
- In [[Java]], it is represented by `null`

## Void Pointer
---
- A [[Pointer]] without type aka a pre-defined size
- Used when we aren't sure what the exact size of a variable like the return type of [[malloc]]
- We should always try to cast it to a *type* whenever it is possible

## Rust Box
---
- A smart [[Pointer]] that represents [[Rust Ownership]] of values allocated on the [[Address Space#Data Segment]]