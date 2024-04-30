---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
Creation Date: 2023-10-02T18:04:26+08:00
Last Date: 2024-04-30T15:41:05+08:00
References: 
---
## Abstract
---

![[c_compilation.png|500]]

- Convert from C program to [[Instruction]], then execute it as a [[Process (进程)]]

## 5 Steps
---
### Stage 1
- [[Language Processors#Preprocessor]] generates expanded `.I` file
- Process [[#Pre-processor Directives]]
- Replace all the [[C Macro]] in the [[Header File]] & program files
- Would't complain about missing [[Header File]]
- ~~Remove spaces, new lines & comments~~
```bash
gcc -E hello_world.c
```


### Stage 2
- [[Language Processors#Compiler]] generates codes in [[Assembly language]] in `.s` format
- Returns error & warnings if the [[Header File]] isn't defined
```bash
gcc -S hello_world.c
```

### Stage 3
- [[Language Processors#Assembler]] generate [[Instruction]] in `.o` format
- Essential for code sharing and dynamic linking in software development.
```bash
gcc -c hello_world.c
```
### Stage 4
- **Linker** Link up with other [[Instruction]] which are dependencies of the program we wrote
- Sometimes we will break the program into many different `c` files, then run **compiler** on each, and link up all. This is for easier management & debugging 
- Output executable format or library file
- We can use `ldd` to show the dependencies 
- Will return error if unable to link up some of the required `.o` files
### Stage 5
- **Loader** loads the executable from [[Disk]] to [[Main Memory]] to create a [[Process (进程)]]


## References
---
- [C Language Source Code to EXE](https://youtu.be/gSackZtqlUI?si=FXfUYg19cdPkvyRr)
- [Modern OS - 1.8.3 Large Programming Projects](https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf#Large Programming Projects)