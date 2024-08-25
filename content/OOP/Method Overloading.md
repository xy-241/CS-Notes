---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
  - java
Creation Date: 2024-08-25, 14:50
Last Date: 2024-08-25T19:24:41+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Method overloading happens when multiple methods **in the same class (or inherited from a parent class)** that share the **same name but have different parameters** (different [[Function#Function Signature|function signature]]). You create an overloaded method by changing the **types, order, or number of parameters** the method takes, while **keeping the method name the same**

 >[!question] Why is this useful?
 >
 > This allows the class to provide **different implementations** for the **same conceptual operation** based on the input it receives, **promoting** [[Polymorphism]]. 
 > 
 > However, **method overloading is not considered a form of polymorphism**. Polymorphism involves providing different implementations to an existing [[Function#Function Signature|method descriptor]] defined in a parent class or interface!

>[!important] *Not* about changing the names of the parameters
> Overloading is about changing the **order, number, or types of parameters**.

>[!code] Method overriding in Java
> You can even overload [[Java Constructor]]!
> 
> You can also overload [[Java Keywords#static|static methods]] the same way you overload instance methods!

## Method Invocation
---
- [[Java]] favours the **"more specific"** method when there are [[Method Overloading|multiple methods with the same name]]

>[!question] What is more specific?
> A method is "more specific" if it accepts a **narrower range of objects** compared to another method with the same name.
> 
> For example, `equals(Circle)` is more specific than `equals(Object)` because it only accepts `Circle` objects, while `equals(Object)` accepts any object.