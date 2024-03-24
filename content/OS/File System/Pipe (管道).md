---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-13T19:06:00
Last Date: 2024-03-24T18:59:41+08:00
References: 
---
## Abstract
---
- Allow data to flow between two [[Process (进程)]] or among [[Thread]] in a single process in a **uni-directional** manner. One party writes to the pipe, and the other reads from it
- Sort of [[Pseudo-file]] that can be used to connect 2 Process
- Direct one's output to another's input

## 3 Default Pipe Channels
---
Under the [[POSIX]]
1. ``stdin``: [[File#File Descriptor]] is `0`
2. ``stdout``: File Descriptor is `1`
3. ``stderr``: File Descriptor is `2`