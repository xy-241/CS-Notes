---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - functional
Creation Date: 2023-07-23T18:04:05+08:00
Last Date: 2024-05-16T19:21:41+08:00
References: 
---
## Abstract
---
- Function in programming **with constraints** to fit into the [[Mathematical Function]], builds on top of [Lambda calculus - Wikipedia](https://en.wikipedia.org/wiki/Lambda_calculus)


>[!info]+ Purity
> Also known as **deterministic**. The same input **always** produces the same output([[#Referential Transparency]]) **without affecting anything else**(no [[#Side Effect]]).

>[!question] What if my program needs side effect to work?
> For example, printing stuff to the screen is considered as side effect. We have [Monad (functional programming) - Wikipedia](https://en.wikipedia.org/wiki/Monad_(functional_programming)) to **introduce side effects** into the program and **ensures the purity**.

## Referential Transparency
---
- The output **only depends** on the input.

## Side Effect
---
- Can be heavily avoided with the help of [[Immutability]]

>[!example]
> Some side effects are listed below:
> 
> - **Print** to the screen
> - Write to [[File]]
> - **Throw exceptions**
> - Change variables outside of the function
> - Modify the values of the arguments