#OS 
>[!abstract] Determines what [[Instruction]] may be executed by [[CPU]]

>[!note] 3 modes
>1. [[Kernel Mode]]
>2. [[User Mode]]
>3. *Machine Mode*




## Example
### x86-64
- The privilege level can be read by CPU from a Registers called `cs`
### RISCV
- The privilege level of the current execution mode is stored in the `mstatus`, a [[Registers#Control & Status Registers (CSRs)]]
- Specifically, the *mstatus.MPP* (Mode Privilege Priority) field holds the current privilege level
- The mstatus.MPP field is a *2-bit field* that can have the following values:
	- `00`: User mode (U-mode)
	- `01`: Supervisor mode (S-mode)
	- `10`: Machine mode (M-mode)