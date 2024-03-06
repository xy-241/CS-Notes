---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-06T14:45:06+08:00
Last Date: 2024-03-06T11:30:23+08:00
References: 
description: Simple yet Evil
---
## Abstract
---
- [[Algorithm]] that finds the **index of a value** in a **sorted** [[Array]] in `O(logn)`

>[!tip] Avoid Overflow
> Intuitively, we usually use `(right+left)/2` to find the mid point, but `right+left` is risky to [Integer Overflow](https://en.wikipedia.org/wiki/Integer_overflow).
> 
> We can avoid this by using `left + (right-left)/2`.
> 
> 
> 
> Proof: let left be $L$ and right be $R$, $\frac{L+R}{2} = \frac{(R-L) + 2L}{2} = \frac{1}{2} \times ((R-L) + 2L) = \frac{1}{2} \times (R-L) + L$

>[!tip] Array contains duplicate values
> We are unable to determine the **index of the target value** if the elements in the given array **aren't unique**. But we are still able to determine the **first & last appearance** of this particular value, see [First Bad Version](https://leetcode.com/problems/first-bad-version).

## Handling Boundaries
---
### Right Boundary Includes last Element (左闭右闭)
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
- The right boundary **includes** the index of an element of the array

>[!question] Why `left<=right` and not `left<right`
> For ``while (left<right){ ... }``, the loop exits when `left>=right`, we may potentially miss an element which may be the desired value. Since `right` points to an valid index of the array.
### Right Boundary Excludes last Element (左闭右开)
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
- The right boundary **excludes** the index of an element of the array

>[!question] Why `left<right` and not `left<=right`
> For ``while (left<=right){ ... }``, the loop exits when `left>right`, we will obtain a mid point that is `nums.length` when desired value is bigger than all of the values inside the array. And `array[nums.length]` will result in an `indexOutRange` error.