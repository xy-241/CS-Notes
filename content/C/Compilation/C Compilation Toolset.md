#c 
## Abstract
- Convert from C to Machine Codes running as a [[Process]]

## 5 Steps
### 1) [[Preprocessor]]
- Generates expanded `.I` file
- Process [[#Pre-processor Directives]]
- Replace all the [[C Macro]] in the [[Header File]] & program files
- Would't complain about missing [[Header File]]
- ~~Remove spaces, new lines & comments~~
```bash
gcc -E hello_world.c
```


### 2) [[Compiler]]
- Generates codes in [[Assembly language]] in `.s` format
- Returns error & warnings if the [[Header File]] isn't defined
```bash
gcc -S hello_world.c
```

### 3) [[Assembler]]
- Generate [[Machine Codes]] in `.o` format
- Essential for code sharing and dynamic linking in software development.
- Some [[Compiler]] bundles this with [[#2) Compiler]]
```bash
gcc -c hello_world.c
```
### 4) [[Linker]]
- Link up with other [[Machine Codes]] which are dependencies of the program we wrote
- Sometimes we will break the program into many different `c` files, then run [[Compilation]] on each, and link up all. This is for easier management & debugging 
- Output executable format or library file
- We can use `ldd` to show the dependencies 
- Will return error if unable to link up some of the required `.o` files
### Loader
- Load the executable from [[Disk]] to [[Main Memory]] to a [[Process]]


## References
- [C Language Source Code to Exe](https://youtu.be/gSackZtqlUI?si=FXfUYg19cdPkvyRr)