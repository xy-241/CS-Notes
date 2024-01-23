---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - js
Creation Date: 2024-01-08, 10:32
Last Date: 2024-01-23T18:08:54+08:00
References: 
draft: 
---
## Abstract
---
- Handles situation when we try to access non-existent resources **gracefully**
- For example, handling [[Segmentation Fault]] by moving the error from runtime to compilation 
</br>


**`Optional` [[Datatype]]**
- A special Datatype that achieves Null Safety
- The `Optional` datatype contains either the data itself or `None`
- When a programmer writing his/her codes, the [[Language Processors#Compiler]] will only compile if he/she handles the `Optional` explicitly 
- This only works on languages that support both [[Generics]] and [[Compilation]]

**Safe Navigation**
- Also known as **Optional Chaining**
- Provides a safe way to interact with **potentially null values** during **runtime** - when a null is encountered, the program will short-circuit and return `undefined` early
</br>

- In [[Node.js]], we can place `?` after the variable before accessing the value of the variable. If the variable is null, it will return `undefined`, instead of crashing
- When programmer writing his/her codes, he/she can use [[Code Quality Assurance Tools#Linter]] to show codes that will lead to  `undefined`