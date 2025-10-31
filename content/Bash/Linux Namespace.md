---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - linux
Creation Date: 2023-11-13T19:06:00
Last Date: 2025-10-31T23:43:50+08:00
References:
---
## Abstract
---
- [[Linux Kernel]] features that control **visibility and isolation** (**what you can see**)
- Currently eight distinct namespaces implemented: _mnt, pid, net, ipc, uts, user_ and _cgroup_ (visibility of cgroup hierarchy) & _time_ 
- PID namespace → you only see your own processes
- Mount namespace → your own filesystem view
- Network namespace → your own interfaces / routes
- UTS namespace → your own hostname
- They create the _illusion_ of a separate system per container.

## Cgroups
---
- **Cgroup scope = how much you can use.**
- They enforce **resource limitations** on processes: CPU time, memory, disk I/O, network bandwidth, and number of processes (pids).
- This prevents a single process (or group of processes) from **hogging** system resources.
- When a cgroup hits its memory limit, the kernel can **OOM kill** processes **inside that cgroup**, instead of killing random system processes.
- The `pids` controller stops fork bombs by limiting how many child processes can be spawned.
- Without cgroups: a containerized application could **starve the entire node** (CPU hog, memory leak, I/O flood).
- **cgroup v2** is a more unified, simpler, and more accurate accounting system compared to v1.


## References
---
- [Linux namespaces - Wikipedia](https://en.wikipedia.org/wiki/Linux_namespaces)