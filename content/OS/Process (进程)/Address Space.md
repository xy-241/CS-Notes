---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - java
  - c
  - rust
Creation Date: 2023-10-19T17:15:00
Last Date: 2024-01-19T19:12:54+08:00
References: 
description: Stack (automatic memory for function variables), Data (manual memory managed with brk()), and Text (stores unchangeable program codes). XV6-RISCV kernel code for Stack implementation and discusses memory management in Java, Rust, and C.
---
## Abstract
---
![[address_space.png|300]]

- A list of memory locations from **0** to **some maximum** ([[Virtual Memory]]), which [[Process]] can access
- 4 main components
	1. [[#Text Segment]] (the orange block shown above)
	2. [[#Data Segment]]
	3. [[#Heap Segment]]
	4. [[#Stack Segment]]

### Heap Segment
- **Dynamically allocated region** where the [[Process]] can create new data structures as needed
- **Grows** and **shrinks** as the **process** allocates and deallocates memory

- Grow upwards
- Region of [[Virtual Memory]] where data can live indefinitely even when function returns
- Expansion is done explicitly using [[System Call (系统调用)]] `brk()` or higher level [[Library Call]] during **program runtime**
</br>

- Require manual memory management - process of allocating memory and deallocating memory
- When assigning one variable to another variable, data is **not duplicated**, instead the [[Pointer]] to the data is duplicated and assigned
- A nice visualisation on memory allocation can be found [here](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#boxes-live-in-the-heap)

**Java**
- Memory allocation with `new` keyword, and memory deallocation is done by [[Garbage Collector]] automatically

**Rust**
- Memory allocation with `Box::new()` function, and memory deallocation is done automatically using [[Rust Ownership#Box Deallocation Principle]]

**C**
- Memory allocation with `malloc()` function, and manual memory deallocation is with `free()` function

>[!caution] Manual Memory Deallocation is Dangerous!
>When we manually deallocated, and try to read data from the [[Pointer]], it will lead to undefined behaviors. Thus, violating [[Memory Safety]]
>
>Refer to this [section of article](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#rust-does-not-permit-manual-memory-management) for more details


### Stack Segment
- **Dynamically allocated region** used to store **function calls**, local variables, and temporary data etc
- Made up of **Stack Frames** which are associated with a specific function
- **Grows** as functions are called and **shrinks** as they return
</br>

- [[Stack]] structure
- Grows downwards
</br>

- When assigning one variable to another variable, data is **duplicated**
- For example, `a=1` `b=a`, the value `1` is duplicated and assigned to `b`
- A nice visualisation can be found [here](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#variables-live-in-the-stack) 
#### XV6-RISCV Kernel Stack
```c {13}
// xv6-riscv kernel codes, start.c

#include "types.h"
#include "param.h"
#include "memlayout.h"
#include "riscv.h"
#include "defs.h"

void main();
void timerinit();

// entry.S needs one stack per CPU.
__attribute__ ((aligned (16))) char stack0[4096 * NCPU];

// a scratch area per CPU for machine-mode timer interrupts.
uint64 timer_scratch[NCPU][5];

// assembly code in kernelvec.S for machine-mode timer interrupt.
extern void timervec();

// ...
```
- A *stack segment* is created, and it is shared by all the [[CPU]], each takes *4096 bytes*
- *NCPU* is hard-coded to `8`, so the stack has a length of *32768 bytes*
```asm {14-19}
# xv6-riscv kernel codes, entry.S

# qemu -kernel loads the kernel at 0x80000000
# and causes each hart (i.e. CPU) to jump there.
# kernel.ld causes the following code to
# be placed at 0x80000000.
.section .text
.global _entry
_entry:
	# set up a stack for C.
	# stack0 is declared in start.c,
	# with a 4096-byte stack per CPU.
	# sp = stack0 + (hartid * 4096)
	la sp, stack0
	li a0, 1024*4
	csrr a1, mhartid
	addi a1, a1, 1
	mul a0, a0, a1
	add sp, sp, a0
	# jump to start() in start.c
    call start
spin:
	j spin
```
- We load the base address of the *stack segment*
- Then based on the core id (0-7), we set the [[Register#Stack Pointer]] for each [[CPU]]. We can see the stack pointer starting point is obtained by adding `(hartid * 4096)` to the base address, this is because *stack segment grows downwards* when we are adding values to the stack
### Data Segment
- This region stores **global** and **static variables** and **constants** used by the program, pre-defined before the execution of the program
- Can be both read and write, allowing the [[Process]] to manipulate the data as needed

### Text Segment
- Stores program codes, **unchangeable**


## References
---
- [Dive Into Systems - Virtual Memory](https://diveintosystems.org/book/C13-OS/vm.html)