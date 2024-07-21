---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
Creation Date: 2024-07-22, 02:15
Last Date: 2024-07-22T02:16:57+08:00
References: 
draft: 
description: 
---
## static
---
- Fields and methods declared with the `static` keyword **belong to the class** itself rather than to instances of the class. This allows us to **use** these class members **without creating** an **object of the class**. Static fields and methods are initialised and stored in the **method area** (part of the [[Address Space#Heap Segment|heap]]) during the **class-loading phase**, which **occurs before** the **main program execution** begins

>[!error] A non-static variable or method cannot be referenced from a static context
> When a static context is established (e.g., within a static method), it **has no associated object instance**. Therefore, it cannot access non-static members, as they **don't yet exist** or **may not exist at all**. Attempting to reference a non-static member in a static context typically **results in a compilation error**.
> 
> In essence, trying to call a non-static variable or method from a static context is like **trying to use something that hasn't been built yet**.

## final
---
- On [[OOP#OOP Class]]: prevents [[Inheritance]]
- On method: prevents overriding
- On variable: makes it a constant (prevents modification after initialisation)

## extends
---
- The `extends` keyword establishes an [[Inheritance#"Is-a" Relationship|"is-a" relationship]] from the subclass to the superclass, enabling [[Inheritance|inheritance]]

## @Override
---
- A flag that helps the [[Language Processors|compiler]] catch errors when **overriding methods**

>[!example]
>  If a programmer intends to override a method from the parent class but **misspells** the **method name** or changes the [[Function#Function Signature|signature]], the compiler would normally **treat it as a new method in the child class**. 
>  
>  The `@Override` annotation prevents this by **explicitly signalling to the compiler** that the method should override an existing method in the parent class. If the method doesn't correctly override a parent class method, the compiler will generate an error.