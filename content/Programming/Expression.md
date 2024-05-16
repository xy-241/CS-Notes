---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - rust
Creation Date: 2024-01-13, 18:46
Last Date: 2024-05-16T19:14:05+08:00
References: 
draft: 
---
## Abstract
---
- Codes that **always returns a value** like `5+6` return s `11`. [[Function]] and [[Macro]] are also considered as expression
- Can be part of a [[Statement]] like `5+6` in `let a = 5+6`

>[!question] Evaluation vs Execution?
> **Evaluation** focuses on computing values like evaluating the expression, whereas **execution** focuses on performing actions and producing effects in the system like executing a [[Statement]] to print out a value to the screen or assign a value to a variable.

>[!important]
> This powers code optimisation techniques like [[Lazy Evaluation]] which delays the **execution of an expression** until we need it.

## Rust Expression
---
- `if` in [[Rust]] is an [[Expression]], so we can do the following `let number = if condition { 5 } else { 6 };`