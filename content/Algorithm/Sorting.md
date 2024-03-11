---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-01-03, 14:26
Last Date: 2024-03-11T20:07:26+08:00
References: 
draft: 
description: Trying to sort my life out.
---
## Abstract
---
- Basically re-arranging a collection of items or data elements in an ascending or descending order

>[!attention] Not all the $O(n^2)$ sorting algorithms are the same
> Different algorithms have different inputs that they are good or bad on.
> 
> For example, [[#Bubble Sort]], [[#Selection Sort]] and [[#Insertion Sort]] have the $O(n^2)$ time complexity. But on sorted or almost sorted array, bubble sort and insertion sort have the $O(n)$ time complexity while selection sort has $O(n^2)$ time complexity.
> 

### In-Place
- Perform [[Sorting]] with constant [[Main Memory]] usage regardless the input size
- [[Algorithm Complexity Analysis#Worst Space Complexity]] - `O(1)`

### Stability of Sorting
- **Stable** if the items with the same value stay in the same order after sorting
- **Unstable** if the items with the same value doesn't stay in the same after sorting

>[!example]- Sorting algorithms that are stable
> **[[#Bubble Sort]]**
> - Only swap elements that are different
>
> **[[#Insertion Sort]]**
> - Be careful with the implementation! Only insert to a point where the element to be inserted is **strictly smaller** than the element at the insertion point
> 
> [[#Merge Sort]]
> - Stable if 'merge' is carefully implemented. When merging 2 subarrays, the first half always comes first, the second half always comes second


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

>[!note]- Time Complexity
> **Best-case**
> - $O(nlogn)$, already sorted, a full divide-and-conquer process is needed to have the confidence to claim the array is sorted
>   
> **Average-case**
> - $O(nlogn)$, assume inputs are chosen at random
> 
> **Worst-case**
> - $O(nlogn)$, when we have $n$ elements in the given array and all of them aren't correctly sorted in their final positions of the array

>[!big]- Time Complexity Proof
> **Recursion Tree Approach**
> ![[mergeSort_time_complexity_with_recursion_tree.png|500]]
> 
> Merge at each level takes $O(n)$ and there will be $logn$ levels at the conquer stage where we perform the merging since we divide the array by half at each level. So the overall time complexity is $O(nlogn)$. $c$ in the diagram above indicate a constant value.
> 
> **Induction Approach**
> ![[mergeSort_time_complexity_with_induction.png|500]]
> 
> Guess the time complexity and verify it with the reoccurrence we obtained. 

>[!caution] Slow on small arrays!
> Merge sort has a space complexity of $O(n)$, we know allocation of different arrays are scattered in the [[Main Memory]]. When we need to work multiple arrays we sacrifice the performance gain from [[CPU Cache#Cache Locality]]. And the [[Recursion]] nature of the algorithm comes with extra overhead. Recursion is also less predicable, thus negative impact on [[Branch Prediction]].
> 
> When the array is small, such hardware level impact outweighs the performance gain from the better time complexity.

>[!caution] Slow on almost sorted array!
> Merge sort's performance is $O(nlogn)$ when the array is almost sorted, because it needs to perform the full divide-and-conquer process regardless how chaotic the given array is. While [[#Bubble Sort]] and [[#Insertion Sort]] have a time complexity of $O(n)$ only.