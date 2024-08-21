---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-08-21, 15:51
Last Date: 2024-08-21T16:02:48+08:00
References: 
draft: 
description: 
---
## Abstract
---
```c
typedef struct {
  int acctNum;
  float balance;
} account_t;
```

- C structures allow us to define custom [[Datatype|data types]], enabling us to group variables of different types under a single name
- This above code snippet defines a **structure type** named `account_t`

>[!code] Structure variables
> Structure variables have [[Main Memory|memory]] allocated to them. Using the code snippet above, we can create structure variables using `account_t a_1, a_2;` which creates two structure variables `a_1` and `a_2`.

>[!code] Initialising structure variables
> Using the code snippet above, we can initialise the structure variable with `account_t a_1 = {1, 955.9};`

>[!code] Accessing members of structure variables
> Using the code snippet above, we can access and modify the `balance` using `a_1.balance;`