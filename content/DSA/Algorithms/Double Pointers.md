---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-02T19:48:00
Last Date: 2023-12-10T16:52:51+08:00
References: 
---
## Abstract
---
- Mainly used to solve [[Array]], [[Terminologies/String/String|String]] & [[Linked List]] related problems. Reduce time complexity by one dimension, `O(n^2)` to `O(n)`

## 3 Types
---
### Fast, Slow
>[!tip] Reduce 2 nested for loops into 1 single for loop

- Can be used to [remove elements from array in-place](https://leetcode.cn/problems/remove-element/)
- Can be used to determine [if Linked List is a Circular Linked List](https://leetcode.cn/problems/linked-list-cycle-ii/) 
>[!example] Practice Questions
>- [27. Remove Element](https://leetcode.cn/problems/remove-element/)
>- [19. Remove Nth Node From End of List](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)
>- [142. Linked List Cycle II](https://leetcode.cn/problems/linked-list-cycle-ii/)
### Left, Right
- Can be used to [Reverse String](https://leetcode.cn/problems/reverse-string/description/) in `O(n)` time & `O(1)` space 
- Can be used to **reverse a sorted [[Array]]** in `O(n)` time & `O(1)` space  by using 2 pointers to compare at the 2 ends & shrink
>[!example]  Practice Questions
>- [977. Squares of a Sorted Array](https://leetcode.cn/problems/squares-of-a-sorted-array/)
>- [15. 3Sum](https://leetcode.cn/problems/3sum/)
>- [18. 4Sum](https://leetcode.cn/problems/4sum/)
>- [344. Reverse String](https://leetcode.cn/problems/reverse-string/)
>- [541. Reverse String II](https://leetcode.cn/problems/reverse-string-ii/)
### Sliding Window
- Used to find [Minimum Size Subarray](https://leetcode.cn/problems/minimum-size-subarray-sum/) that the sum of the elements is equal or greater than the given target value
>[!tip] 3 Points
>1. What should be inside the [[#Window]]?
>2. When should we increment the left pointer?
>3. When should we increment the right pointer?

>[!example] Practice Questions
>[209. Minimum Size Subarray Sum](https://leetcode.cn/problems/minimum-size-subarray-sum/)

## Terminologies 
---
### Window
- The elements within the left and right pointers, when we are performing [[#Sliding Window]]
- The operation of expanding and shrinking the window is usually same