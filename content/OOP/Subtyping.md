---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
Creation Date: 2023-07-24T17:56:06+08:00
Last Date: 2024-07-24T23:10:48+08:00
References: 
---
## Abstract
---
- A [[Datatype|data type]] $T$ is a **subtype** of a data type $S$ if a piece of **code written for** a variable of data type $S$ can also be **safely used** on a variable of data type $T$
- The relationship can be represented with $T <: S$, where $S$ is also known as the **super type** of $T$

>[!example] Java
> Subtyping among Java [[#Primitive Datatype]]
> - `byte` <: `short` <: `int` <: `long`
> - `long` <: `float` <: `double`
> - `char` <: `int`

>[!important]
> Subtyping is [[Relation#Reflexive]], $T <: T$
> 
> Subtyping is [[Relation#Transitive]], if $S <: T$ and $T <: U$, then $S <: U$

>[!important] OOP 
> It can be a type that inherits from a [[OOP#OOP Class]] or [[Interface]]. Less specific compared to [[Sub-class]]


### Compile-time Type vs Run-time Type
- We can assign a [[Subtyping|subtype]] **instance** to a [[Subtyping|supertype]] variable **during compilation**
- **At runtime**, we **can call all methods** with **matching [[Function#Function Signature|signatures]]** declared **in the supertype** on the subtype instance, **including those overridden in the subtype**

>[!important]
> The **runtime type** of an object is **always a subtype** of its **compile-time type**.