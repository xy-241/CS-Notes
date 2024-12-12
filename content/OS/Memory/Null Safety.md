---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
  - js
  - programming
Creation Date: 2024-01-08, 10:32
Last Date: 2024-12-12T14:59:51+08:00
References: 
draft: 
description: Null safety ensures graceful handling of non-existent resources by preventing runtime errors, such as segmentation faults, through compile-time error detection. Features like Optional datatypes and safe navigation (optional chaining) allow developers to explicitly manage null values, improving code reliability and quality.
title: "Ensuring Null Safety in Code: Strategies and Tools"
---
## Abstract
---
- Handles situations where we try to access non-existent resources **gracefully**
- For example, it prevents issues like [[Segmentation Fault]] by shifting error detection from runtime to compile-time


### `Optional` Datatype
- A special [[Datatype|datatype]] designed to achieve null safety
- The `Optional` datatype can either contain **a value or be empty**
- When a programmer writing his/her codes, the [[Language Processors#Compiler]] will only compile if he/she handles the `Optional` explicitly 
- This feature is supported only in languages that provide both [[Generics]] and [[Compilation]] capabilities

>[!example]
> - [[Java Optional]]

### Safe Navigation
- Also known as **Optional Chaining**
- Provides a safe way to interact with **potentially null or undefined values** at **runtime**. When a `null` or `undefined` is encountered, the program short-circuits and safely returns `undefined` instead of throwing an error.

>[!example]
> In **Node.js**, you can place a `?` (optional chaining operator) after a variable or property before accessing its value. If the variable or property is `null` or `undefined`, it will return `undefined` instead of causing the program to crash.

>[!tip]
> When writing code, programmers can use **Code Quality Assurance Tools** such as **Linters** to identify code patterns that might lead to unexpected `undefined` values and ensure better code quality.