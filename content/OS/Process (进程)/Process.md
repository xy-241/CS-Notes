---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2023-10-19T17:12:00
Last Date: 2024-01-12T16:19:17+08:00
References: 
---

## Abstract
---

- Container that holds all the information needed to run a program, [[Abstraction (抽象)]] over running program
</br>

- 2 Components - [[Address Space]], [[Process Control Block (PCB)]]
</br>

- [[Process]] **_usually_** don't share [[Main Memory]] among themselves for isolation purposes. We need [[Inter-Process Communication (IPC)]] for **inter-process communication** 

## Useful Commands
---
**`source`**
- Execute commands from a [[File]] in the current shell [[Process]]
- So all changes made by file, such as environment variables or directory changes, will persist in the current shell process

## Terminologies
---

### Core Image

- A _suspended_ [[Process]] consists of its [[Address Space]]

### Child Process

- Has the same [[OS/Terminologies/User#UID|UID]] as its parent
### Process State
1. Running
2. Ready to Run - Could be running but [[CPU]] gave processing power to some other [[Process]]
3. Block - [[Process]] is waiting for some other things like **I/O** to finish working (eg. waiting for file to be read)
### Process Resources
- [[Address Space]]
- [[Register]] (Include [[Control Unit#Program Counter]] and [[Register#Stack Pointer]])
- A list of [[Open Files]]
- Outstanding [[Alarm Signal]]
- List of related processes
- [[Process Management]] information etc