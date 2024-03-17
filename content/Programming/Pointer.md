---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - rust
  - c
  - java
Creation Date: 2024-01-04, 14:55
Last Date: 2024-03-17T18:36:02+08:00
References: 
draft: 
---
## Abstract
---
- A variable whose value is [[Memory Address]]

### Pointee
- The **actual data** that a pointer points-to inside the [[Address Space#Heap Segment]]

### Pointer Dereference
- The process of accessing [[#Pointee]] of a [[Pointer]]


## Null Pointer
---
- [[Pointer]] that doesn't point to any memory location, basically contains a invalid [[Memory Address]]
- In [[C]], it is represented by `0` or `nullptr`
- In [[Java]], it is represented by `null`, [[Datatype#Custom Datatype]] can be `null`

## Void Pointer
---
- A [[Pointer]] without [[Datatype]] aka a pre-defined size
- Used when we aren't sure what the exact size of a variable like the return type of [[malloc]]
- We should always try to cast it to a specific type whenever it is possible

## Rust
---
### Rust Box
- A smart [[Pointer]] that represents [[Rust Ownership]] of values allocated on the [[Address Space#Heap Segment]]
### Rust References 
- **Non-owning pointers** that points to [[#Rust Box]], thus they do not own the data they point to.
- Powers [[Rust Borrowing]]