---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-10-04T17:30:24+08:00
Last Date: 2024-01-04T14:15:39+08:00
References: 
---
## Abstract
---
- A set of [[Computer Organisation/Instruction Set Architecture (ISA)/Instruction| instructions]] which contains [[Instruction#Opcode]] & parameters
- Aka the language the [[CPU]] speaks

## Benefit
---
### Portability
- Implementation of [[CPU]] is decoupled. The same Instruction Set Architecture (ISA) can be used on different [[CPU]]
- App written in X86 can be run on all the CPU that implements the X86 


## 2 Categories
---
### RISC
- Stands for *Reduced Instruction Set Computer*
- Simplified [[Instruction]] that can complete in one [[Clock Cycle]]
- Fewer possible Instruction
- Doesn't perform any [[Operation]] directly on [[Main Memory]]
>[!success] Easier to Decode
>Each [[Instruction]] is fixed-sized

>[!success] Power-Efficient
>- Needs fewer [[Transistors (晶体管)]]
>- Great efficiency when performing simple [[Operation]]

>[!attention] Tedious
>Complex [[Operation#Computation]] requires more [[Instruction]] to achieve 

>[!example]
>- ARM developed by Acorn Computer
>- [[MIPS]]

### CISC
- Stands for *Complex instruction set computer*
- Very Complex set of [[Instruction]]
- Can take multiple cycles to execute

>[!success] Simpler to use
>Has many [[Instruction]], to a point complex [[Operation#Computation]] can be performed with just one Instruction

>[!attention] Requires More [[Transistors (晶体管)]]
>- [[CPU]] design needs to be complex to achieve complex [[Operation#Computation]] with few Instruction
>- Less Transistors (晶体管) can be used improve overall computing performance 
>- Thus, more *power-hungry*, and wasted power when performing simple instruction

>[!attention] Harder to[[Pipeline Stages#Decode]]
>- Each [[Instruction]] is [[Instruction#Variable-length]]


>[!example]
>X86 developed by Intel


## 4 Types
---
### Accumulator ISA
![[accumulator isa.png|150]]
1. ``load A``: Load value from [[Main Memory]] into accumulator
2. ``add B``: Add value from [[Main Memory]] and value in the accumulator. The sum is stored back to the accumulator
3. ``store C``: Store value in accumulator into [[Main Memory]]

### Load-Store ISA
- Also known as *Register-Register ISA*
- The data is decoupled from the [[Register]] to [[Main Memory]]
![[register-register,load-store isa.png|150]]

- Can only load data at [[Computer Data Representation#Word]] boundaries
![[word_alignment.png]]


### Memory-Memory ISA
![[memory-memory isa.png|150]]

### Stack ISA
![[stack isa.png|150]]
1. ``push A``, ``push B``: We load values from [[Main Memory]] onto the [[Stack]]
2. ``add``: Remove the top 2 values in the [[Stack]], add them, and load the sum onto top of [[Stack]]
3. ``pop C``: Transfer value at top of [[Stack]] to [[Main Memory]]

## References
---
- [Instruction Set Architectures](https://youtu.be/1KTW32xSs_k)
