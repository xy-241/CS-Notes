---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-08-16T23:11:00
Last Date: 2023-12-12T22:47:27+08:00
References: 
---
## Abstract
- [[Thread]] managed in the [[User Space]]


## Examples
### PThread (C)
- A [[Thread]] package under [[Portable Operating System Interface (POSIX)]]
![[pthread_example.png]]

>[!note] ``pthread_yield()``
>- The [[Library Calls (Library Procedure)]] for *thread* to give [[CPU]] to other *threads*
>- In [[Process]], we don't have this. Because [[Thread]] is in the same program, written by the same programmer, so they collaborate to get fulfil a particular feature

### Others
[Golang Goroutines](https://granulate.io/blog/deep-dive-into-golang-performance/)
