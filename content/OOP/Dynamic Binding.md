---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
  - java
Creation Date: 2024-08-22, 20:48
Last Date: 2024-08-27T21:41:10+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Also known as **late binding**
- A concept in programming where the [[OOP Method|method]] to be invoked is determined [[Subtyping#Compile-time Type vs Run-time Type|at runtime rather than at compile-time]]. The actual method that is called is decided based on the runtime type of the object. This adds a layer of flexibility and adaptability to your code



>[!important]
> A key feature that enables [[Polymorphism|polymorphism]]. Polymorphism allows **objects of different classes** to be **treated as** objects of a **common super class**, particularly when it comes to method calls.

>[!example]
> In Java, every object inherits the `toString()` method from the [[Java#The Mother of All Classes|Object]] class. This method is used by `System.out.println()` to display the object's representation on the console. The implementation of `toString()` can vary depending on the object's [[Datatype|data type]]. At runtime, the specific implementation of `toString()` corresponding to the object's actual data type is called to determine how the object is represented in the console output.




## Java Dynamic Binding
---
- A 2-step process, below is an example, assuming we are calling the `equals()` method with `curr.equals(obj)`:

>[!important] Step 1 happens during compilation
> 1. Determine the compile-time type `C` of `curr`
> 2. Check the class `C` for all [[Access Modifier|accessible methods ]](maybe in [[Subtyping|superclass]]) named `equals()`. If there is none, then it is an compilation error.
> 3. Keep [[Method Overloading|only compatible methods]] that can accept compile-time type `T` of `obj`. If there is none, then it is a compilation error.
> 4. Choose the [[Method Overloading#Method Invocation|most specific method]] and record the [[Function#Function Signature|method descriptor]]. If there is none (or more than one), then it is an compilation error.

>[!important] Step 2 happens during runtime
> 1. Retrieve method descriptor from step 1
> 2. Determine run-time type $C$ of `curr`
> 3. Search for **accessible methods** with **matching method descriptor**(the return type can be a subtype) in $C$. If not found, continue searching up the class hierarchy
> 4. If still not found even in `Object`, the n it is an runtime error.

>[!note] My 2 cents on dynamic binding
> - I understand the concept of dynamic binding. It's a two-step process. The 'new' keyword is disregarded during compilation. The focus is on the specified datatype, then we check for accessible methods and ensure their compatibility with the provided parameter datatypes.
> - The part I'm still unclear about is the specific method related to overloading. My current understanding is that a more specific method is one that takes a narrower datatype, also known as the subtype.
> - Another challenging aspect of dynamic binding is the runtime datatype. This relies on the method descriptor stored during compilation, which is used to search for methods in the runtime datatype class and accept a return type that is a subtype.

>[!attention]
> Dynamic binding only works with regular methods, not with [[Java Keywords#static]] methods (those belonging to the class itself) and field access.