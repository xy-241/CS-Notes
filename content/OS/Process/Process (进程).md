---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
  - devops
Creation Date: 2023-10-19T17:12:00
Last Date: 2025-11-03T18:46:17+08:00
References:
description: Dive into the world of processes in operating systems!
---

## Abstract
---
- Container that holds all the information needed to run a program, [[Abstraction]] over running program
</br>

- 2 Components - [[Address Space]], [[Process Control Block (PCB)]], stored in [[Main Memory]]
- Process also has a [[Page Table]] that translates a given [[Memory Page]] to the [[Memory Address]] of [[Main Memory#Memory Frames]] that stores the actual data 

>[!important] Kernel not a process!
> [[OS System Program]] like the [[Init System]] and the shell are [[Process (进程)|processes]], but the kernel itself **isn't a process**!

>[!notes] Communication among processes
> Process **usually** don't share [[Main Memory#Memory Frames]] among themselves for isolation purposes. We need [[Inter-Process Communication]] for communication among processes.


>[!code] Process memory usage
> You can check the detailed breakdown of process memory usage but `cat /proc/<pid>/statm` on [[Linux Kernel]]. You refer to [ChatGPT](https://chat.openai.com/share/d12cb616-b835-42fd-a3f1-e585869ccde2) to make sense what the value represent.

>[!info]
> `VmSize` represents the size of [[Virtual Memory]] assigned to a process.
> 
> `VmRSS` represents the size of [[Main Memory#Memory Frames]] a process is currently using.

>[!tool] Debugging in Linux
> `gcore` lets you take a full snapshot of a running process’s memory so you can debug it later in gdb, while `gstack` is a quick way to inspect all thread stack traces on the spot to see what each thread is doing (blocked on a syscall, stuck on a lock, sleeping, etc). 
> 
> They rely on `ptrace`, so you’ll need proper permissions, matching namespaces, and relaxed kernel policies if you’re inside containers or hardened environments. In short, `gcore` is for deep post-mortem analysis, and `gstack` is for fast, live insight into why your program might look stuck.

### Core Image

- A  **suspended** [[Process (进程)]] consists of its [[Address Space]]

### Child Process

- Has the same [[User#UID|UID]] as its parent

### Process Resources
- [[Address Space]]
- [[Register]] (Include [[Register#Program Counter]] and [[Register#Stack Pointer]])
- A list of open [[File]]
- Outstanding [[Interrupts (中断)#Software Interrupt]]
- List of related processes
- [[Process Scheduling]] information etc

## Process State
---

![[5_state_process_model.png|500]]

- **Ready to Run**: could be running but [[CPU]] gave processing power to some other [[Process (进程)|processes]]
- **Block**: process is waiting for things like **I/O** to finish working (eg. waiting for file to be read)

### Queuing Model for State Transition

![[queuing_model_for_process_state_transition.png|500]]

- **Ready queue** to hold the [[Process (进程)|processes]] that are ready to run 
- Blocked queue to hold processes that are waiting for things like **I/O** to finish working (eg. waiting for file to be read)



## procs
---
- A `ps` replacement written in [[Rust]]

```bash
brew install procs # Installation 

# Alias to ps, and add in config file, add the following line to .zshrc
alias ps='sudo procs --load-config <path_to_your_config.toml>' # Refer to https://github.com/dalance/procs?tab=readme-ov-file#configuration for more info on the config.toml
```

>[!tool] OG `ps`
> Given `4327 ttys002    0:07.79 /opt/homebrew/bin/zsh -il`, it means: 
> 
> a `zsh` process is running on terminal session `ttys002` with a process ID of `4327`, accumulating a total CPU time of `0:07.79`, which translates to **0 minutes and 7.79 seconds**.