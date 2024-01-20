---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - rust
  - OS
Creation Date: 2024-01-13, 20:38
Last Date: 2024-01-20T18:03:05+08:00
References: 
draft: 
description: The way Rust manages heap memory efficiently and safely
site_name: CS Notes by xy241
---
## Abstract
---
- **Ownership** refers to **program variables' ability** to **access** to a piece of **data allocated** in the [[Address Space#Heap Segment]]
</br>

- **Ownership** is a way to manage the **heap segment**, or in other sense, manage [[Pointer]]
	1. All data in the heap segment must has **only one owner** aka **variable**
	2. [[Rust]] **deallocates heap data automatically** once **its owner** goes out of scope (got removed from the [[Address Space#Stack Segment]]) - [[#Box Deallocation Principle]]
	3. Ownership can be **transferred to other variables** by moves, which happen on **assignments** and **function calls** - [[#Moved Heap Data Principle]]
	4. Heap data **can only be accessed** through its **current owner**, **not a previous owner** - Moved Heap Data Principle

</br>

- This enables Rust to make [[Memory Safety]] guarantees without needing a [[Garbage Collector]] which is a **big hit** to the performance

>[!caution]
>Rust Compiler will not compile if there is a transfer of ownership in a *if else statement* and we are using the [[Pointer#Rust Box]] that transfers ownership in the *if else statement* after the *if else statement* regardless if the *if else statement* will execute or not

### Box Deallocation Principle
- If a variable owns a [[Pointer#Rust Box]], when Rust deallocates the variable's frame in [[Address Space#Stack Segment]], then Rust deallocates the box's [[Address Space#Heap Segment]]
- Refer to [Box's Owner Manages Deallocation](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#a-boxs-owner-manages-deallocation)

>[!note]
>The key idea is that when a rust box is passed to function aka a new stack frame, its memory is deallocated after function ends.
>
>Therefore the data is still available in heap segment after the ownership is transferred 

### Moved Heap Data Principle
- If a variable `x` moves ownership of data in [[Address Space#Heap Segment]] to another variable `y`, then `x` cannot be used after the move
- Refer to [Variables Cannot Be Used After Being Moved](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#variables-cannot-be-used-after-being-moved)

### Cloning Avoids Moves
- In some use cases, we still want to keep a copy of original data in the [[Address Space#Heap Segment]]
- We can do it by calling `clone()` on the [[Pointer#Rust Box]] which create a new copy of original data in the heap segment, and we can assign the ownership of this new copy to other parts of the program to manipulate, and the ownership of the original piece of data is left untouched
- Refer to [Cloning Avoids Moves](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#cloning-avoids-moves)


## Reference
---
- [What is Ownership? - The Rust Programming Language](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html)