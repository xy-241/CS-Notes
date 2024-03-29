---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-02T19:48:00
Last Date: 2024-01-03T14:57:09+08:00
References: 
---
## Abstract
---
- Mainly used to solve [[Array]], [[OOP|OOP]] & [[Linked List]] related problems
- Reduce time complexity by one dimension, `O(n^2)` to `O(n)`

## Fast-Slow Pointers
---
- [[Two Pointers (双指针）]] move at a different speed in the same direction
- Convert 1 nested for loop into 1 single for loop
- Can be used to [remove elements from array in-place](https://leetcode.cn/problems/remove-element/)
- Can be used to determine [if Linked List is a Circular Linked List](https://leetcode.cn/problems/linked-list-cycle-ii/) 

>[!example] Leetcode Questions
>- [27. Remove Element](https://leetcode.cn/problems/remove-element/)
>- [19. Remove Nth Node From End of List](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)
>- [142. Linked List Cycle II](https://leetcode.cn/problems/linked-list-cycle-ii/)

## Left-Right Pointers
---
- [[Two Pointers (双指针）]] move in an opposite direction at the same or different speed
- Can be used to reverse a sorted array [[Sorting#In-Place]] like [Reverse String](https://leetcode.cn/problems/reverse-string/description/)

```java
// Java

public void twoPointerSort(int left, int right, int[] arr) {
    int temp;
    while (left < right) {
        temp = arr[right];
        arr[right--] = arr[left];
        arr[left++] = temp;
    }
}
```

>[!example]  Leetcode Questions
>- [977. Squares of a Sorted Array](https://leetcode.cn/problems/squares-of-a-sorted-array/)
>- [15. 3Sum](https://leetcode.cn/problems/3sum/)
>- [18. 4Sum](https://leetcode.cn/problems/4sum/)
>- [344. Reverse String](https://leetcode.cn/problems/reverse-string/)
>- [541. Reverse String II](https://leetcode.cn/problems/reverse-string-ii/)

## Sliding Window
---
- [[Two Pointers (双指针）]] move in the same direction at the same or different speed
- Can be used to find [Minimum Size Subarray](https://leetcode.cn/problems/minimum-size-subarray-sum/) that the sum of the elements is equal or greater than the given target value
- 3 points to consider
	1. What should be inside the [[#Window]]?
	2. When should we increment the left pointer?
	3. When should we increment the right pointer?

>[!example] Leetcode Questions
>- [209. Minimum Size Subarray Sum](https://leetcode.cn/problems/minimum-size-subarray-sum/)

## Terminologies 
---
### Window
- The elements within the left and right pointers when we are performing [[#Sliding Window]]
- The operation of expanding and shrinking the window is usually the same