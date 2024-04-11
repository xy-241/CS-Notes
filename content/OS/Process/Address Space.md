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
Last Date: 2024-04-11T16:45:41+08:00
References: 
description: Stack (automatic memory management for function variables), Heap (dynamic memory management), Data (stores pre-defined variables shipped with the program) and Text (stores unchangeable program codes).
---
## Abstract
---
![[address_space.png|300]]

- A list of memory locations from **0** to **some maximum**, which [[Process (进程)]] can access
- Address space is powered by [[Virtual Memory]], so everything in address space is dedicated to that particular process
- 4 main components
	- Data in [[#Text Segment]] (the **orange** block shown above) and [[#Data Segment]] (the **red** block shown above) are shipped with the program
	- Data in [[#Heap Segment]] (the **blue** block shown above) and [[#Stack Segment]] (the **green** block shown above) are allocated dynamically when the program is running

## Heap Segment
---
![[address_space_heap.png]]

- Data is added into heap segment **explicitly** by [[Process (进程)]] during **runtime** using [[System Call (系统调用)]] like `brk()` for [[Kernel]] that follow [[POSIX]]. The data in heap can live indefinitely even when function returns, the data is only removed when the process make the related System Call (系统调用) **explicitly**
- **Grows** and **shrinks** as the process allocates and deallocates memory. The heap segment grows upwards, because the [[Memory Address]] is increasing as we have more data is allocated inside the heap segment

>[!bigbrain]
> When assigning one variable to another variable, data is **not duplicated**, instead the [[Pointer]] to the data inside the heap segment is duplicated and assigned. A nice visualisation on heap memory allocation can be found [here](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#boxes-live-in-the-heap).

>[!important] Manual memory management from the process needed!
> Process is responsible of allocating memory and deallocating in the heap segment. See language examples below.
>
> **Java**
> - Memory allocation with `new` keyword, and memory deallocation is done by [[Garbage Collector]] automatically
> 
> **Rust**
> - Memory allocation with `Box::new()` function, and memory deallocation is done automatically using [[Rust Ownership#Box Deallocation Principle]]
> 
> **C**
> - Memory allocation with `malloc()` function, and manual memory deallocation is done with `free()` function

>[!caution] Manual Memory Deallocation is Dangerous!
>After we manually deallocated the heap memory associated with a [[Pointer]], then try to read data from the same pointer, it will lead to undefined behaviours. Thus, resulting in [[Memory Safety#Poor memory safety]].
>
>Refer to this [section of article](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#rust-does-not-permit-manual-memory-management) for more details.

### Heap fragmentation
![[heap_fragmentation.png|250]]

- There are 2 types of heap fragmentation - **Internal Fragmentation** & **External Fragmentation**(show in the diagram above)

|            | Internal Fragmentation                                                                                                                                                                                                                                                                                                                                            | External Fragmentation                                                                                                                                                                                                                                                |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Definition | When allocated [[Main Memory#Memory Frames\|Memory frames]] have **unused memory space**, since each memory frame comes with a **fixed size**.                                                                                                                                                                                                                    | When free **memory frames** in the heap are **scattered** throughout the memory space after a series of allocations and deallocations of memory blocks of **varying sizes**.                                                                                          |
| Risk       | Increased memory consumption than actual demand.<br><br>For example, the memory frame size is `10MB`, and my program needs `10.00001MB`. We will get 2 memory frames that are `10MB` each, this means `9.99999MB` is wasted. Imagine I have a lot of programs with `10.00001MB` in my computer, that means we waste almost half of the available [[Main Memory]]! | Difficulty to allocate contiguous blocks of memory -> reduced performance.<br><br>Small gaps between allocated blocks can also become unusable if [[Virtual Memory]] isn't used, even though the total amount of free memory might be sufficient to fulfil a request. |


>[!tip] Ways to handle memory fragmentation
> **Compaction** - rearranging memory blocks to eliminate gaps. 
> 
> And many other techniques like [Dyanmic memory allocation - Wikipedia](https://en.wikipedia.org/wiki/Dynamic_memory_allocation) and [Memory pool - Wikipedia](https://en.wikipedia.org/wiki/Memory_pool).


### Memory leak
- Happens when we **forget to release** data in [[Address Space#Heap Segment]] using `free()` in the example of C
- This can eventually lead to the exhaustion of available [[Main Memory]], resulting in **degraded performance** or even **program crashes**

>[!attention]
> We should always deallocate the chucks of data when we don't need it anymore to avoid memory leak!


## Stack Segment
---
![[stack_segment.png|300]]
- Also known as **Call Stack**
- **Dynamically allocated region** used to store **function calls**, local variables, and temporary data etc
- Made up of [[#Stack Frame]], following a [[Stack]] structure
- **Expands** as functions are called and **shrinks** as they return
- We can obtain the default stack size assigned by the system using `ulimit -s`

>[!question]- Grows Downwards
>Stack Segment starts at a higher [[Memory Address]], then **memory address decreases** as we add in **Stack Frame**, thus **growing downwards** in terms of Memory Address, so to remove stack frame, we need to increment the [[Register#Stack Pointer]].

>[!info]- Fun Fact Regarding Grow Downwards
> Growing downwards is a convention from when computers had small memories and the stack was placed at the end of the [[#Data Segment]]. Nowadays the stack can be anywhere, but the convention stuck on, at the end of the day it makes no difference.

>[!bigbrain] Variables live in the stack
> When assigning one variable to another variable, data is **duplicated**.
> 
> For example, `a=1` and `b=a`, the value `1` is duplicated and assigned to `b`. A nice visualisation can be found [here](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#variables-live-in-the-stack) 



>[!success] Data management in Stack Segment is more efficient than Heap Segment
>1. Stack memory is allocated and deallocated in a **Last In, First Out (LIFO) manner**, making it faster than heap memory. This is because all it needs to do is move the [[Register#Stack Pointer]] up or down, while heap memory requires more complex memory management
>2. No overhead of complex [[Synchronization (同步)]], unlike data inside heap segment, data inside the stack segment is dedicated to that particular [[Thread]]. Thus, manipulation of data inside the stack segment doesn't require the complex synchronisation 


>[!caution] Attention
> The size of variable on the stack is defined before Compilation

>[!example]- XV6-RISCV Kernel Stack
>```c {13}
>// xv6-riscv kernel codes, start.c
>
>#include "types.h"
>#include "param.h"
>#include "memlayout.h"
>#include "riscv.h"
>#include "defs.h"
>
>void main();
>void timerinit();
>
>// entry.S needs one stack per CPU.
>__attribute__ ((aligned (16))) char stack0[4096 * NCPU];
>
>// a scratch area per CPU for machine-mode timer interrupts.
>uint64 timer_scratch[NCPU][5];
>
>// assembly code in kernelvec.S for machine-mode timer interrupt.
>extern void timervec();
>
>// ...
>```
>- A **stack segment** is created, and it is shared by all the [[CPU]], each takes **4096 bytes**
>- **NCPU** is hard-coded to `8`, so the stack has a length of **32768 bytes**
>```asm {14-19}
># xv6-riscv kernel codes, entry.S
>
># qemu -kernel loads the kernel at 0x80000000
># and causes each hart (i.e. CPU) to jump there.
># kernel.ld causes the following code to
># be placed at 0x80000000.
>.section .text
>.global _entry
>_entry:
>	# set up a stack for C.
>	# stack0 is declared in start.c,
>	# with a 4096-byte stack per CPU.
>	# sp = stack0 + (hartid * 4096)
>	la sp, stack0
>	li a0, 1024*4
>	csrr a1, mhartid
>	addi a1, a1, 1
>	mul a0, a0, a1
>	add sp, sp, a0
>	# jump to start() in start.c
>    call start
>spin:
>	j spin
>```
>
>- We load the base address of the **stack segment**
>- Then based on the core id (0-7), we set the [[Register#Stack Pointer]] for each [[CPU]]. We can see the stack pointer starting point is obtained by adding `(hartid * 4096)` to the base address, this is because **stack segment grows downwards** when we are adding values to the stack

### Stack Frame
- A section of the [[#Stack Segment]] dedicated to a **specific function call**
- Except for the first frame, all frames contains the [[Memory Address]] of the previous stack frame, and the size of current stack frame which is used to adjust the [[Register#Stack Pointer]] to exclude the current stack frame from the stack segment when the function call of the current frame ends. The current stack frame will be overwritten when a new frame is added to the stack segment 

### Stack Overflow
- Happens when the **size of all the stack frame** is **over** the **default fixed size** of the stack segment. Usually can be triggered easily without a proper implementation of [[Recursion#Recurrence Function]]
## Data Segment
---
- This region stores **global** and **static variables** and **constants** used by the program, pre-defined before the execution of the program
- Can be both read and write, allowing the [[Process (进程)]] to manipulate the data as needed

## Text Segment
---
- Stores program codes, **unchangeable**, **read-only**. Unless for the purpose of [dynamic linking with shared libraries](https://en.wikipedia.org/wiki/Dynamic-link_library#:~:text=With%20dynamic%20linking%2C%20shared%20code,extension)


## References
---
- [Dive Into Systems - Virtual Memory](https://diveintosystems.org/book/C13-OS/vm.html)
- [What is Ownership? - The Rust Programming Language](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html)
- [WHY IS THE STACK SO FAST? - YouTube](https://www.youtube.com/watch?v=N3o5yHYLviQ)
- [Fragmentation (computing) - Wikipedia](https://en.wikipedia.org/wiki/Fragmentation_(computing))