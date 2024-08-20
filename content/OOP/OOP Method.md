---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
Creation Date: 2024-07-25, 23:18
Last Date: 2024-08-20T01:15:09+08:00
References: 
draft: 
description: 
---
## Abstract
---
- The functions we specify in the [[#OOP Class]]

### OOP Abstract Method
- Methods declared **without a body**

### Method Overloading
- Method overloading involves creating functions within the same [[OOP#OOP Class|class]], each having the **same name** but different [[Function#Function Signature|function signatures]]
- Method overloading can also occur when a **child class** defines a method with the **same name as a method in its parent class**, but with a different function signature

 >[!question] Why is this useful?
 >
 > This allows the class to provide **different implementations** for the **same conceptual operation** based on the input it receives, promoting [[Polymorphism]].



## Method Overriding
---
- Method Overriding occurs when a child [[#OOP Class|class]] creates a new version of a [[Function|function]] with the same [[Function#Function Signature|function signature]] as a function in its parent class

>[!question] Why is this useful?
> Method overriding enables **different objects** to **respond to the same method call** in a way that's **specific to their type**, thus fulfilling the OOP principle of [[Polymorphism|polymorphism]].

>[!important] Java method overriding
> In [[Java]], method overriding happens when a subclass defines an instance method with the same [[Function#Function Signature|method descriptor]] as superclass.
> 
> As a good practice, use [[#@Override]].

### @Override
- A flag in [[Java]] that helps the [[Language Processors|compiler]] catch errors when [[OOP Method#Method Overriding|overriding methods]] by telling the compiler a [[OOP Method|method]] is intended to override another method

>[!important] Ensure proper method overriding
>  If a programmer intends to override a method from the parent class but **misspells** the **method name** or changes the [[Function#Function Signature|signature]], the compiler would normally **treat it as a new method in the child class**. 
>  
>  The `@Override` annotation prevents this by **explicitly signalling to the compiler** that the method should override an existing method in the parent class. If the method doesn't correctly override a parent class method, the compiler will generate an error.


>[!question] Can I not change anything in the method overriding?
> The method will still be considered a **valid override**. The `@Override` annotation simply indicates that a method is intended to override a method from the superclass, and it **doesn't enforce any specific change in behaviour**.


>[!question] What if the current class puts `@override` for a method that isn't inside the superclass?
> `@Override` annotation specifically indicates that the **method** is **meant to override a method from the superclass**. If no such method exists, it signals an error.