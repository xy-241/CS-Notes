---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-07-22T17:35:21+08:00
Last Date: 2023-12-25T19:54:27+08:00
References: 
---
## Abstract
---
- Uses [[Grey Code]] as part of its implementation
- Works around [[#Karnaugh Map Group]]


## Karnaugh Map Group
---
- We group the `1`s to show us some of the inputs don't matter. Thus, we can eliminate those inputs

### Karnaugh Map Goup Requirements
1. Shape: Rectangles/Square (No diagonals)
2. Size: Power of 2 & as large as possible
3. Number: Just enough (No redundant groups and cover all the 1s)
4. Can overlap 
5. Can wrap around the table


## Benefits
---
### Save Hardware Cost
- We can remove [[Logic Gates]] that are repeated & don't affect the truth values of all rows in a [[Truth Table]]