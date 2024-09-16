---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
  - programming
  - oop
Creation Date: 2024-09-09, 17:43
Last Date: 2024-09-09T17:51:51+08:00
References: 
draft: 
description: 
---
## Abstract
---
- [[Generics|Generic type information]] is removed or "erased" at **runtime**. This means that while you can use types like `List<Integer>` or `List<String>` at compile-time, the actual type information about `Integer` or `String` is not preserved at runtime. At runtime, both `List<Integer>` and `List<String>` will be treated as `List` with the default type, which in Java is `Object`

>[!question] Then what is the point of generic type information?
> IIt is used by the compiler to perform type checking. The compiler will then generate code with proper type casting enforced.

