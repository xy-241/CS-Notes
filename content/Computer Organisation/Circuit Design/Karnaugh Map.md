---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-07-22T17:35:21+08:00
Last Date: 2024-06-11T17:02:34+08:00
References: 
---
## Abstract
---
- Uses [[Gray Code]] as part of its implementation
- Works around [[#Karnaugh Map Group]]

>[!success] Save hardware cost
> We can remove [[Logic Gates]] that are **redundant** and **don't affect** the **truth values** of any rows in a truth table.


### Karnaugh Map Group
- We group the `1`s to show us some of the inputs don't matter. Thus, we can eliminate those inputs

>[!important] Karnaugh Map Goup requirements
> **Shape**: Rectangles/Square (No diagonals)
> 
> **Size**: Power of 2 & as large as possible
> 
> **Number**: Just enough (No redundant groups and cover all the 1s)
> 
> **Overlap**: ✔️
> 
> **Wrap around the table**: ✔️



