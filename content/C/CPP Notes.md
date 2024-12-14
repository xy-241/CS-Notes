---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - cpp
Creation Date: 2024-12-14, 20:50
Last Date: 2024-12-14T21:03:15+08:00
References: 
draft: 
description: 
---

## Scope Resolution Operator
---
- Represented by `::`, it is used to access **global variables** (when there is a conflict with local variables), **namespace members**, **nested classes**, and **static members** (though static members are just one common use case)

>[!question] How is it different from `.`?
> `.` is used to access non-static members of an **object** (instance) of a class.

>[!question] How is it different from Java's `::`?
> In **Java**, `::` is a **method reference operator** used for referencing methods or constructors in a more functional programming style.


## Type Inference
---
```cpp
auto variable_name = expression;
```

- The [[Language Processors#Compiler]] is able to figure out the [[Datatype]] of `expression` during compilation automatically