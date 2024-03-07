---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-08-06T14:45:06+08:00
Last Date: 2024-03-07T12:39:25+08:00
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

>[!bigbrain] Not just finding an element inside array
> We can use binary search in optimisation problems.
> 
> Assume we have a **monotonic function** `f(x)`. The output of `f(x)` is proportional to its input `x`. That means the bigger the value of `x`, the smaller the output of `f(x)` or the bigger the value of `x`, the bigger the output of `f(x)`. If we want to find the maximum/minimum value of `x` such that the output of `f(x)` is `>=` a constant value $a$, we can make use of binary search!
> 
> The $L$ is the smallest value for `x` and $R$ is biggest value for `x`, the value of `x` acts as the index, and the output of `f(x)` acts as the value at that particular index.
> 
> 
> **Beer Feast Problem** 🍻
> 
> We are having a beer feast for a group of guests. We have a total supply of 180 mugs of beers. Let `x` be the number of beers we provide to the guests. We have this magical function `f(x)` which calculates a consciousness score of the guests based on the number of beers we give. `x` is inversely proportional to the consciousness score, this means the more beer we give the less conscious guests get. 
> 
> We want to know what is the **maximum number of beers** we can give and the guests can still maintain **at least 50% consciousness**. `f(180)` returns 0% consciousness and `f(0)` returns 100% consciousness. 
> 
> We can make use of binary search to obtain the answer in $O(logn)$. The $L$ is 0 beer and $R$ is 180 beers. We record down the value of `mid` and $L = mid + 1$ when the `f(mid)` is above 50% consciousness and $R = mid -1$ when `f(mid)` is below 50% consciousness. When `f(mid)` gives 50%, the corresponding `mid` value is the the sweet spot for number of beers we can provide. If there isn't a sweet spot, the maximum value of all the `mid` values is the answer.
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