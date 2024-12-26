---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
Creation Date: 2024-05-20, 22:45
Last Date: 2024-12-21T22:24:15+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Codes that are written in a way that makes it **simple**, **concise**, and **expressive**

>[!important]
> Clean code should minimise cognitive load as much as possible, that means it takes less effort for new joiners or ourselves to get a sense of the codes. 


## Never Nester
---
>[!quote]
> If you need more than **3 levels of indentation**, you're **screwed** anyway, and should **fix** your program - [Linux kernel style guidelines](https://www.kernel.org/doc/html/v4.10/process/coding-style.html)

- The idea to to avoid deep nesting in program, to make code more readable and easier to maintain
- There are two ways to avoid deep nesting - **extraction** & **Inversion**

**Extraction** 
- Extracts nested logic out and place it inside its own [[Function]]

**Inversion**
- Replace `if-else` with `return`



## References
---
- [Why You Shouldn't Nest Your Code - YouTube](https://www.youtube.com/watch?v=CFRhGnuXG-4)
- [Cognitive load is what matters](https://minds.md/zakirullin/cognitive#long)