---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-02T19:48:00
Last Date: 2024-06-12T17:58:58+08:00
References: 
---
## Abstract
---
- Mainly used to solve [[Array]] and [[Linked List]] related problems
- Reduce time complexity by one dimension, `O(n^2)` to `O(n)`

## Fast-Slow Pointers
---
- [[Two Pointers (双指针)]] move at a different speed in the same direction
- Can be used to [remove elements from array in-place](https://leetcode.cn/problems/remove-element/)
- Can be used to determine [if Linked List is a Circular Linked List](https://leetcode.cn/problems/linked-list-cycle-ii/) 
- Convert 1 nested for loop into 1 single for loop

>[!example] Leetcode Questions
>- [27. Remove Element](https://leetcode.cn/problems/remove-element/)
>- [19. Remove Nth Node From End of List](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)
>- [142. Linked List Cycle II](https://leetcode.cn/problems/linked-list-cycle-ii/)

## Left-Right Pointers
---
- [[Two Pointers (双指针)]] move in an opposite direction at the same or different speed
- Can be used to reverse a sorted array [[Sorting#In-Place]] like [Reverse String](https://leetcode.cn/problems/reverse-string/description/) and implementing [[Binary Search]]

```java
// Reverse a sorted array in-place

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
>- [125. Valid Palindrome](https://xy241-dsa.notion.site/Valid-Palindrome-c25674a8490a4db480f060dd38c64122?pvs=4)

## Two-Pointers Sliding Window
---
- Use [[Two Pointers (双指针)]]: **left pointer** and **right pointer** to represent a **window**
- Move **right pointer** to find a **valid window**, or an **invalid window**, depends on what the problem wants
- When a **valid window is found**, **move left pointer** to find a **[smaller window](https://xy241-dsa.notion.site/Minimum-Window-Substring-3fce4e294bf94cfa8f2ea13d53b38b05?pvs=4)** or **[new valid window](https://xy241-dsa.notion.site/Find-All-Anagrams-in-a-String-c293f0c9c80b47748019aa20711dac47?pvs=4)**, or **[desired answer in the valid window](https://xy241-dsa.notion.site/Find-All-Anagrams-in-a-String-c293f0c9c80b47748019aa20711dac47?pvs=4)**
- When the [window isn't valid anymore](https://xy241-dsa.notion.site/Longest-Repeating-Character-Replacement-deca9f39034a44709340029f5ab10f4b?pvs=4), **move the left pointer**


>[!tip] 
> The **operation** of **expanding** and **shrinking** the window is **usually the same**.

>[!question] 3 questions to ask
> 1. What should be inside the **two-pointers sliding window**?
> 2. When should we **increment** the **left pointer**?
> 3. When should we **increment** the **right pointer**?

>[!important] Keep track of the window
> We can use [[Hash Map]] to keep track the **element frequencies** in the window. 
> 
> This is needed when solving [Longest Repeating Character Replacement](https://xy241-dsa.notion.site/Longest-Repeating-Character-Replacement-deca9f39034a44709340029f5ab10f4b?pvs=4) problem, where we need the **highest element frequency** in a **sliding window** to ensure the **two-pointers sliding window** is valid while **expanding the window**. **Shrinking the window** when it **isn't valid** anymore.
> 
> This is needed when solving [Find All Anagrams in a String](https://xy241-dsa.notion.site/Find-All-Anagrams-in-a-String-c293f0c9c80b47748019aa20711dac47?pvs=4) problem, where we need to keep track **whether** the **elements** inside the **window** contain **all the characters** of the **given anagram**. If so, we can start **shrinking the window** to **find the anagram**.
> 
> This is needed when solving [Minimum Window Substring](https://xy241-dsa.notion.site/Minimum-Window-Substring-3fce4e294bf94cfa8f2ea13d53b38b05?pvs=4) problem, where we need to keep track **whether** the **elements** inside the **window** contain **all the characters** of the **given string**. If so, we can start **shrinking the window** to find the **smallest substring** that **contains all the characters**.

>[!example] More examples
> The sliding window technique can be used to find [Minimum Size Subarray](https://leetcode.cn/problems/minimum-size-subarray-sum/) with **sum** that **equals or exceeds** the **target value**, as well as the [find longest substring without repeating characters](https://xy241-dsa.notion.site/Longest-Substring-Without-Repeating-Characters-1d16b9fc5bac4918a82d59a3a72b667c)