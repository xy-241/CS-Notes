---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
Creation Date: 2024-08-22, 20:48
Last Date: 2024-08-22T20:48:11+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Also known as **late binding**
- A concept in programming where the [[OOP Method|method]] to be invoked is determined [[#Compile-time Type vs Run-time Type|at runtime rather than at compile-time]]. The actual method that is called is decided based on the runtime type of the object



>[!important]
> A key feature that enables [[Polymorphism|polymorphism]]. Polymorphism allows **objects of different classes** to be **treated as** objects of a **common super class**, particularly when it comes to method calls.

>[!example]
> In Java, every object inherits the `toString()` method from the [[Java#The Mother of All Classes|Object]] class. This method is used by `System.out.println()` to display the object's representation on the console. The implementation of `toString()` can vary depending on the object's [[Datatype|data type]]. At runtime, the specific implementation of `toString()` corresponding to the object's actual data type is called to determine how the object is represented in the console output.