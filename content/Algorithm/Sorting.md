---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-01-03, 14:26
Last Date: 2024-03-09T18:23:40+08:00
References: 
draft: 
---
## Abstract
---
- Basically re-arranging a collection of items or data elements in a specific order
### In-Place
- Perform [[Sorting]] with constant [[Main Memory]] usage regardless the input size
- [[Algorithm Complexity Analysis#Worst Space Complexity]] - `O(1)`


## Bubble Sort
---
- The idea here is that at each iteration $j$, we are are going to **'bubble up'** the biggest element in the range $[1, n+1-j]$ to the $n+1-j$ position. If no **'bubbling'** happens in that particular iteration, it means the array is fully sorted and it is safe to terminate the sorting early


>[!important] Loop Invariant
> At the end of iteration $j$, the **biggest** $j$ items are correctly sorted in the final $j$ positions of the array.
> 
> So for example, at the end of iteration 2, the biggest 2 items are correctly sorted in the final 2 positions of the array. 
> 
> So if we have $n$ items, we need to perform $n$ iterations to have the biggest $n$ items to be sorted correctly in the final $n$ positions of the array. Each iteration takes $O(n)$, and there are $n$ items we need to bubble to the right hand side. Thus, the [[Algorithm Complexity Analysis#Worst Time Complexity]] is $O(n^2)$ .

>[!note]- Time Complexity
> **Best-case**
> - $O(n)$, already sorted, only one iteration is needed 
>   
> **Average-case**
> - $O(n^2)$, assume inputs are chosen at random
> 
> **Worst-case**
> - $O(n^2)$, when we have $n$ elements in the given array and all of them aren't correctly sorted in their final positions of the array

## Selection Sort
---
- The idea here is that at each iteration $j$, we are are going to **select** the smallest element in the range $[j, n]$ of the [[Array]]. Then swap it with element at the $j$ position

>[!important] Loop Invariant
> At the end of iteration $j$, the **smallest** $j$ items are correctly sorted in the first $j$ positions of the array.

>[!note]- Time Complexity
> **Best-case**
> - $O(n^2)$, because at each iteration, we can only find the current smallest element. We need $n$ iteration have the confidence that the array is sorted even if we are given a fully sorted array
>   
> **Average-case**
> - $O(n^2)$, assume inputs are chosen at random
> 
> **Worst-case**
> - $O(n^2)$, when we have $n$ elements in the given array and all of them aren't correctly sorted in their final positions of the array

## Insertion Sort
---
- The idea here is that at each iteration $j$, we are are going to **insert** the element at the $j$ position to the prefix [[Array]] that is $j-1$ long, such that the new prefix array which is $j$ long remains sorted

>[!important] Loop Invariant
> At the end of iteration $j$, the first $j$ items in the array are **sorted order**.

>[!note]- Time Complexity
> **Best-case**
> - $O(n)$, already sorted, no insertion is needed, just one iteration is needed 
>   
> **Average-case**
> - $O(n^2)$, assume inputs are chosen at random
> 
> **Worst-case**
> - $O(n^2)$, when we have $n$ elements in the given array and all of them aren't correctly sorted in their final positions of the array


## Merge Sort
----

