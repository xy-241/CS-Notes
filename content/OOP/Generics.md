---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
  - rust
  - java
  - python
Creation Date: 2023-07-24T17:49:41+08:00
Last Date: 2024-03-19T11:35:24+08:00
References: 
---
## Abstract
---
- Also known as **Parameterized Types** or **Generic Types**
- Allow [[OOP#OOP Class]] and functions to be written in a way that is independent of specific [[Datatype]]

>[!success] Code Re-usability
> We don't to duplicate the set of codes for each different Datatype.

>[!success] Type Safety
> The [[Language Processors#Compiler]] gets enough context to figure out [[Datatype]] mismatch issue during **compilation**

>[!attention]
> Generics don't work the same in all programming languages! See how the different languages implement generics below.
## Rust Generics
---
- The [[Language Processors#Compiler]] identifies each instance where you use that [[Generics]] and then generate source codes specific to that [[Datatype]]. Lastly, substitute the generic type with the generated type
![[rust_generics_memory.gif]]

>[!success] Simplicity with power
> The data is stored in the [[Virtual Memory]] exactly the way we expect it. And we can rip off the benefits of generics!

>[!caution] More resource demanding
> Compiler takes a longer time to generate all the source codes and the resulting compiled code base is bigger.

## Java Generics
---
- As shown below, instead creating an [[Array]] of values in [[Virtual Memory]], it is actually creating an array of [[Pointer]] pointing to [[Memory Address]] that has the actual data
![[java_generics_memory.gif]]


>[!caution] Bad for Caching
> As you can see for array, the data is actually scattered around the memory. And this means we are unable to take advantage of [[CPU Cache#Cache Locality]] and each element indexing takes [[Latency Number|10-100 times longer]]! This is why Java is slower than system languages! Look at all the jumping around for the [[Linked List]] below.
> 
> ![[java_generics_memory_linked_list.gif]]

## Python Generics
---
- Similar to the implementation of [[#Java Generics]]. The key difference is that the [[Array]] of [[Pointer]] in Python generics can point to objects of different [[Datatype]]. This explains why we can have flexibility to have different datatypes in the same array without affecting the ability to index! Because pointers are the same size, so we can perform indexing on the pointers, then obtain the value by perform [[Pointer#Pointer Dereference]] on the pointer
![[python_generics_memory.gif]]

>[!success] Flexibility 
> We can have different datatypes in the same array!

>[!caution]
> Similar downside mentioned in [[#Java Generics]] + no [[Datatype#Type Safety]].