---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - design_principles
Creation Date: 2023-07-20T00:24:49+08:00
Last Date: 2023-07-20T00:24:49+08:00
References:
---

> [!failure] Not all [[IS-A relationships]] should be modeled with [[Inheritance]]
> ## Example: Square inherits from Rectangle
> - When we perform the **change width** operation on both objects -> Square will change its length, while Rectangle doesn't. 
> 	- When we perform **obtain length** operation. Square will return its changed length, while Rectangle returns unchanged length -> this violates [[OOP Compatibility]]


> [!success] Fix: use a common interface
> - Abstract the Square & Rectangle properties into an interface, implement the width & length in the each of the class -> so we aren't able to substitute object on the **obtain length**(Only available to the Reactangle object), thus ensuring [[OOP Compatibility]]

>[!success] Preventing [[Inheritance]] and [[Method Overriding]]
>- Make it easier to argue for the correctness of programs
>- We can make the  [[Class]] [[Final]] or the individual [[Methods]] [[Final]]
>- ``java.lang.Math`` & ``java.lang.String`` cannot be inherited

>[!success] Unit Testing
>- Test cases based on expected inputs and resulted outputs 
>- After substituting the parent [[Object]] with child [[Object]], we are expecting the unit test cases return the same output. Otherwise, [[Liskov Substitution Principle (LSP)]] is violated 
>- [Example](https://nus-cs2030s.github.io/2223-s2/16-lsp.html#lsp-through-the-lens-of-testing)

>[!success] Ensire [[Liskov Substitution Principle (LSP)]] during [[Compile Time]]
>- Use of [[Assert]]