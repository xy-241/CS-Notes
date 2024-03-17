---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - go
Creation Date: 2024-03-04, 21:38
Last Date: 2024-03-17T17:02:57+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A [[Datatype#Statically Typed]] & [[Datatype#Strongly Typed]] programming language comes with [[Garbage Collector]] and [[Language Processors#Compiler]]
- excels in building cloud and devops related tools, and network intense backend with simplicity

>[!code] Installation
> ```
> brew install go
> ```
> 
> **Application installed by Go accessible from terminal**
> - Make sure the Go application path `$HOME/go/bin` is included in the `$PATH` environment variable

>[!info]- Go Package 
> A folder of Go files.

>[!info]- Go Module
> A collection of Go Package. A new Go project is a new Go module, created with `go mod init`.


## Go Slice
---
- Wrapper around [[Array]] to give a more general, powerful and convenient interface to sequences of data. It is basically [[Array#Dynamic Array]]