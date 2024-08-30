---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
Creation Date: 2023-07-23T17:47:10+08:00
Last Date: 2024-08-28T17:03:43+08:00
References: 
---
## Abstract
---
- Extending from existing [[OOP#OOP Class]], the child classes take up all the properties and methods of their parent classes, building up on existing [[Abstraction|abstraction]]

>[!important] Avoid Overusing Inheritance
> Inheritance should be used only when a **clear [[#"Is-a" Relationship|hierarchical relationship]]** and **shared behaviours** exist between the **parent (or base) class** and the **child (or derived) class**. 
> 
> Otherwise, consider using [[OOP#OOP Interface|interfaces]] and [[Encapsulation#"Has-a" Relationship|composition]] which are generally more flexible.

>[!important] Inheritance subtyping relationship
> If $S$ inherits from $T$, then $S :< T$. $S$ is a [[Subtyping|subtype]] of $T$.

>[!important] Multiple inheritance
> When a subclass is able to inherit from multiple super classes. This leads to [the diamond problem
> ](https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem).
> 
> [[Java]] avoid multiple inheritance uses [[OOP Method#OOP Abstract Method]]. This can be proved with [[Indirect Proof#Proof by Contradiction (矛盾证明法)]].
## "Is-a" Relationship
---
- "A subclass **is a** superclass", we mean that the subclass [[Inheritance|inherits]] from the superclass. This implies that the **subclass can be used wherever the superclass is expected**, adhering to the "is-a" relationship

>[!important] A less abstracted explanation
> Consider a superclass `Animal` and a subclass `Dog`. In this scenario, a `Dog` **is an** `Animal`. This means `Dog` inherits all the characteristics (methods and fields) of `Animal`. During compilation, a `Dog` object can be assigned the `Animal` data type and utilise methods defined in `Animal`, potentially with modifications through **method overriding** in the `Dog` class.
> 
> This concept promotes [[Polymorphism|polymorphism]], allowing `Dog` objects to be treated as instances of their superclass `Animal`.



