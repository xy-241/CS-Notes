---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
Creation Date: 2024-07-22, 02:15
Last Date: 2024-08-27T21:26:44+08:00
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
- On method: prevents [[Method Overriding]]
- On variable: makes it a constant (prevents modification after initialisation)

>[!attention] The following code can compile & run!
>```java
>final int x;
>if (true) {
>  x = 10;
} else x = 20;
>```
>
> It works because `final int x` isn't initialised yet, and the if/else statement ensures only one initialisation will take place.

## extends
---
- The `extends` keyword establishes an [[Inheritance#"Is-a" Relationship|"is-a" relationship]] from the subclass to the superclass, enabling [[Inheritance|inheritance]]

