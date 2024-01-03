---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-20T11:15:17+08:00
Last Date: 2023-12-15T11:33:49+08:00
References: 
---
## Abstract
---
- Determines what [[Instruction]] may be executed by [[CPU]]

## 3 Modes
---
### Machine Mode
- Free to do anything on the computer

### Kernel Mode
- [[CPU]] is allowed to execute any supported [[Instruction]] and access any [[Main Memory]]
- [[Kernel]] & [[Device Controller#Device Driver]] run in this mode
### User Mode
- Only a subset of [[Instruction]] is allowed, I/O and [[Main Memory]] access are limited, and many [[CPU]] settings are locked
- Applications run in this mode


## Example
---
### x86-64
- The privilege level can be read by CPU from a Registers called `cs`
### RISCV
- The privilege level of the current execution mode is stored in the `mstatus`, a [[Register#Control & Status Registers (CSRs)]]
- Specifically, the *mstatus.MPP* (Mode Privilege Priority) field holds the current privilege level
- The mstatus.MPP field is a *2-bit field* that can have the following values:
	- `00`: User mode (U-mode)
	- `01`: Supervisor mode (S-mode)
	- `10`: Machine mode (M-mode)