---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - go
Creation Date: 2024-03-04, 21:38
Last Date: 2025-03-16T17:55:16+08:00
References: 
draft: 
description: Go is a statically typed programming language with garbage collection that excels in building cloud services, DevOps tools, and high-performance network applications. It features built-in concurrency through goroutines, compiles to machine code for excellent performance, and powers major infrastructure tools like Terraform.
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

## Terrform 
---
- Terraform is built with [[Go]]
- Go's [[Goroutine]] efficiently handle parallel API calls, making it ideal for infrastructure tools