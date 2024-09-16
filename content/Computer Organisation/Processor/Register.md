---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - computer_organisation
Creation Date: 2023-11-20T10:58:00
Last Date: 2024-09-05T21:30:46+08:00
References: 
---
## Abstract
---
- A group of [[Sequential Circuit#Flip-flops]]
- Accessible via [[Instruction]]
- 2 main purposes
	1. Storing values during computations like [[Memory Address]] & value
	2. Configuring [[CPU]] to carry out computations

>[!important] Registers have no datatypes
> For example, `add` in [[MIPS]] assumes the data is in [[Integer Encoding (数字编码)#2's Complement (补码)]] and `addu` assumes the data is unsigned binary number.
> 
> The data stored in the register is interpreted according to the instruction that uses it.

### Register Allocation
- [[Language Processors#Compiler]] associates [[Register]] with variables in the given program 
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




### Stack Pointer
- A [[Register]] that holds the [[Memory Address]] of the top of the [[Address Space#Stack Segment]] in the current **execution context**. Here is the [[stack_segment.png|Diagram]] 

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
- Maintains a reference point within the current [[Address Space#Stack Frame]]
- **At the beginning of a function (prologue)**, the Frame Pointer is typically set to the current value of the [[#Stack Pointer]], establishing the base of the current stack frame
- **Throughout the function:** The FP remains relatively unchanged, offering a stable reference point

### Control & Status Registers (CSRs)
- There are multiple such registers in the [[CPU]], the main purpose is storing information about the current state of the processor or device
- CSRs are typically used to control various aspects of the processor's operation, such as interrupt handling, memory management, and power management etc






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