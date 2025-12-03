---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-21T11:55:53+08:00
Last Date: 2025-12-03T22:15:39+08:00
References:
description: "Unlock the power of your computer's hardware while staying secure! Dive into system calls: the essential bridges between programs and the operating system's kernel. Learn how they work, boost security, and vary across different CPU architectures. Explore examples from Linux and Windows to master this core computing concept."
---
## Abstract
---
- A form of [[Interrupts (中断)#Software Interrupt]] that allows [[Process (进程)]] in [[User Space]] to request **privileged services** like hardware access from the [[Kernel]]


>[!success] Better Security
> Since **privileged services** are carried out by the kernel, kernel can enforce **security implementation**. This prevents programs from doing malicious stuff.


## System Call Mechanism
---

![[system_call_triggering_process.png|500]]

**Step 1-3:** Calling [[Process (进程)]] pushes the arguments for the parameters of the system call to its [[Address Space#Stack Segment]]

**Step 4**(the start of [[Library Call]]): An [[Instruction]] is triggered to trigger the corresponding Library Call, the same instruction is used to trigger other library calls

**Step 5** Library Call puts **system call interrupt number** in a place where [[Kernel]] expects it, such as a [[Register]]

**Step 6:** Execute [[Trap Interrupt (陷入)]] to enter the [[Privilege Level#Kernel Mode]] and start execution at a **fixed address within the kernel**

**Step 7:** The **kernel codes** known as **dispatcher** following the trap interrupt examines **system call interrupt number**, dispatch the correct [[Interrupt Handler]] via [[Interrupt Vector Table]]

**Step 8:** The desired Interrupt Handler starts running

**Step 9:** After the interrupt handler finishes, control is returned to the library call at the Instruction following the Trap Interrupt (陷入)

**Step 10:** Then, library call returns, and we are back to the user program

**Step 11:** To finish the job, the process needs to remove the library call related data like the arguments we pushed to the stack segment from its stack segment by **incrementing** the [[Register#Stack Pointer]]


>[!important] System call & process management
> Control is passed back to the [[Kernel]] when a system call is made by the [[Process (进程)]]. Kernel uses this opportunity to perform its [[Process Scheduling]]. If the process hogs to the [[CPU]] and doesn't make any system call, we have [[CPU Scheduling Techniques#Preemptive Scheduling]] to handle this.

>[!tool] Program troubleshooting
> The system calls made by a process can be traced by [``strace``](https://stackoverflow.com/questions/65510246/can-a-system-call-happen-in-a-c-program).
> 
> I usually use `ltrace` to get a high-level overview ([[Library Call|library calls]]), then drill down using `strace` (system calls) for lower-level details.
> 
> `strace` allows us to either attach to an existing process using `-p <pid>`, or spin up a new process to trace from the start. We can use `-f` to follow child processes after a fork.
> 
> To filter specific syscalls, use `-e trace=` (e.g., `-e trace=file` or `-e trace=open,read,write`). For a summary/statistics view, use `-c`.

## System Call is ISA-dependent 
---

![[syscall_architecture_differences.png|500]]

- The actual mechanics of issuing a system call are highly [[Instruction Set Architecture (ISA)]] **dependent** and often must be expressed in [[Assembly language]]. For example, some ISA may expect the parameters be stored in [[Address Space#Stack Segment]] of the [[Kernel]], some ISA may expect the parameters be stored in [[Register]]


>[!success] Solution: abstraction!
> We have [[Abstraction#Abstraction Barrier]] built on top of these [[System Call (系统调用)]] in the form of [[Library Call]] that follows a standardised interface like [[POSIX]] by wrapping the [[Assembly language |Assembly Instruction]] of different ISAs. Specific ISA [[Instruction]] is generated during [[Compilation]] automatically.
> 
> This makes it possible for user programs like [[OS System Program]] to make system call that requests privileged services from the kernel **regardless of the underlying ISA** - user program is communicating with **library call** **directly** and communicating with **system call** **indirectly**!
> 
> [[Unix#Unix-like]] systems use [[Library Call#libc]] and Windows uses [ntdll.dll](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/libraries-and-headers).

>[!important]
>Program should always check the results of Library Call to see if an error has occurred.

## Linux System Call
---

![[system_calls.png|500]]

- Above is a standardised set of [[Library Call]] that wraps [[System Call (系统调用)]], almost **1-to-1**. Here is a [full list](https://man7.org/linux/man-pages/man2/syscalls.2.html)



## Windows System Call
---

![[windows_system_calls.png|500]]

- The list above shows the [[Library Call]] which is powered by Windows' [[System Call (系统调用)]]

## References
---
- [Modern OS - 1.6 System Calls](https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf)
