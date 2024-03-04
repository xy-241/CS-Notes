---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
  - java
Creation Date: 2023-07-24T17:43:00
Last Date: 2024-03-04T12:02:20+08:00
References: 
---
## Abstract
---
- [[Language Processors#Compiler]] or [[Interpreter]] automatically figure out the [[Datatype]] based on the context

>[!example] Java Example
> We can do `List<Integer> intList = new ArrayList<>()` instead of `List<Integer> intList = new ArrayList<Integer>()`, the Compiler is smart enough to figure out the Datatype for `ArrayList` based on the context provided by `List<Integer>`


>[!success] Reduce boilerplate code
> More concise & readable. However, **too much may reduce the readability**
