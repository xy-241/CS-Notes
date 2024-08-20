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
  - go
Creation Date: 2024-01-04, 14:55
Last Date: 2024-08-20T17:39:47+08:00
References: 
draft: 
---
## Abstract
---
- A [[Datatype]] whose value is [[Memory Address]], and itself is located at a memory address too
- In the diagram below shows some [[Go]] codes, we create a pointer `var p *int32 = new(int32)` and perform [[#Pointer Dereference]] with `*p`

![[pointer_example.png|600]]

>[!success] Pass data by pointer
> Pass data to functions by pointer is **memory-efficient**. The data we pass into a function is basically a [[Memory Address]] to access that block of data. If we pass data into functions without pointer. We need to create an entire duplicate of data and pass it to the functions. 
> 
> In [[Java]], data is passed to functions by pointer by default. However in [[Go]], we need to explicity specify the pointer datatype for the function input, then we can pass data by point!
> 
> Pointer is the usual way of accessing hardware.
### Pointee
- The **actual data** that a [[Pointer]] points-to inside the [[Address Space#Heap Segment]]

### Pointer Dereference
- The process of accessing [[#Pointee]] of a [[Pointer]]



>[!important] Segmentation fault
> ```c
> int *n;
> 
> *n = 123;
> ```
> 
> When `*n` is uninitialised, `*n = 123;` will attempt to write the value `123` into a random [[Memory Address|memory address]] that `*n` might be pointing to. This memory address may not be accessible to your program, which will trigger a [[Segmentation Fault|segmentation fault]].
 


## Null Pointer
---
- [[Pointer]] that doesn't point to any memory location, basically contains a invalid [[Memory Address]]
- In [[C]], it is represented by `0` or `nullptr`
- In [[Java]], it is represented by `null`, [[Datatype#Custom Datatype]] can be `null`
- In [[Go]], it is represented with `nil`

## Void Pointer
---
- A [[Pointer]] without [[Datatype]] aka a pre-defined size
- Used when we aren't sure what the exact size of a variable like the return type of [[malloc]]

>[!important]
> We should always try to cast it to a specific type whenever it is possible.

## Rust
---
### Rust Box
- A smart [[Pointer]] that represents [[Rust Ownership]] of values allocated on the [[Address Space#Heap Segment]]
### Rust References 
- **Non-owning pointers** that points to [[#Rust Box]], thus they do not own the data they point to.
- Powers [[Rust Borrowing]]