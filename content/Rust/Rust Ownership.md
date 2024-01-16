---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - rust
  - OS
Creation Date: 2024-01-13, 20:38
Last Date: 2024-01-16T16:49:31+08:00
References: 
draft: 
---
## Abstract
---
- **Ownership** refers to program variables' access to a piece of data allocated in the [[Address Space#Data Segment]]
- A variable **must own it** to access and manipulate the data in the data segment
- And this ownership is transferrable to other variables
- When the piece of data **doesn't have any owner**, it is **auto deallocated** from the data segment
</br>

- This enables [[Rust]] to make [[Memory Safety]] guarantees without needing a [[Garbage Collector]]

>[!caution]
>Rust Compiler will not compiler if there is a transfer of ownership in a if else statement and we are using the [[Pointer#Rust Box]] that transfers ownership in the if else statement regardless if the if else statement will execute or not

### Box Deallocation Principle
- If a variable owns a [[Pointer#Rust Box]], when Rust deallocates the variable's frame, then Rust deallocates the box's [[Address Space#Data Segment]]
- Refer to [Box's Owner Manages Deallocation](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#a-boxs-owner-manages-deallocation)

>[!note]
>The key idea is that when a rust box is passed to function aka a new stack frame, its memory is deallocated after function ends.
>
>Therefore the data is still available in data segment after the ownership is transferred 

### Moved Heap Data Principle
- If a variable `x` moves ownership of data in [[Address Space#Data Segment]] to another variable `y`, then `x` cannot be used after the move
- Refer to [Variables Cannot Be Used After Being Moved](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#variables-cannot-be-used-after-being-moved)

### Cloning Avoids Moves
- In some use cases, we still want to keep a copy of original data in the [[Address Space#Data Segment]]
- We can do it by calling `clone()` on the [[Pointer#Rust Box]] which create a new copy of original data in the data segment, and we can assign the ownership of this new copy to other parts of the program to manipulate, and the ownership of the original piece of data is left untouched
- Refer to [Cloning Avoids Moves](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#cloning-avoids-moves)
