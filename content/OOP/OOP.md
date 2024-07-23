---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
Creation Date: 2023-09-14T14:01:42+08:00
Last Date: 2024-07-23T16:36:52+08:00
References: 
---
## Abstract
---

![[oop_4_pillars.png|500]]

- There are 4 core pillars  in OOP - [[Abstraction]], [[Inheritance]], [[Polymorphism]] and [[Encapsulation]]



## OOP Class
---
- An [[Abstraction]] over a group of similar items that share the **same properties** and **actions**

### Inner Class
- An [[#OOP Class]] inside an OOP Class

### Anonymous Inner Class
- A [[#Inner Class]] without a name

>[!important]
> Anonymous classes are useful when you **need to create a class** that implements an [[#OOP Interface]] or **extends a class**, but you **don't need to reuse the class** elsewhere in your code.


### OOP Object
- An actual instance of [[#OOP Class]] that occupies some space in the [[Address Space#Heap Segment]]
- The variable holds a **memory pointer** to the OOP Object, not the values inside the OOP Object




## OOP Interface
---
- Defines a **set of [[#OOP Abstract Method]]** that a [[#OOP Class]] must implement if it chooses to implement that interface. It doesn't provide any concrete implementations for these methods
- Focus on **what a class should do** rather than **how it should do it**

### Functional Interface
- Also known as **Single Abstract Method(SAM)**
- [[OOP#OOP Interface]] that contains **only one** [[OOP#OOP Abstract Method]]

## OOP Method
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