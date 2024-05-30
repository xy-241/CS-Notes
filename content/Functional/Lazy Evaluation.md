---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - functional
  - java
Creation Date: 2024-05-11, 20:15
Last Date: 2024-05-13T22:00:58+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Lazy evaluation refers to **delaying the computation** of an [[Expression]] **until** its value is **actually needed**, and **avoid repeated computation** with the help of [[Memoization]]

## Lazy Evaluation with Java
---
- The code example below is around `showSystemInfo()` which prints out the system information like `CPU`, `RAM` & `SSD` if the `batteryLevel` is `>=20`. Otherwise, it should print out anything to console

**Without lazy evaluation**
- We have to retrieve the system information even when the `batteryLevel` is `<20`, this is **wasted computation** because we can't print out the system information when the `batteryLevel<20`!

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42cyvzwkv?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>
 

**With lazy evaluation**
- With the help of [[OOP#Functional Interface]] and [[Java Lambda]], we are able to treat the [[Function]] that handles system information retrieval as [[Function#First-class Citizen Function]], passing them into the `showSystemInfo` which decides if it needs to retrieve the system information depends on the `batteryLevel`. We **only retrieve** the system information when we **have enough battery**

>[!important]
> We can also make use of [[Memoization]] if the result of computation remains the same all the time.

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42cz22ssp?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>
 

