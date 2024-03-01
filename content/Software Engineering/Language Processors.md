---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
  - c
Creation Date: 2023-12-16, 20:14
Last Date: 2024-03-01T14:09:53+08:00
References: 
---
## Abstract
---
- Tools that translates programming languages down the layers of [[Abstraction (抽象)#Programming Abstraction]]



## Compiler
---
- Translate Programming Language codes to [[Instruction]] or an intermediate code like [[Assembly language]] in [[C]] and **Bytecode** in [[Java]]

>[!info]- C Compilation
> **musl**
> - A lightweight C standard library (libc) designed for static linking. This produces smaller binaries that are more self-contained
>   
> **musleabi**
> - Targets systems using the standard ARM EABI (Embedded Application Binary Interface)
> 
> **musleabihf**
> - Targets systems using the ARM EABI with hard-float support (hardware-accelerated floating-point operations)

### Preprocessor
- Text substitution tool
- It instructs the [[#Compiler]] to do required pre-processing before the actual **compilation**

## Assembler
---
- Translates [[Assembly language]] to [[Instruction]]