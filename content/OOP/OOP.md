---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
  - java
Creation Date: 2023-09-14T14:01:42+08:00
Last Date: 2024-08-28T17:15:43+08:00
References: 
---
# Abstract
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

### Abstract Class
```java
abstract class Shape {
  public abstract double getArea();
}
```

- A blueprint for other [[#OOP Class|classes]], thus can’t be used to create objects directly

>[!important] Properties 
> - Can be a subclass of other concrete class
> - Can have fields
> - Can have abstract methods (doesn't have an implementation). Subclasses must provide the implementation
> - Can have concrete methods
> - Not required to have abstract methods




## OOP Interface
---
- Defines a **set of [[OOP Method#OOP Abstract Method]]** that a [[#OOP Class]] must implement if it chooses to implement that interface. It doesn't provide any concrete implementations for these methods
- Focus on **what a class should do** rather than **how it should do it**

>[!important] Pure interface
> An interface should only contain abstract methods.

>[!code] Java interface
> All the methods inside are automatically [[Access Modifier|public]].


>[!important] Casting with Interfaces
> You can cast an object to an interface type, even if its class doesn't directly implement it. This is because a subclass **might implement the interface**.
> 
> If we create an instance with the interface as its [[Datatype|data type]], then we cast it to a data type that is not in a [[Subtyping|subtyping]] relationship, this may still work, but it is not recommended and can lead to runtime errors.

>[!important] Interface Inheritance
> Interfaces can also inherit from other interfaces.
> 
> In Java, an interface can extend zero or more interfaces.
### Functional Interface
- Also known as **Single Abstract Method(SAM)**
- [[OOP#OOP Interface]] that contains **only one** [[OOP#OOP Abstract Method]]
