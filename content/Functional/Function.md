---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - rust
  - java
  - functional
Creation Date: 2023-07-21T15:28:12+08:00
Last Date: 2024-08-20T01:15:24+08:00
References: 
---
## Abstract
---
- **A set** of [[Instruction]] that can be triggered to **accomplish a particular task**

### Function Signature 
- Refers to the declaration of a function
- The signature is the combination of the **function's name**, **argument [[Datatype|types]]**, **argument order**, **argument count**, and **return type**

>[!important] Java function signature and function descriptor
> In [[Java]], the return type isn't part of the function signature. The method signature is the combination of the method name and the parameter list (argument types, argument order and argument count).
> 
> The **method descriptor** of Java is made of the **function signature** and the **return type**.

## First-class Citizen Function
---
- [[Function]] that can be manipulated and used in flexible ways **like a variable**. This is what powers [[#Higher-order Function]]

>[!important] Behave and treated like a variable
> 1. Assigned to variables
> 2. Passed as arguments to other functions
> 3. A function can be the return value of another function
> 4. Can store functions in data structures like [[Array]], [[List]], or [[Hash Map]] etc
>    
> This enables powerful programming techniques like [[#Higher-order Function]] and [[Closure]] etc.

>[!important]
> There isn’t first class citizen function in [[Java]], Java creates an **illusion** of it using [[Java Lambda]] & [[OOP#Functional Interface]].

## Higher-order Function
---
- A [[Function]] that takes in **another one or more functions** as **inputs** or **return a function** as its **output**

>[!important]
> Higher-order function builds on top of [[#First-class Citizen Function]], so we can **pass function into another function** or **return function from another function** as if function is a **variable**.
> 
> Higher-order function powers [[Closure]].

>[!code] Common higher-order functions
> `map()`: take in a function, and uses it to implement changes on a stream of values.
> 
> `filter()`: take in a function, and uses it to remove some values from a stream of values.
> 
> `reduce()`: takes in a function, and uses it to convert a stream of values into a single value.
## Rust Function
---
- For [[#Function Signature]], you **must** declare the [[Datatype]] of each parameter
- So [[Language Processors#Compiler]] almost never needs you to use the function elsewhere in the code to figure out what type you mean. The compiler is also able to give more helpful error messages if it knows what types the function expects.
</br>

- Return the last [[Expression]] implicitly


## References
---
- [The purest coding style, where bugs are near impossible - YouTube](https://www.youtube.com/watch?v=HlgG395PQWw&t=84s)