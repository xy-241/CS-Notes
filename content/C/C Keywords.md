---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
Creation Date: 2023-11-26T17:42:00
Last Date: 2023-12-22T23:57:03+08:00
References: 
---
## Abstract
---
- Keywords that may change the behaviours of [[Language Processors#Compiler]] or program


### `volatile {:c}`
- Used to indicate to the [[Language Processors#Compiler]] that a variable's value may change unexpectedly
- Often the case when a variable is being accessed by multiple [[Thread]] or when it represents *hardware* that is external to the computer
- Compiler will not optimize the code that accesses the variable. This means that the compiler *will not reorder instructions or eliminate redundant reads or writes to the variable*
- This can be important for ensuring that the variable's value is always read and written correctly
- Example: In the below example, we have 2 exact same [[Instruction]], for performance sake, Compiler will remove the second one since it doesn't cause *side effect* inside the `uartinit()` function. However, this will cause us unable to set the baud rate!
- Used a lot in *memory mapped io*
```c
// xv6-riscv kernel source codes, uart.c
uartinit(void)
{
  // disable interrupts.
  WriteReg(IER, 0x00); // Where IER is 1

  // ...

  // MSB for baud rate of 38.4K.
  WriteReg(1, 0x00);

  // ...
}
```

### `asm volatile {:c}`
- Used to insert [[Assembly language]] directly into C code
- Below example is [[Interrupts (中断)#Turn off interrupt in XV6-RISCV]]

```c {7}
// XV6-RISCV kernel codes, riscv.h

// ...
static inline void 
w_sstatus(uint64 x)
{
  asm volatile("csrw sstatus, %0" : : "r" (x));
}
// ..
```