---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2023-10-22T23:19:44
Last Date: 2024-01-25T18:14:38+08:00
References: 
---

## Abstract

---

- Hide the nitty gritty of [[IO Device]], so users can focus on manipulating the content inside the IO Device
- Present programmer a clean [[Abstraction (抽象)]] of **device-independent** file
- Examples are Printers & Modems etc
</br>

- 2 parts - _Filename_ & [[Inode#Inode Number]], doesn't have any _metadata_ associated
### File Descriptor
- A small [[Integer (整数)]] associated with [[File]]
### File Permission
- In [[POSIX]], file permissions are handled by **rwx bits**

### File Compression
- Process of **reducing the size** of one or more files to save storage space

>[!hint]- Custom bash script to compress files in different folders without  including the parent directories of the path
>```bash
>#!/bin/bash
>set -eu
>set -o pipefail
>
># Check if a filename argument is provided
>if [ "$#" -eq 0 ]; then
>  echo "Usage: xyz <filename> <path1> [<path2> ...]"
>  exit 1
>fi
>
>filename=$1
>
># Create a temporary directory
>mkdir myTempZip
>
># Copy required files to the temporary directory
>for arg in "${@:2}"; do
>  cp -R "$arg" ./myTempZip
>  echo "$arg"
>done
>
># Navigate to the temporary directory
>cd myTempZip
>
># Zip the contents of the directory
>zip -r "$filename" *
>
># Move the zip file to the parent directory
>mv "$filename" ../
>
># Navigate back to the original directory
>cd ..
>
># Remove the temporary directory
>rm -rf myTempZip
>```

### Useful File Commands
- Generate a hexdump from a binary file and display the output
```bash
xxd <BINARY_NAME.bin>
```



## Terminologies

---
### Special File

- Make [[IO Device]] look like [[File]], so we can reuse the same set of file [[System Call (系统调用)]] on IO Devices
- By convention, kept in the `/dev` [[File System#Linux File System]]

**Block Special Files**
- Model [[IO Device]] that has a collection of *randomly addressable blocks* like like disk

**Character Special Files**
- Model [[IO Device]] that accept or output a *character stream* like keyboard

