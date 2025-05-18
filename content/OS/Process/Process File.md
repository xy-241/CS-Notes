---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2025-05-18, 20:26
Last Date: 2025-05-18T21:14:58+08:00
References: 
draft: 
description: Understand how Linux exposes process details through the /proc virtual filesystem. Learn about key files like cmdline, environ, fd, maps, status, limits, and io, vital for performance monitoring, debugging latency, and analyzing resource usage in critical applications.
---
## Abstract
---
![[process_dir.png|500]]

- For [[Linux Kernel|Linux]], we can view the [[Process (进程)|process]] info in the form of [[File|file]] under `/proc/PID` in human-readable text format
- It allows us to view and modify parameters, automate with shell scripts
- We also feed these real-time system information to monitoring tools (like `htop`) without requiring special APIs

>[!important] Key files 
> - `cmdline`: Contains the command line arguments used to start the process
> - `environ`: Contains the environment variables for the process
> - `fd`: Directory containing [[File System Link#Soft (Symbolic) File System Link|symbolic links]] to files the process has open
> - `maps`: Memory mapping information, useful for debugging memory issues
> - `status`: General process status information (state, memory usage, etc.)
> - `limits`: Resource limits for the process
> - `io`: I/O statistics for the process
> 
> These files are useful for 
> - Performance monitoring and troubleshooting
> - Resource usage of critical trading applications
> - Debugging latency issues by examining process states

>[!success] Fast speed 
> `/proc` is memory-backed, so info retrieval is going to be very fast.

## References
---
- [The Linux Programming Interface, Chapter 2, Section 19](https://man7.org/tlpi/)