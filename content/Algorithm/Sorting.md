---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-01-03, 14:26
Last Date: 2024-03-10T17:05:32+08:00
References: 
draft: 
description: Trying to sort my life out.
---
## Abstract
---
- Basically re-arranging a collection of items or data elements in a specific order

>[!attention] Not all the $O(n^2)$ sorting algorithms are the same
> For example, [[#Bubble Sort]], [[#Selection Sort]] and [[#Insertion Sort]] have the $O(n^2)$ time complexity. But on sorted or almost sorted array, bubble sort and insertion sort have the $O(n)$ time complexity while selection sort has $O(n)$ time complexity.
> 
> Different algorithms have different inputs that they are good or bad on.
### In-Place
- Perform [[Sorting]] with constant [[Main Memory]] usage regardless the input size
- [[Algorithm Complexity Analysis#Worst Space Complexity]] - `O(1)`

### Stability of Sorting
- **Stable** if the keys with the same value stay in the same order after sorting
- **Unstable** if the keys with the same value doesn't stay in the same after sorting

>[!example]- Sorting algorithms that are stable
> **[[#Bubble Sort]]**
> - Only swap elements that are different
>
> **[[#Insertion Sort]]**
> - Be careful with the implementation! Only insert to a point where the element to be inserted is **strictly smaller** than the element at the insertion point


>[!example]- Sorting algorithms that are unstable
> **Bogo Sort**
> - Random [[Permutation]] may sway elements with the same value 
> 
> **[[#Selection Sort]]**
> - Imagine in iteration $j$, the element at position $j$ is $8$ and element at position $j+1$ is $8$ too. Then the smallest element in the range $[j, k]$ is $7$. We swap $7$ with the $8$ at position $j$. As you can see, the order of the 2 same value is changed. Thus, unstable

### Divide-and-Conquer Sorting
- **Divide**: split array into two halves
- **[[Recursion]] up**: sort the two halves
- **Combine**: merge the sorted halves

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
> - $O(n^2)$, because at each iteration, we can only find the current smallest element. Even if we are given a fully sorted array, we need to perform$n$ iterations, in order to have the confidence to say that the array is sorted 
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
![[merge_sort.png|500]]
- A [[#Divide-and-Conquer Sorting]]

