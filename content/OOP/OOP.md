---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
Creation Date: 2023-09-14T14:01:42+08:00
Last Date: 2024-05-02T20:08:52+08:00
References: 
---
## Abstract
---
- There are 4 core principles in OOP - [[Abstraction (抽象)]], [[Inheritance]], [[Polymorphism]] and [[Encapsulation]]



## OOP Class
---
- An [[Abstraction (抽象)]] over a group of similar items that share the same properties and actions

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

### OOP Abstract Method
- Methods declared **without a body**