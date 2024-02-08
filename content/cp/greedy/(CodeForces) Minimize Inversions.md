---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space: 
Time: 
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "900"
Area:
  - greedy
  - sorting
Reference 1: https://codeforces.com/blog/entry/125300#comment-1111892
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-02-08, 10:52
Last Date: 2024-02-08T11:03:30+08:00
tags:
  - cp
draft: "true"
description: CP Solution
---
[Original Problem](https://codeforces.com/contest/1918/problem/B)
## Approach
---
### Consensus
- Given 2 [[Permutation]], we can swap any 2 elements at a time, the catch is that, when we swap the 2 elements of the first permutation, we need to do the element swapping at the exact position for the second permutation
- The goal is to have the **minimal** [[Permutation#Permutation Inversion]] **sum** of the two permutations

### Idea
- Lets abstract the problem, let the 2 elements we want to swap in the first permutation be $a_i,a_j$, where $i,j$ are the position index, and $i<j$. Let the 2 elements we want to swap in the second permutation be $b_i,b_j$
</br>

- Lets think about when it makes sense to swap. It makes sense to

### Conclusion


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O()
- *Ignore input size & language dependent space*
- 
### Time - O()
- 
 

## Codes
---
### 1st Attempt (Java)
```java

```

## Personal Reflection
---
- **Why it takes so long to solve:** *NIL*
- **What you could have done better:** *NIL*
- **What you missed:** *NIL*
- **Ideas you've seen before:** *NIL*
- **Ideas you found here that could help you later:** *NIL*
- **Ideas that didn't work and why:** *NIL*