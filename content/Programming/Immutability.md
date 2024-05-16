---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - rust
Creation Date: 2023-07-23T18:06:39+08:00
Last Date: 2024-05-16T19:16:57+08:00
References: 
---
## Abstract
---
- An object **cannot be changed** after being assigned a value

>[!success] Eliminating Side Effects
> The same set of input produces the same set of output, this helps in understanding & reasoning about code behaviour and most importantly eliminating [[Pure Function#Side Effect]].

>[!success] Concurrency
> Immutability provides a single source of truth which helps to avoid things like [[Race Condition (竞态条件)]] in [[Concurrency (并发)]].

>[!question] Then how to make changes to an object?
> If we want to update an object, we need to **create a new object with the changes**. Thus, this allows us to make changes and ensures we don't violet the immutability rule. However, this will incur more [[Main Memory]] usage!

## Rust Immutability
---
- In [[Rust]], variables are by default [[Immutability|immutable]]