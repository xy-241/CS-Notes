---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - functional
Creation Date: 2023-07-23T18:04:05+08:00
Last Date: 2024-05-12T18:39:42+08:00
References: 
---
## Abstract
---
- Function in programming **with constraints** to fit into the [[Mathematical Function]], builds on top of [Lambda calculus - Wikipedia](https://en.wikipedia.org/wiki/Lambda_calculus)


>[!info]+ Purity
> Also known as **deterministic**. The same input **always** produces the same output.

>[!important]
> Don't have any [[#Side Effect]].
## Referential Transparency
---
- The output **depends only** on the input.

## Side Effect
---
- Can be heavily avoided with the help of [[Immutability]]
- 
>[!example]
> Some side effects are listed below:
> 
> - **Print** to the screen
> - Write to [[File]]
> - **Throw exceptions**
> - Change variables outside of the function
> - Modify the values of the arguments