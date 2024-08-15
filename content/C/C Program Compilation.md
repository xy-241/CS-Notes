---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
Creation Date: 2023-10-02T18:04:26+08:00
Last Date: 2024-08-15T21:54:02+08:00
References: 
---
## Abstract
---

![[c_compilation.png|500]]

- Convert from C program to [[Instruction]], then execute it as a [[Process (进程)]]

>[!important]
> We usually use [`gcc`](https://gcc.gnu.org/) which stands for GNU Compiler Collection, a program that handles the [[C Program Compilation|5 steps program compilation]] for us.
> 
> `gcc -Wall program.c` tells the C compilers to give all possible warnings.

### Stage 1
```bash
gcc -E hello_world.c
```

- [[Language Processors#Preprocessor]] generates expanded `.I` file
- Process [[#Pre-processor Directives]]
- Replace all the [[Macro Expansion]] in the [[Header File]] & program files
- Would't complain about missing [[Header File]]
- Is done by a program called [`cpp`](https://en.wikipedia.org/wiki/C_preprocessor)
- ~~Remove spaces, new lines & comments~~



### Stage 2
```bash
gcc -S hello_world.c
```

- [[Language Processors#Compiler]] generates codes in [[Assembly language]] in `.s` format
- Returns error & warnings if the [[Header File]] isn't defined
- Is done by a program called [`cc1`](https://unix.stackexchange.com/questions/77779/relationship-between-cc1-and-gcc)


### Stage 3
```bash
gcc -c hello_world.c
```

- [[Language Processors#Assembler]] generate [[Instruction]] in `.o` format
- Essential for code sharing and dynamic linking in software development
- Is done by a program called `as`

### Stage 4
- **Linker** Link up with other [[Instruction]] which are dependencies of the program we wrote
- Sometimes we will break the program into many different `c` files, then run **compiler** on each, and link up all. This is for easier management & debugging 
- Output executable format or library file
- We can use `ldd` to show the dependencies 
- Will return error if unable to link up some of the required `.o` files
- Is done by a program called [`ld`](https://stackoverflow.com/questions/34117924/how-to-link-the-c-runtime-library-with-ld)
### Stage 5
- **Loader** loads the executable from [[Disk]] to [[Main Memory]] to create a [[Process (进程)]]. This part is handled by the [[OS]]


## References
---
- [C Language Source Code to EXE](https://youtu.be/gSackZtqlUI?si=FXfUYg19cdPkvyRr)
- [Modern OS - 1.8.3 Large Programming Projects](https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf#Large Programming Projects)