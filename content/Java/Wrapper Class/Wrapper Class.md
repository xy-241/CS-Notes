---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
Creation Date: 2023-08-25T19:10:57+08:00
Last Date: 2024-09-05T20:16:25+08:00
References: 
---
## Abstract
---
- Make [[Datatype#Primitive Datatype]] to be in a subtyping relationship with the object class to fit into the [[OOP]] concept
- Has built-in method to convert current value to other Primitive Datatype or custom datatypes primitive, known as [[Boxing]]

>[!important]
> [[Datatype#Custom Datatype|Custom datatype]] objects are [[Immutability|immutable]] (a new object is created when a new value is assigned).

>[!caution] Resource Demanding
> ![[wrapper_class_benchmarking.png|500]]
> Comes with cost of allocating [[Address Space#Heap Segment]] for OOP Object & [[Garbage Collector | collecting garbage]] afterward. Thus, less efficient than Primitive Datatype

>[!important] `Double d = 4` results in compilation error
> `int cannot be converted to Double`, but `double d = 4` works because it is a [[Type Casting#Widening Type Conversion]]. 
> 
> `Double d = 4.0` also works because it is [[Boxing#Auto-boxing]]. 
> 
> `Object o = 4;` works because `4` will be first auto-boxed to an `Integer`, and `Integer` is a [[Subtyping|subtype]] of `Object`. 

