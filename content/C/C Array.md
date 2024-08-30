---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
  - computer_organisation
Creation Date: 2024-08-21, 16:24
Last Date: 2024-08-29T22:18:03+08:00
References: 
draft: 
description: 
---
## Abstract
---
```c
#define N 10

int source[N] = {10, 20, 30, 40, 50}; // The rest of the elements are initialised to 0
int dest;

dest = source; // illegal!
```

- An array name is a **fixed** [[Pointer|pointer]]; it points to the first element of the array and thus **cannot be altered**, `source` is same as `&source[0]`. The code above attempts to alter `dest`, making it point elsewhere

>[!question] What if I want to make a copy to another array?
> Use a for-loop, `for (int i=0; i<N; i++) dest[i] = source[i];`.

>[!important]
> Using the code snippet example above, `source[2]` represents the value `30` itself, not a pointer or reference to the value `30`.