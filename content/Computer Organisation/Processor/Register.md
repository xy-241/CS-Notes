---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - computer_organisation
Creation Date: 2023-11-20T10:58:00
Last Date: 2024-04-01T19:23:27+08:00
References: 
---
## Abstract
---
- A group of [[Sequential Circuit#Flip-flops]]
- Accessible from [[Instruction]]
- 2 main purposes
	1. Storing values during computations (like [[Memory Address]] & value)
	2. Configuring [[CPU]]


## Famous Registers
---
### Instruction Register
- Contains [[Instruction]] retrieved from [[Main Memory]]

### Control & Status Registers (CSRs)
- There are multiple such register
- Stores information about the current state of the processor or device
- CSRs are typically used to control various aspects of the processor's operation, such as interrupt handling, memory management, and power management etc

### Stack Pointer
- A [[Register]] that holds the [[Memory Address]] of the top of the [[Address Space#Stack Segment]] in the current **execution context**. Here is the [[stack_segment.png|Diagram]] 

>[!info] `offset($sp)`
> Used to **access a memory location** **relative** to the **current top** of the stack
> 
> ```asm
> ; Decrement the stack pointer by 8 (allocate 8 bytes on the stack)
> sub $sp, 8 
>
> ; Move the value at the memory location (sp + 4) into the eax register
> mov 4($sp), %eax 
> ```

### Frame Pointer
- Maintains a reference point within the current [[Address Space#Stack Frame]]
- **At the beginning of a function (prologue)**, the Frame Pointer is typically set to the current value of the [[#Stack Pointer]], establishing the base of the current stack frame
- **Throughout the function:** The FP remains relatively unchanged, offering a stable reference point

## MIPS Registers
---
![[MIPS_Register.png|500]]




## Terminologies
---
### Register Width
- The number of [[Computer Data Representation#Bit]] a [[Register]] can hold
### Register File
- A collection of registers that [[CPU]] can quickly store and retrieve [[Data]]
### Memory Mapped Register
- [[Register]] that can be accessed via a [[Main Memory]] location 
- This means that the register can be accessed using the same [[Instruction]] and addressing modes as memory.
- Often used to control **hardware devices**, such as [[OS/IO/IO Device|IO Device]] (Like the UART in *XV6*) and memory controllers

>[!example]- XV6-RISCV Memory Mapped Registers
> ```c title="memlayout.h"
> // XV6-RISCV Kernel Codes, memlayout.h
> 
> // Physical memory layout
> 
> // qemu -machine virt is set up like this,
> // based on qemu's hw/riscv/virt.c:
> //
> // 00001000 -- boot ROM, provided by qemu
> // 02000000 -- CLINT
> // 0C000000 -- PLIC
> // 10000000 -- uart0 
> // 10001000 -- virtio disk 
> // 80000000 -- boot ROM jumps here in machine mode
> //             -kernel loads the kernel here
> // unused RAM after 80000000.
> 
> // the kernel uses physical memory thus:
> // 80000000 -- entry.S, then kernel text and data
> // end -- start of kernel page allocation area
> // PHYSTOP -- end RAM used by the kernel
> 
> // qemu puts UART registers here in physical memory.
> #define UART0 0x10000000L
> #define UART0_IRQ 10
> ```