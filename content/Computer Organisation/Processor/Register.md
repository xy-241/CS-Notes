---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - computer_organisation
Creation Date: 2023-11-20T10:58:00
Last Date: 2025-01-31T11:25:44+08:00
References: 
description: Registers are hardware components used for storing values and configuring CPU operations. They lack fixed datatypes, with data interpreted by instructions. Key types include memory, stack, and control registers. Concepts like spilling, allocation, and memory mapping optimize computational efficiency and hardware interaction.
---
## Abstract
---
- A group of [[Flip-flop|D Flip-flops]]
- Accessible via [[Instruction]]

>[!important] 2 main purposes
> 1. Storing values during computations like [[Memory Address]] & value
> 2. Configuring [[CPU]] to carry out computations

>[!important] Registers have no datatypes
> For example, `add` in [[MIPS]] assumes the data is in [[Integer Encoding (数字编码)#2's Complement (补码)]] and `addu` assumes the data is unsigned binary number.
> 
> The data stored in the register is interpreted according to the instruction that uses it.

### Register Allocation
- [[Language Processors#Compiler]] associates [[Register]] with variables in the given program 

### Register Spilling
- When there are **more variables than the available registers** can hold (due to the limited number of registers), we encounter a situation known as **register spilling**
- To handle this, some variables are temporarily saved to memory (usually the [[Address Space#Stack Frame|stack frame]]) and restored later when they are needed again

## Memory Register
---
### Memory Address Register
- [[Register]] that points to [[Memory Address]] that contains the data required by the current [[Instruction]] that is being executed 

### Memory Data Register
- A [[Register|register]] temporarily stores data that is being transferred to or retrieved from [[Main Memory|memory]]

## Common Registers
---
### Instruction Register
- Holds the actual [[Instruction]] that is **currently being executed** by the [[CPU]]


### Program Counter
- Also known as **Instruction Address Register**, **Instruction Pointer**
- For modern computers, it is the [[Register]] that indicates the [[Virtual Memory#Virtual Address]] of the next [[Instruction]] to be **executed** for the current [[Process (进程)]]


### Control & Status Registers (CSRs)
- There are multiple such registers in the [[CPU]], the main purpose is storing information about the current state of the processor or device
- CSRs are typically used to control various aspects of the processor's operation, such as interrupt handling, memory management, and power management etc



## Stack Registers
---
### Stack Pointer
- A [[Register]] that holds the [[Memory Address]] of the top of the [[Address Space#Stack Segment]] (**start of free space** on the stack or the **last item** on the stack) in the current **execution context**. Here is the [[stack_segment.png|Diagram]] 

>[!info] `offset($sp)`
> Used to **access a memory location** **relative** to the **current top** of the stack.
> 
> ```asm
> ; Decrement the stack pointer by 8 (allocate 8 bytes on the stack)
> sub $sp, 8 
>
> ; Move the value at the memory location (sp + 4) into the eax register
> mov 4($sp), %eax 
> ```

### Frame Pointer
- Maintains a reference point for the current [[Address Space#Stack Frame]]
- **At the beginning of a function (prologue)**, the frame pointer is typically set to the [[Address Space#Stack Frame|stack frame]]
- **Throughout the function:** The FP remains relatively unchanged, offering a stable reference point which is used to **access data inside the new stack frame** via [[ISA Addressing Mode#Displacement Addressing Mode|displacement addressing mode]]

>[!attention] Optional!
> The usage of FP is [[Instruction Set Architecture (ISA)|ISA]] dependent!
> 
> FP isn't necessary for operation on the stack, it exists to provide convenience to the [[Language Processors#Compiler|compiler]].

## Terminologies
---
### Register Width
- The number of [[Computer Data Representation#Bit]] a [[Register]] can hold
### Register File
- A collection of [[Register]] that [[CPU]] can use to **quickly store** and **retrieve** [[Data]]
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


## References 
---
- [microcontroller - difference between memory address register(MAR) and program counter(PC)? - Stack Overflow](https://stackoverflow.com/questions/10876372/difference-between-memory-address-registermar-and-program-counterpc)