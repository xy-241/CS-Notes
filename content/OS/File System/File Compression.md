---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - bash
Creation Date: 2024-04-10, 21:38
Last Date: 2024-04-10T21:43:36+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Process of **reducing the size** of one or more files to save storage space

![[file_compresison.png]]

>[!code]- Compress files in different folders without  including the parent directories of the path
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