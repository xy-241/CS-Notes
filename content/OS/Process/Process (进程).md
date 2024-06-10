---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
Creation Date: 2023-10-19T17:12:00
Last Date: 2024-05-20T21:54:38+08:00
References: 
description: Dive into the world of processes in operating systems!
---

## Abstract
---
- Container that holds all the information needed to run a program, [[Abstraction]] over running program
</br>

- 2 Components - [[Address Space]], [[Process Control Block (PCB)]], stored in [[Main Memory]]
- Process also has a [[Page Table]] that translates a given [[Memory Page]] to the [[Memory Address]] of [[Main Memory#Memory Frames]] that stores the actual data 


>[!notes] Communication among processes
> Process **usually** don't share [[Main Memory#Memory Frames]] among themselves for isolation purposes. We need [[Inter-Process Communication (IPC)]] for communication among processes.


>[!code] Process memory usage
> You can check the detailed breakdown of process memory usage but `cat /proc/<pid>/statm` on [[Linux Kernel]]. You refer to [ChatGPT](https://chat.openai.com/share/d12cb616-b835-42fd-a3f1-e585869ccde2) to make sense what the value represent.

>[!info]
> `VmSize` represents the size of [[Virtual Memory]] assigned to a process.
> 
> `VmRSS` represents the size of [[Main Memory#Memory Frames]] a process is currently using.

## Useful CLI tool
---
## procs
- A `ps` replacement written in [[Rust]]

```bash
brew install procs # Installation 

# Alias to ps, and add in config file, add the following line to .zshrc
alias ps='sudo procs --load-config <path_to_your_config.toml>' # Refer to https://github.com/dalance/procs?tab=readme-ov-file#configuration for more info on the config.toml
```

## Terminologies
---

### Core Image

- A  **suspended** [[Process (进程)]] consists of its [[Address Space]]

### Child Process

- Has the same [[User#UID|UID]] as its parent
### Process State
1. Running
2. Ready to Run - Could be running but [[CPU]] gave processing power to some other [[Process (进程)]]
3. Block - Process is waiting for some other things like **I/O** to finish working (eg. waiting for file to be read)
### Process Resources
- [[Address Space]]
- [[Register]] (Include [[Register#Program Counter]] and [[Register#Stack Pointer]])
- A list of open [[File]]
- Outstanding [[Interrupts (中断)#Software Interrupt]]
- List of related processes
- [[Process Management]] information etc