---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
  - computer_organisation
Creation Date: 2024-08-20, 22:43
Last Date: 2024-08-22T00:21:12+08:00
References: 
draft: 
description: 
---
## Abstract
---


### Function Prototype
- In [[C]], a function prototype consists of the **return type**, **name of the function**, and the **list of parameter [[Datatype|datatypes]]** (names of parameters are **optional**)

>[!important] Placement of function prototype
> It's good practice to put function prototypes at the top of the program, before the `main()` function. This informs the [[Language Processors#Compiler|compiler]] of the functions your program may use, along with their return types and parameter types.
>  
> Without function prototypes , you'll receive error or warning messages from the compiler like `implicit declaration of function`.

>[!important] Function definition
> [[#Function Definition|Function definitions]] should follow after the `main()` function. So `main()` stays at the top of the program which makes it easier to analyse.

>[!important]
> Without function prototype, C assumes the default(implicit) return type of the custom functions is `int`.
> 

>[!important]
> Always end the function prototype with `;`!


### Function Definition
- The actual code implementation of the the [[#Function Prototype]]