---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-11-13T19:06:00
Last Date: 2023-12-13T18:05:48+08:00
References: 
---
## Abstract
---
- Allow data to flow between two [[Process]] in a *uni-directional* manner. One process writes to the pipe, and the other reads from it
- Sort of [[Pseudo-file]] that can be used to connect 2 [[Process]]
- Direct one [[Process]]'s output to another's input

## [[POSIX]] Pipe
---
### 3 default common channels
1. ``stdin``: [[File Descriptor]] is `0`
2. ``stdout``: [[File Descriptor]] is `1`
3. ``stderr``: [[File Descriptor]] is `2`