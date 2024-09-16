---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-08-21, 15:51
Last Date: 2024-08-30T14:52:50+08:00
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

>[!important] Dereferencing a pointer to a structure and accessing its attributes
> We need to make sure we use parentheses like `(*player_ptr).name`, because `.` has a higher [[C#C Operator Precedence|operator precedence]].
> 
> Or we can simply use `player_ptr->name` to achieve the same, this is a syntactic sugar.


## C Union
---
```c
union _union_name_ {
    _datatype member1_;
    _datatype member2_;
    ...
};
```

- The Union is a user-defined data type in C language that can contain elements of the different [[Datatype|data types]] just like [[C Structure|structure]]. But unlike structures, all the members in the C union are stored in the same [[Memory Address|memory location]]. Due to this, **only one member can store data at the given instance**

>[!question] What can we do with this?
> We can efficiently obtain the representation of the same element in different data type encodings.


## Enum
---
```c
enum Heat {
  LOW,
  MEDIUM,
  HIGH
}
```

- A C type that represents a group integer constants that can't be changed

>[!success] Benefits
> This improves code readability and prevents bugs.

## References
---
- [C Unions - GeeksforGeeks](https://www.geeksforgeeks.org/c-unions/)