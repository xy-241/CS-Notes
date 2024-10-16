---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - linux
Creation Date: 2023-11-13T19:06:00
Last Date: 2024-10-16T22:52:55+08:00
References: 
---
## Abstract
---
- [[Linux Kernel]] features that provide isolation for system resources
- Wrap *certain global system resources* in an *abstraction layer*
- This makes it appear like the [[Process (进程)]] within a *namespace* have their own *isolated instance of the resource*
- The kernels namespace abstraction allows *different groups of processes* to have *different views of the system*
- currently seven distinct namespaces implemented: _mnt, pid, net, ipc, uts, user_ and _cgroup_


## Linux Network Namespace
---
- Virtualise the entire [[OSI Model|network stack]].
- It contains only one [[Loopback Network]]
- Destroying a network namespace destroys any virtual interfaces within it and moves any physical interfaces within it back to the initial network namespace

## Linux Cgroup Namespace
---
- `rlimit` limits resource usage such as CPU and memory of a collection of [[Process (进程)]]. This prevents a single [[Containerisation|container]] from monopolising system resources, ensuring fair resource distribution among all containers 

## API
---
- Consists of 3 main [[System Call (系统调用)]]
### Clone()



## References
---
- [Linux namespaces - Wikipedia](https://en.wikipedia.org/wiki/Linux_namespaces)