---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-10-19T17:12:00
Last Date: 2024-03-29T19:24:20+08:00
References: 
description: Dive into the world of processes in operating systems!
---

## Abstract
---

- Container that holds all the information needed to run a program, [[Abstraction (抽象)]] over running program
</br>

- 2 Components - [[Address Space]], [[Process Control Block (PCB)]]
</br>

- Process **usually** don't share [[Main Memory]] among themselves for isolation purposes. We need [[Inter-Process Communication (IPC)]] for **inter-process communication** 

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

- A _suspended_ [[Process (进程)]] consists of its [[Address Space]]

### Child Process

- Has the same [[User#UID|UID]] as its parent
### Process State
1. Running
2. Ready to Run - Could be running but [[CPU]] gave processing power to some other [[Process (进程)]]
3. Block - Process is waiting for some other things like **I/O** to finish working (eg. waiting for file to be read)
### Process Resources
- The followings are examples of process resources
	- [[Address Space]]
	- [[Register]] (Include [[Control Unit#Program Counter]] and [[Register#Stack Pointer]])
	- A list of open [[File]]
	- Outstanding [[Interrupts (中断)#Software Interrupt]]
	- List of related processes
	- [[Process Management]] information etc