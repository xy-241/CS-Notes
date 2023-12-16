---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-29T19:10:00
Last Date: 2023-12-14T19:43:33+08:00
References: 
---
## Abstract
---
- When an interrupt occurs, [[Control Unit#Program Counter]] jumps to [[Interrupt Handler]] & execute 


## 2 Types
---
### Signal (Software Interrupt
- See [[Signal (Software Interrupt)]]
### Hardware interrupts (外中断)
- [[#Asynchronous]]
- Examples are [[Timer Chips]] for [[Multi-tasking]] where [[CPU]] is interrupted to take in inputs from keyboard for example

## Benefits
---
- We don't need to get [[CPU]] to keep *Polling* for response which may take a long time to produce. Thus wasted computation

## Cons
---
>[!sidenote]
>Interrupts should complete quickly to prevent the below problems
### Generally can't be interrupted
- Allowed to run to completion. For example, if a keyboard's interrupt is interrupted, we may lose the input from the keyboard
- However, there are exceptions 

### Some [[Callback Function]] don't work
- As long as the [[Interrupt Handler]] is running, other interrupts may not be handled 
- Generally not queued
- [[Interrupt Priorities]] exist in some systems to handle [[Simultaneous Interrupts]]

## Examples
---
### Turn off interrupt in XV6-RISCV
- This is achieved by writing to the [[Registers#Control & Status Registers (CSRs)]] - `sstatus`
- The code snippets below going down the [[Abstraction (抽象)]], we going down from `intr_off()`
```c {8}
// XV6-RISCV kernel codes, spinlock.c

// ...
void
push_off(void)
{
  // ..
  intr_off();
  // ...
}
// ...
```
- We can see from code snippet below, to turn the *interrupt* is setting the second bit from right on the `sstatus` register
```c {11}
// XV6-RISCV kernel codes, riscv.h

// ...
#define SSTATUS_SIE (1L << 1) // Supervisor Interrupt Enable

// ...
// disable device interrupts
static inline void
intr_off()
{
  w_sstatus(r_sstatus() & ~SSTATUS_SIE);
}
// ...
```
- Eventually, it boils down to [[Assembly language]]
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

## Terminologies 
---
### Synchronous
- Locked to [[CPU]]'s cadence of [[Pipeline Stages]] & [[Execute]] [[Instruction]]
- [[Operation]] that occur in a coordinated and timed manner, in response to [[Clock Cycle]] for example
### Asynchronous
- Opposite of [[#Synchronous]]