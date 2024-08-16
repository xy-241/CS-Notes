---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
  - OOP
Creation Date: 2024-08-16, 11:57
Last Date: 2024-08-16T11:58:34+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Keywords that define the accessibility or scope of [[OOP#OOP Class|classes]], [[OOP Method|methods]], and field

## private
---
- When a field or [[OOP Method]] is declared as `private`, it can only be accessed within the [[OOP#OOP Class|class]] in which it is declared. Direct access from outside the class is not allowed. This helps with maintaining the [[Abstraction#Abstraction Barrier|abstraction barrier]]

>[!important]
> Objects of the same class **can access** each other's `private` fields and methods. Because the `private` access modifier restricts access at the **class level**, not the **object level**.