---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
  - c
  - computer_organisation
Creation Date: 2023-12-16, 20:14
Last Date: 2024-08-30T10:59:41+08:00
References: 
---
## Abstract
---
- Tools that translates programming languages down the layers of [[Abstraction#Programming Abstraction]]



## Compiler
---
- Translate Programming Language codes to [[Instruction]] or an intermediate code like [[Assembly language]] in [[C]] and **Bytecode** in [[Java]]
- 

### Variable Mapping
- [[Language Processors#Compiler|Compiler]] associates variables in program with [[Register]]


### Preprocessor
- Text substitution tool
- It instructs the [[#Compiler]] to do required pre-processing like [[Macro Expansion]] before the actual **compilation**

### Preprocessor Directives
- Instructions to tell the [[#Preprocessor]] what kind of library headers it needs to bring in header files, define constants, and create [[Macro Expansion]]

>[!example]
>Bring header files
>- `#include <stdio.h>`
>
> Define constants
> - `#define KMS_PER_MILE 1.609`

>[!question] `#include <stdio.h>` vs `#include "stdio.h"`
> `#include <stdio.h>` instructs the preprocessor to search for the header file `stdio.h` in the standard include directories, typically where system libraries reside. In contrast, `#include "stdio.h"` directs the preprocessor to search for the header file in the current directory first, and if not found, then in the standard include directories.

## Assembler
---
- Translates [[Assembly language]] to [[Instruction]]