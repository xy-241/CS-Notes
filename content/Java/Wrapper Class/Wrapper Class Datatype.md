---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
Creation Date: 2023-08-25T19:10:57+08:00
Last Date: 2023-12-15T23:34:34+08:00
References: 
---
## Abstract
- [[Immutable]] - a new object is created when a new value is assigned
- Make [[Primitive Datatype]] to fit into the [[OOP]] concept
- Has built-in method to convert current value to other Primitive Datatype or [[Datatype]] 


## Value Comparison 
- We can't use `==` to compare [[OOP#OOP Object]], because `==` compares the value holding by the variable. However, variables are only holding the **memory pointers** to the OOP Object
- So if we want to compare the value of OOP Object, we need to use the `equals()` method


## Resource Demanding
- Comes with cost of allocating [[Address Space#Data Segment]] for OOP Object & [[Garbage Collector | collecting garbage]] afterward
- Less efficient than Primitive Datatype
![[wrapper_class_benchmarking.png]]



