---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-11-28T20:13:00
Last Date: 2023-12-02T15:18:22+08:00
References:
---
## Abstract
---
- A *read-modify-write (RMW)* [[Instruction]] on a piece of data, that appears to complete *instantaneously* and *without interruption*, even when multiple [[Thread]] or processors attempt to access the same piece of data simultaneously
- This ensures that a set of *read-modify-write (RMW)* operation's outcome on a piece of data is always *consistent* and *predictable*
- Commonly used in [[Semaphore (信号量)]] & [[Mutex (互斥体)]] etc which have state that need to be accessed and modified safely by multiple [[Process]]


## Benefits
---
### Prevent [[Race Condition (竞态条件)]]
- With *read-modify-write (RMW)* united in one pieces, there is no way for one [[Thread]] to read, another [[Thread]] to write, and first [[Thread]] from overwriting the changes made by the second [[Thread]]

## Real-World Examples
---
### Acquiring and Releasing [[Spinlock (自旋锁)]]
- Atomic instructions are also used to acquire and release [[Spinlock (自旋锁)]], which are locks that prevent multiple threads from accessing a shared resource simultaneously.
```c
// XV6-RISCV Kernel Codes, spinlock.c

// Acquire the lock.
// Loops (spins) until the lock is acquired.
void
acquire(struct spinlock *lk)
{
  // ...

  // On RISC-V, sync_lock_test_and_set turns into an atomic swap:
  //   a5 = 1
  //   s1 = &lk->locked
  //   amoswap.w.aq a5, a5, (s1)
  while(__sync_lock_test_and_set(&lk->locked, 1) != 0);

  // ...
}
```