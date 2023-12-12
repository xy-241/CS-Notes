---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - computer_organisation
Creation Date: 2023-11-20T10:58:00
Last Date: 2023-12-12T21:47:13+08:00
References: 
---
## Abstract
- A group of [[Latch]]
- Accessible from [[Instruction]]

## 2 main purposes
1. Storying values during computations (like [[Memory Address]] & value)
2. Configuring [[CPU]]


## Register Type
### Instruction Address Register
- The register that contains the [[Memory Address]] to retrieve the [[Instruction]]
### Instruction Register
- Contains [[Instruction]] retrieved from [[Main Memory]]

### Control & Status Registers (CSRs)
- There are multiple such register
- Stores information about the current state of the processor or device
- CSRs are typically used to control various aspects of the processor's operation, such as interrupt handling, memory management, and power management etc

### Stack Pointer
- Holds the address of the top of the [[Address Space#Stack Segment]] in the current **execution context**

## MIPS Registers
![[MIPS_Register.png]]




## Terminologies
### Width
- The number of [[Bits]] inside a register
### File
- A collection of registers that [[CPU]] can quickly store and retrieve [[Data]]
### Memory Mapped
- *Register* that is treated as a [[Main Memory]] location 
- This means that the register can be accessed using the same [[Instruction]] and addressing modes as memory. 
- Often used to control *hardware devices*, such as I/O devices (Like the UART in *XV6*) and memory controllers
```c
// XV6-RISCV Kernel Codes, memlayout.h

// Physical memory layout

// qemu -machine virt is set up like this,
// based on qemu's hw/riscv/virt.c:
//
// 00001000 -- boot ROM, provided by qemu
// 02000000 -- CLINT
// 0C000000 -- PLIC
// 10000000 -- uart0 
// 10001000 -- virtio disk 
// 80000000 -- boot ROM jumps here in machine mode
//             -kernel loads the kernel here
// unused RAM after 80000000.

// the kernel uses physical memory thus:
// 80000000 -- entry.S, then kernel text and data
// end -- start of kernel page allocation area
// PHYSTOP -- end RAM used by the kernel

// qemu puts UART registers here in physical memory.
#define UART0 0x10000000L
#define UART0_IRQ 10
```