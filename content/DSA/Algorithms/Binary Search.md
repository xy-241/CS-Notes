---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-06T14:45:06+08:00
Last Date: 2023-08-06T14:45:06+08:00
References:
---
>[!caution] Avoid [[data types]] [[Overflow]] when finding the mid index
>```java
>int mid = left + (right-left)/2;
>```

>[!caution] We are unable to determine the index of the target value if the elements in the given array aren't unique (But we still able to determine the first & last appearance of this particular value, see [First Bad Version](https://leetcode.com/problems/first-bad-version))

>[!note] 2 ways to handle the left & right boundaries
>## 1. 左闭右闭 (The right boundary includes the last element)
>```java
>// Assuming nums is an array
>
>// Setting the right boundary [left, right]
>int right = nums.length-1;
>
>// The while loop
>while (left<=right){...}
>
>// The shrinking of the range
>left = mid+1; // When target is bigger
>right = mid-1; // When target is smaller
>```
>- Since the right boundary is inclusive, if the ``while`` exit when left equals to right, we will miss the an element
>## 2. 左闭右开 (The right boundary doesn't include the last element)
>```java
>// Assuming nums is an array
>
>// Setting the right boundary [left, right)
>int right = nums.length; 
>
>// The while loop
>while (left<right){...}
>
>// The shrinking of the range
>left = mid+1; // When target is bigger
>right = mid; // When target is smaller
>```
>- Since the right boundary is exclusive, the ``while`` needs to exit when left equals to right, or we will have indexOutRange error 


## Practice Question
---
>[!example] Practice Questions
>- [704. Binary Search](https://leetcode.cn/problems/binary-search/)