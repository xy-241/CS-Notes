#OS 
## Abstract
- A special procedure in [[Kernel Space]] that lets a program start a transition from [[User Mode]] to [[Kernel Mode]], jumping from the program’s code into [[OS]] code
- A way for program to request services from the [[Kernel]] via [[Signal (Software Interrupt)]]
- Can be traced by [``strace``](https://stackoverflow.com/questions/65510246/can-a-system-call-happen-in-a-c-program)
- Program should always check the results of [[System Call (系统调用)]] to see if an error occurred 


## Benefits
- Allow [[User Space]] program to use **computer hardware** to complete its job with [[OS]]'s security implementation to prevent programs from doing malicious stuff

## How a system call is triggered
![[system_call_triggering_process.png]]
1. Calling program pushes parameters of the system call to [[Stack (FILO)]] (Step 1-3)
2. Call to [[Library Calls (Library Procedure)]], same [[Instruction]] to call all procedures inside the [[Library Calls (Library Procedure)]] (Step 4, where the actual [[Library Calls (Library Procedure)]] is happening)
3. [[Library Calls (Library Procedure)]] puts [[System Call Number (Interrupt Number)]] in  a place where [[OS]] expects it, such as a [[Registers]] (Step 5)
4. Execute [[Trap Interrupt (陷入)]] (Step 6)
5. Kernel code examines [[System Call Number (Interrupt Number)]], dispatch the correct [[Interrupt Handler (Interrupt Service Routine, ISR)]] via [[Interrupt Vector Table (Interrupt Descriptor Table)]](Step 7)
6. The desired [[Interrupt Handler (Interrupt Service Routine, ISR)]] starts running (Step 8)
7. After [[Interrupt Handler (Interrupt Service Routine, ISR)]] finishes, control **maybe** returned to the [[User Space]] [[Library Calls (Library Procedure)]] at the [[Instruction]] following the [[Trap Interrupt (陷入)]] (Step 9)
>[!sidenote] Control MAYBE returned to user-space
>The [[System Call (系统调用)]] may block the caller (in this case [[Library Calls (Library Procedure)]]), preventing it from continuing
>>[!example] Keyboard read system call
>	>- When system call tries to read but nothing has been typed yet, the caller has to be blocked
8. Then, [[Procedure Calls]] returns to the user program  (Step 10)
9. To finish the job, the user program has to clean up the [[Stack (FILO)]] by incrementing the [[Stack Pointer]] exactly enough to remove the parameters pushed before the making the [[System Call (系统调用)]] (Step 11) ([[Stack (FILO)]] grows downwards, so to remove *Stack frame*, we increment the *Stack Pointer*)



## Highly [[CPU]] dependent
- [[Assembly language]] - implementation of system call, is differently across different [[Instruction Set Architecture (ISA)]]
![[syscall_architecture_differences.png]]
### Parameters of system call
- Some [[Instruction Set Architecture (ISA)]] may expect the parameters be stored in [[Stack (FILO)]]
- Some [[Instruction Set Architecture (ISA)]] may expect the parameters be stored in [[Registers]]
### [[Abstraction]] comes to rescue
- [[OS]] provide an abstraction layer on top of these [[Interrupts (中断)]] and [[Interrupt Handler (Interrupt Service Routine, ISR)]]
- Reusable higher-level library functions that wrap the necessary [[Assembly language | Assembly Instruction]] are provided by [libc](https://www.gnu.org/software/libc/) on Unix-like systems and part of a library called [ntdll.dll](https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/libraries-and-headers) on Window
- Specific [[Instruction Set Architecture (ISA)]] [[Instruction]] is generated automatically during [[Compilation]]




## Examples
### [Full List Docs for Linux System Calls](https://man7.org/linux/man-pages/man2/syscalls.2.html)
>![[system_calls.png]]
- [[System Call (系统调用)]] is tightly-coupled with [[Library Calls (Library Procedure)]], almost *1-to-1*

### Windows System Calls
>![[windows_system_calls.png]]
- [[System Call (系统调用)]] is decoupled from [[Library Calls (Library Procedure)]]
- We can change the [[System Call (系统调用)]], without worrying changing the behavior of [[Library Calls (Library Procedure)]]


## Terminologies
### Number (Interrupt Number)
- [[]]