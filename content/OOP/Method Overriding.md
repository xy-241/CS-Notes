---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
  - java
Creation Date: 2024-08-25, 15:53
Last Date: 2024-08-28T16:27:23+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Method overriding occurs when a **child class** provides its own implementation of a **method that already exists in its parent class**. The overriding method in the child class must have the same [[Function#Function Signature|function signature]] (in Java, this includes the return type and function signature) as the method it is overriding in the parent class

>[!important] Java method overriding
> In [[Java]], method overriding happens when a subclass defines an instance method with the same [[Function#Function Signature|method descriptor]] as superclass. The **return type can be different** if it is a [[Subtyping|subtype]] of the return type of the method in the parent class.
> 
> As a good practice, use [[#@Override]] to ensure method overriding is carried out.


>[!question] Why is this useful?
> Method overriding enables **different objects** to **respond to the same method call** in a way that's **specific to their type**, thus fulfilling the OOP principle of [[Polymorphism|polymorphism]].



## @Override
---
- A flag in [[Java]] that helps the [[Language Processors|compiler]] catch errors when [[Method Overriding|overriding methods]] by telling the compiler a [[OOP Method|method]] is intended to override another method

>[!important] Ensure proper method overriding
>  If a programmer intends to override a method from the parent class but **misspells** the **method name** or changes the [[Function#Function Signature|signature]], the compiler would normally **treat it as a new method in the child class**. 
>  
>  The `@Override` annotation prevents this by **explicitly signalling to the compiler** that the method should override an existing method in the parent class. If the method doesn't correctly override a parent class method, the compiler will generate an error.


>[!question] Can I not change anything in the method overriding?
> The method will still be considered a **valid override**. The `@Override` annotation simply indicates that a method is intended to override a method from the superclass, and it **doesn't enforce any specific change in behaviour**.


>[!question] What if the current class puts `@override` for a method that isn't inside the superclass?
> `@Override` annotation specifically indicates that the **method** is **meant to override a method from the superclass**. If no such method exists, it signals an error.



