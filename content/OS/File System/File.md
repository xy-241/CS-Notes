---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2023-10-22T23:19:44
Last Date: 2024-04-20T00:05:43+08:00
References: 
---

## Abstract

---
>[!quote]
> [[Linux Kernel]] is a **file based** but Windows is an **API based**.
> 
> This just means that in Linux, we can use the **same file [[System Call (系统调用)]]** on [[OS/IO/IO Device|IO Device]] like [[#Special File]] & [[Unix Domain Socket]] besides the regular files, where Windows has an **separate [Windowa API](https://youtu.be/AJVtFae1kWk?si=IA2sWrmKoNjIzBnO)** for those IO Devices.

- Hide the **nitty gritty** of IO Device, so users can focus on manipulating the content inside the IO Device
- Present programmer a clean [[Abstraction (抽象)]] of **device-independent** file
- Examples are Printers & Modems etc
</br>

- 2 parts - **Filename** & [[Inode#Inode Number]], doesn't have any _metadata_ associated

>[!code] Create a dummy file with a specified size
> This could be useful for testing the [[Bandwidth#Network Throughput]].
> 
> ```python
> def generate_dummy_file(file_path, size_gb):
>     with open(file_path, 'wb') as f:
>         f.write(b'\0' * (1024 * 1024 * 1024 * size_gb))
> 
> file_path = input("Enter the name for the dummy file: ") + '.bin'
> size_gb = int(input("Enter the size in GB: "))
> 
> generate_dummy_file(file_path, size_gb)
> print(f"Dummy file of size {size_gb}GB generated at '{file_path}'")
> ```

### File Descriptor
- A small [[Integer (整数)]] associated with [[File]]
### File Permission
- In [[POSIX]], file permissions are handled by **rwx bits**


## Special File
---

- An [[Linux Kernel]] concept - make [[IO Device]] look like [[File]], so we can reuse the same set of file [[System Call (系统调用)]] on IO Devices
- By convention, kept in the `/dev`

### Block Special Files
- Model [[IO Device]] that has a collection of **randomly addressable blocks** like like [[Flash Memory]]

### Character Special Files
- Model IO Device that accept or output a **character stream** like keyboard

## Line Break in File
---
- [[POSIX]] systems uses a single character called **Line Feed** `\n`
- While Windows uses **carriage return** and Line Feed, so 2 characters `\r\n`. This is because during typewriter times, you needed to mov the carriage to restart typing on the beginning of a line first, then turn the wheel to move the paper to change the line

>[!info] Hands-On!
>You can install `dos2unix` and `unix2dos` using [[Package Manager#Brew]] to play with line break.
>
> You can view the hidden line break character by downloading and configuring [[#bat]].

## Useful CLi Tools
---
### bat
- A cat clone with wings.
```bash
brew install bat && echo "alias cat='bat'" >>~/.zshrc
```

### dua
- Manage files fast, powered by rust!
```bash
brew install dua-cli

dua interactive
```

### xcp
- cp on tren!
```bash
cargo install xcp
# Alias to cp
alias cp="xcp"
```

### xxd
- Generate a hexdump from a binary file and display the output
```bash 
xxd <BINARY_NAME.bin>
```






