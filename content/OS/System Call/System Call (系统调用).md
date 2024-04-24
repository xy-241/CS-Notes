---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-21T11:55:53+08:00
Last Date: 2024-04-25T02:23:56+08:00
References: 
description: "Unlock the power of your computer's hardware while staying secure! Dive into system calls: the essential bridges between programs and the operating system's kernel. Learn how they work, boost security, and vary across different CPU architectures. Explore examples from Linux and Windows to master this core computing concept."
---
## Abstract
---
- A way for program in [[User Space]] to request **privileged services** like hardware access from the [[Kernel]]
- A form of [[Interrupts (中断)#Software Interrupt]]
- Can be traced by [``strace``](https://stackoverflow.com/questions/65510246/can-a-system-call-happen-in-a-c-program)

>[!important]
> Control is passed back to the [[Kernel]] when a system call is made by the [[Process (进程)]]. Kernel uses this opportunity to perform its [[Process Management]].
> 
> If the process hogs to the [[CPU]] and doesn't make any system call, we have [[Concurrency (并发)#Preemptive Scheduling]] to handle this.

>[!attention] User program isn't communicating with syscall directly!
> The System call is placed behind an [[Abstraction (抽象)#Abstraction Barrier]] created with the [The GNU C Library](https://sourceware.org/glibc/started.html). So user programs like [[OS System Program]] is triggering system call that requests privileged services from the kernel via the GNU C Library.

>[!tip] Best Practice
>Program should always check the results of System Call (系统调用) to see if an error has occurred 


>[!success] Better Security
> Allow [[User Space]] program to use **computer hardware** to complete its job with **kernel's security implementation** to prevent programs from doing malicious stuff

## How is a system call triggered?
---
![[system_call_triggering_process.png|500]]
1. **Step 1-3:** Calling program pushes the arguments for the parameters of the system call to its [[Address Space#Stack Segment]] 
2. **Step 4**(where the actual [[Library Call]] is happening): An [[Instruction]] is triggered to trigger the corresponding Library Call, the same instruction is used to trigger other library calls 
	- **Step 5** Library Call puts **Syscall Interrupt Number** in a place where [[Kernel]] expects it, such as a [[Register]] 
3. **Step 6:** Execute [[Trap Interrupt (陷入)]] to enter the [[Privilege Level#Kernel Mode]]
4. **Step 7:** Kernel code examines **Syscall Interrupt Number**, dispatch the correct [[Interrupt Handler]] via [[Interrupt Vector Table]]
5. **Step 8:** The desired Interrupt Handler starts running
6. **Step 9:** After Interrupt Handler finishes, control **maybe** returned to the [[User Space]] at the Instruction following the Trap Interrupt (陷入) 
>[!attention] Control MAYBE returned to user-space
>- The System Call (系统调用) may block the caller (in this case Library Call), preventing it from continuing
>- For example, the system call for keyboard input. When system call tries to read but nothing has been typed yet, the caller has to be blocked
8. **Step 10:** Then, library call returns, and we are back to the user program 
9. **Step 11:** To finish the job, the user program has to clean up the Stack Segment by **incrementing** the [[Register#Stack Pointer]] exactly enough to remove the arguments we pushed to the stack segment



## Highly CPU dependent
---
![[syscall_architecture_differences.png|500]]
- System call is implemented with [[Assembly language]] which  is differently across different [[Instruction Set Architecture (ISA)]]

>[!caution] Parameters of System Call
> For example, some ISA may expect the parameters be stored in [[Address Space#Stack Segment]] of the [[Kernel]]
> 
> Some ISA may expect the parameters be stored in [[Register]]


>[!success] Abstraction comes to rescue
> We have [[Abstraction (抽象)#Abstraction Barrier]] on top of these [[Interrupts (中断)]] and [[Interrupt Handler]] in the form of [[Library Call]] that follows a standardised interface like [[POSIX]] by wrapping the [[Assembly language | Assembly Instruction]] of different Instruction Set Architecture (ISA) for applications inside [[User Space]]. Specific [[Instruction]] of Instruction Set Architecture (ISA) is generated automatically during [[Compilation]]
> 
> [[Unix#Unix-like]] systems use [[Library Call#libc]] and Windows uses [ntdll.dll](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/libraries-and-headers).




## Examples
---
### Linux System Calls
![[system_calls.png|500]]
- Above is some [[POSIX]] system calls, basically a standardised set of [[Library Call]] that wraps [[System Call (系统调用)]], almost **1-to-1**
- [Full List](https://man7.org/linux/man-pages/man2/syscalls.2.html)



### Windows System Calls
![[windows_system_calls.png|500]]
- The list above shows the [[Library Call]] which is powered by Windows' [[System Call (系统调用)]]
