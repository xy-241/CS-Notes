---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-19T17:15:00
Last Date: 2023-12-12T22:15:02+08:00
References: 
---
## Abstract
- A list of memory locations from *0* to some maximum ([[Virtual Memory]]), which [[Process]] can read & write
- 3 Components - [[#Stack Segment]], [[#Data Segment]] and  [[#Text Segment]]
![[address_space.png]]

## 3 Components
### Stack Segment
- [[Stack (FILO)]] structure
- Grows downwards
- The expansion and shrinking are done automatically
- Can be used to store function variables
#### XV6-RISCV Kernel Stack Example 
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
- Then based on the core id (0-7), we set the [[Registers#Stack Pointer]] for each [[CPU]]. We can see the [[Registers#Stack Pointer]] starting point is obtained by adding `(hartid * 4096)` to the base address, this is because *stack segment grows downwards* when we are adding values to the stack
### Data Segment
- Grow upwards
- Expansion is done explicitly using [[System Call (系统调用)]] [[brk()]] or higher level [[Library Calls (Library Procedure)]]
- All objects created with the `new` keywords in [[Java]] are created here 
### Text Segment
- Stores program codes, **unchangeable**