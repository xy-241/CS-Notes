---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
  - bash
Creation Date: 2024-03-11, 20:43
Last Date: 2024-05-24T01:11:28+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Also known as **Directory Hierarchy**
- Logical tree-like structure in which the [[File System]] organizes its [[File]] and directories

### Pathname
- Specify the location of [[File]] in the [[File System Hierarchy]]
### Root Directory
- The top of the [[File System Hierarchy]]
### File Directory
- A way of grouping [[File]] together

>[!important]
> File directory itself is also a type of **file**! The **size of the file directory** is decided by the **files and directories inside it**. For [[File System#APFS]], each file or directory will add $32$ [[Computer Data Representation#Byte]] to its parent directory. That is why **empty files** take up $0$ byte, all the **metadata of the empty files** is stored with its **parent directory**. 
> 
> However, be careful with directory, all **newly created directory** has **2 child directories**, `.` is to the **current directory** and `..` is to the **parent directory**. Thus, in APFS, all newly created directory has a size of $32 * 2 = 64$ bytes!

>[!tip]- Handy tips to create File Directory
> **`mkdir -p`**
> - Tells the `mkdir` command to create parent directories as needed 
> - If you omit this option and the parent directory doesn't exist, you'll get an error
> 
> **`mkdir -m`**
> - Used to set the mode (permissions) for the newly created directory
> - `mkdir -pm 0755 /etc/vault.d`

## Linux File System Hierarchy
---
 <img src="https://raw.githubusercontent.com/ByteByteGoHq/system-design-101/main/images/linux-file-systems.jpg" width="450">
 
- [Linux File System Hierarchy Explained - Bytebytego](https://youtu.be/bbmWOjuFmgA?si=zm32Pmn2I4Yum2hM)
   
**`/etc/profile.d`**
- Used for storing shell script files that are automatically sourced when a [[User|User]] logs into the system
- These scripts are used to set environment variables, customize the shell's behavior, and configure user-specific settings globally for all users
   
**`/src`**
- The name "srv" stands for "service" 
- Typically used to store data that is served by the system
- Often used to store data related to various services running on the system, such as websites, FTP servers, and other network services

**`/dev`**
- Store all the [[File#Special File]]

## Command Line Tools
---
### eza
- A modern, maintained replacement for ls
```bash
brew install eza
echo "alias ls='eza --icons'" >>~/.zshrc
echo "alias ll='eza -lhig --git --icons -a'" >>~/.zshrc
echo "alias tree='eza --tree --icons'" >>~/.zshrc
```

### zoxide
- A smarter cd command. Supports all major shells.
```bash
brew install zoxide
brew install fzf
# Append to .zshrc
# eval "$(zoxide init zsh --hook prompt)" 
# alias cd='z'
```
### joshuto
- ranger-like terminal file manager written in [[Rust]]
- [Config Instructions](https://github.com/kamiyaa/joshuto/tree/main/docs/configuration), [Image Preview](https://github.com/kamiyaa/joshuto/tree/main/docs/configuration)
```bash
brew install joshuto
# Alias to have joshuto to exit in the current directory it is in
alias joshuto='joshuto --change-directory --output-file $HOME/.joshutoExit; LASTDIR=`bat $HOME/.joshutoExit`; cd "$LASTDIR"'
```