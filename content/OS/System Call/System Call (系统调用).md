---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-21T11:55:53+08:00
Last Date: 2024-01-18T18:54:00+08:00
References: 
description: "Unlock the power of your computer's hardware while staying secure! Dive into system calls: the essential bridges between programs and the operating system's kernel. Learn how they work, boost security, and vary across different CPU architectures. Explore examples from Linux and Windows to master this core computing concept."
---
## Abstract
---
- A way for program to request services from the [[Kernel]] via [[Signal (Software Interrupt)]]
- Can be traced by [``strace``](https://stackoverflow.com/questions/65510246/can-a-system-call-happen-in-a-c-program)
- Program should always check the results of [[System Call (系统调用)]] to see if an error occurred 


## Benefits
---
### Better Security
- Allow [[User Space]] program to use **computer hardware** to complete its job with [[OS]]'s security implementation to prevent programs from doing malicious stuff

## How a system call is triggered
---
1. Calling program pushes parameters of the system call to [[Address Space#Stack Segment]] (Step 1-3)
2. Trigger an [[Instruction]] to trigger the corresponding [[Library Call]], the same instruction is used to trigger other library calls (Step 4, where the actual library call is happening)
	1. Library Call puts Syscall Interrupt Number in  a place where [[OS]] expects it, such as a [[Register]] (Step 5)
3. Execute [[Trap Interrupt (陷入)]] (Step 6)
4. Kernel code examines Syscall Interrupt Number, dispatch the correct [[Interrupt Handler]] via [[Interrupt Vector Table]](Step 7)
5. The desired Interrupt Handler starts running (Step 8)
6. After Interrupt Handler finishes, control **maybe** returned to the [[User Space]] at the Instruction following the Trap Interrupt (陷入) (Step 9)
>[!attention] Control MAYBE returned to user-space
>- The System Call (系统调用) may block the caller (in this case Library Call), preventing it from continuing
>- For example, keyboard reads system call. When system call tries to read but nothing has been typed yet, the caller has to be blocked
8. Then, library call returns to the user program  (Step 10)
9. To finish the job, the user program has to clean up the Stack Segment by incrementing the [[Register#Stack Pointer]] exactly enough to remove the parameters pushed before the making the System Call (系统调用) (Step 11) (Stack Segment grows downwards, so to remove *Stack frame*, we increment the [[Register#Stack Pointer]])
![[system_call_triggering_process.png]]


## Highly CPU dependent
---
- System call is implemented with [[Assembly language]] which  is differently across different [[Instruction Set Architecture (ISA)]]
![[syscall_architecture_differences.png]]
### Parameters of system call
- Some [[Instruction Set Architecture (ISA)]] may expect the parameters be stored in [[Address Space#Stack Segment]]
- Some Instruction Set Architecture (ISA) may expect the parameters be stored in [[Register]]
### Abstraction comes to rescue
- [[OS]] provide an [[Abstraction (抽象)#Abstraction Barrier]] on top of these [[Interrupts (中断)]] and [[Interrupt Handler]]
- Reusable higher-level library functions that wrap the necessary [[Assembly language | Assembly Instruction]] are provided by [libc](https://www.gnu.org/software/libc/) on Unix-like systems and part of a library called [ntdll.dll](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/libraries-and-headers) on Window
- Specific [[Instruction Set Architecture (ISA)]] [[Instruction]] is generated automatically during [[Compilation]]




## Examples
---
### Linux System Calls
- [[System Call (系统调用)]] is tightly-coupled with [[Library Call]], almost *1-to-1*
- [Full List](https://man7.org/linux/man-pages/man2/syscalls.2.html)
![[system_calls.png]]


### Windows System Calls
- [[System Call (系统调用)]] is decoupled from [[Library Call]]
- We can change the [[System Call (系统调用)]], without worrying changing the behaviour of [[Library Call]]
![[windows_system_calls.png]]

