---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
Creation Date: 2024-07-25, 23:18
Last Date: 2024-07-25T23:18:41+08:00
References: 
draft: 
description: 
---
## Abstract
---
- The functions we specify in the [[#OOP Class]]

### Method Overriding
- Method Overriding occurs when a child [[#OOP Class|class]] creates a new version of a [[Function|function]] with the same [[Function#Function Signature|function signature]] as a function in its parent class

>[!question] Why is this useful?
> Method overriding enables **different objects** to **respond to the same method call** in a way that's **specific to their type**, thus fulfilling the OOP principle of [[Polymorphism|polymorphism]].

### Method Overloading
- Method overloading involves creating functions within the same [[OOP#OOP Class|class]], each having the **same name** but different [[Function#Function Signature|function signatures]]
- Method overloading can also occur when a **child class** defines a method with the **same name as a method in its parent class**, but with a different function signature

 >[!question] Why is this useful?
 > This allows the class to provide **different implementations** for the **same conceptual operation** based on the input it receives, promoting [[Polymorphism]].


### OOP Abstract Method
- Methods declared **without a body**