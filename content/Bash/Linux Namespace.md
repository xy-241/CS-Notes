---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - linux
Creation Date: 2023-11-13T19:06:00
Last Date: 2024-10-02T14:08:29+08:00
References: 
---
## Abstract
---
- Wrap *certain global system resources* in an *abstraction layer*
- This makes it appear like the [[Process (进程)]] within a *namespace* have their own *isolated instance of the resource*
- The kernels namespace abstraction allows *different groups of processes* to have *different views of the system*
- currently seven distinct namespaces implemented: _mnt, pid, net, ipc, uts, user_ and _cgroup_


## Linux Network Namespace
---
- Virtualise the entire [[OSI Model|network stack]].
- It contains only one [[Loopback Network]]
- Destroying a network namespace destroys any virtual interfaces within it and moves any physical interfaces within it back to the initial network namespace.

## API
---
- Consists of 3 main [[System Call (系统调用)]]
### Clone()



## References
---
- [Linux namespaces - Wikipedia](https://en.wikipedia.org/wiki/Linux_namespaces)