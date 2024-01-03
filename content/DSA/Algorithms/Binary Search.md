---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-06T14:45:06+08:00
Last Date: 2023-12-27T11:30:02+08:00
References: 
---
## Abstract
---
[[Algorithms]] used to find the index of a value in a given [[Array]] or [[Dynamic Array (List)]] that is *sorted* in `O(logn)`

## Handling the Left Right Boundaries
---
### Right Boundary Includes last Element (左闭右闭)
- The right boundary includes the index of the element at the most right hand side
- If the ``while`` exit when left equals to right, we will miss the an element

```java
// Assuming nums is an array

// Setting the right boundary [left, right]
int right = nums.length-1;

// The while loop
while (left<=right){...}

// The shrinking of the range
left = mid+1; // When target is bigger
right = mid-1; // When target is smaller
```
### Right Boundary Excludes last Element (左闭右开)
- Since the right boundary is exclusive, the ``while`` needs to exit when left equals to right, or we will have indexOutRange error 

```java
// Assuming nums is an array

// Setting the right boundary [left, right)
int right = nums.length; 

// The while loop
while (left<right){...}

// The shrinking of the range
left = mid+1; // When target is bigger
right = mid; // When target is smaller
```

## Tips
---
### Avoid Overflow 
- Intuitively we usually use `(right+left)/2`, but `right+left` is risky to [[Overflow]]
- Thus, it is recommended to use the code below to find the index of the mid value
```java
int mid = left + (right-left)/2;
```

### Elements with The Same Value
- We are unable to determine the index of the target value if the elements in the given array aren't unique 
- But we are still able to determine the first & last appearance of this particular value, see [First Bad Version](https://leetcode.com/problems/first-bad-version)


## Practice Question
---
- [704. Binary Search](https://leetcode.cn/problems/binary-search/)