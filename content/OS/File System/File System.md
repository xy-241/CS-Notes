---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - linux
  - bash
Creation Date: 2023-07-26T17:21:48+08:00
Last Date: 2024-02-29T15:25:08+08:00
References: 
---
## Abstract
---
- Also known as **Directory Hierarchy**
- A method and [[Data Structure]] that the [[Kernel]] uses to control how data is stored and retrieved on a storage device 
- Provides a way to organise [[#File Directory]] into folders, and to keep track of which [[File]] are stored where on the device
- A File Directory where entries can be File or other File Directory




>[!info] Difference from [[Process Hierarchy]]
>- Can be very deep
>- May exist for years
>- Entries can be accessed by a wider group than just the owner

>[!tip]- List the filesystem of attached block device
> **[[Linux Kernel]]**
> ```bash
> lsblk --fs
> ```
> 
> **MacOS**
> ```bash
> diskutil list
> ```




>[!info]- Linux File System Hierarchy
> <img src="https://raw.githubusercontent.com/ByteByteGoHq/system-design-101/main/images/linux-file-systems.jpg" width="450">
> 
> - [Linux File System Hierarchy Explained - Bytebytego](https://youtu.be/bbmWOjuFmgA?si=zm32Pmn2I4Yum2hM)
>   
> **`/etc/profile.d`**
> -  Used for storing shell script files that are automatically sourced when a [[User|User]] logs into the system
> - These scripts are used to set environment variables, customize the shell's behavior, and configure user-specific settings globally for all users
>   
> **`/src`**
> - The name "srv" stands for "service" 
> - Typically used to store data that is served by the system
> - Often used to store data related to various services running on the system, such as websites, FTP servers, and other network services

### Mounted File System
- With ``mount`` [[System Call (系统调用)]], we are able to mount an isolated [[File System]] to another isolated File System

>[!caution] Always perform ``mount`` on empty file directory
>Otherwise, the [[File]] in the mounted Directory of the original File System can’t be accessed

>[!tip]- List mounted file system 
> **Linux**
> ```
> df -Th
> ```

## Common File Systems
---
### APFS (Apple File System)
- Created by Apple, used for macOS, iOS, iPadOS, tvOS, and watchOS
- We need to use [[FUSE]] to mount APFS on [[Linux Kernel]] 

### Ext4 (Extended Filesystem 4)
- The default choice on many Linux distributions. Mature, stable, and offers good all-around performance
- Commonly used in [[Linux Kernel]]

### ZFS (Zettabyte File System)
- Originally from Solaris, known for extreme scalability, data integrity protection, and comprehensive features (snapshots, compression, volumes). Can be resource-intensive
- Commonly used in [[Linux Kernel]]

### exFAT (Extended File Allocation Table) 
- Windows standard filesystem
- Designed as a successor to FAT32, specifically for flash drives and other external storage. Handles large files and better cross-compatibility than FAT32.



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
- ranger-like terminal file manager written in Rust
- [Config Instructions](https://github.com/kamiyaa/joshuto/tree/main/docs/configuration), [Image Preview](https://github.com/kamiyaa/joshuto/tree/main/docs/configuration)
```bash
brew install joshuto
# Alias to have joshuto to exit in the current directory it is in
alias joshuto='joshuto --change-directory --output-file $HOME/.joshutoExit; LASTDIR=`bat $HOME/.joshutoExit`; cd "$LASTDIR"'
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




## Terminologies 
---
### Pathname
- Specify the location of [[File]] in the [[File System]]
### Root Directory
- The top of the [[File System]]
### File Directory
- A way of grouping [[File]] together

>[!tip]- Handy tips to create File Directory
> **`mkdir -p`**
> - Tells the `mkdir` command to create parent directories as needed 
> - If you omit this option and the parent directory doesn't exist, you'll get an error
> 
> **`mkdir -m`**
> - Used to set the mode (permissions) for the newly created directory
> - `mkdir -pm 0755 /etc/vault.d`
