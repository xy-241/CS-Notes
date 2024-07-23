---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-07-22, 20:17
Last Date: 2024-07-23T20:37:52+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A $O(n)$ algorithm for [Finding the kth Smallest Element within an unsorted array](https://www.notion.so/xy241-dsa/215-Kth-Largest-Element-in-an-Array-18e968f86c4846c0b0a3fe25fedf8b75?pvs=4). It is closely related to [[Sorting#Quick Sort]], sharing the same idea but with a key difference: Quick Select only focuses **on one side of the partitioned array after each iteration**

>[!important] Quick Select's average time complexity is O(n)
> In the ideal case, after **each iteration**, Quick Select is able to **remove half of the elements** in the current array. Thus, the total number of elements it needs to process throughout the algorithm is $n + \frac{n}{2} + \frac{n}{4} + \dots + \frac{n}{n} = \sum_{i=0}^{\log_2 n} \frac{n}{2^i}$, which converges to $2n$ based on the [geometric series rule](https://en.wikipedia.org/wiki/1/2_%2B_1/4_%2B_1/8_%2B_1/16_%2B_%E2%8B%AF).
> 
> This is why picking a **good pivot point is critical**. If the chosen pivot consistently **falls at the middle point of the sorted array**, we can remove half of the elements after each iteration.

>[!question] Why Quick Select's worst case time complexity is O(n^2)?
> The worst-case scenario occurs when you **consistently choose the smallest or largest element as the pivot**. This leads to **unbalanced partitions**, where one subarray contains nearly all the elements while the other has very few. In this scenario, you end up making $n$ recursive calls, each taking $O(n)$ time for partitioning, resulting in a total time complexity of $O(n^2)$. **Quicksort also suffers from the same issue.**
> 
> **Choosing a pivot randomly** significantly reduces the probability of consistently picking bad pivots. However, if the array contains mostly the same value, Quick Select's time complexity will always be $O(n^2)$, as each iteration will **invariably result in an unbalanced partition**.


## Quick Select Implementation
---
- The implementation below is using [[Java]]

```java
public int quickSelect(int[] nums, int left, int right, int k) {
  // 1. Pivot Selection:
  //    - Choose a pivot index randomly within the current subarray (left to right).
  //    - This randomization helps avoid the worst-case O(n^2) scenario of 
  //      consistently picking bad pivots.
  Random rand = new Random();
  int pivotIdx = rand.nextInt(right - left + 1) + left;

  // 2. Partitioning:
  //    - Call the 'partition' function to rearrange elements around the pivot.
  //    - After partitioning, the pivot is placed at its final sorted position 
  //      (finalPivotIdx).
  //    - All elements smaller than the pivot are to its left.
  //    - All elements greater than the pivot are to its right.
  int finalPivotIdx = partition(nums, left, right, pivotIdx);

  // 3. Recursive Search:
  //    - Check if the final pivot index is the kth smallest element we're 
  //      looking for.
  //    - If it is, return the value at that index (nums[k]).
  if (finalPivotIdx == k) {
    return nums[k];
  } 
  //    - If the final pivot index is smaller than k, the kth smallest element 
  //      is in the right subarray. Recursively call 'quickSelect' on that subarray.
  else if (finalPivotIdx < k) {
    return quickSelect(nums, finalPivotIdx + 1, right, k);
  } 
  //    - If the final pivot index is larger than k, the kth smallest element 
  //      is in the left subarray. Recursively call 'quickSelect' on that subarray.
  else {
    return quickSelect(nums, left, finalPivotIdx - 1, k);
  }
}

// Partition Function
public int partition(int[] nums, int left, int right, int pivotIdx) {
  // 1. Pivot Value and Swap:
  //    - Store the value at the pivot index.
  //    - Swap the pivot element with the rightmost element (this is for 
  //      convenience).
  int pivotVal = nums[pivotIdx];
  swap(nums, pivotIdx, right);

  // 2. Rearranging Elements:
  //    - Initialize a pointer 'left' to keep track of the boundary between
  //      smaller and larger elements.
  //    - Iterate through the subarray (excluding the rightmost element).
  //    - If an element smaller than the pivot is found, swap it with the 
  //      element at 'left' and increment 'left'.
  for (int i = left; i < right; i++) {
    if (nums[i] < pivotVal) {
      swap(nums, left, i);
      left++;
    }
  }

  // 3. Final Swap:
  //    - After the loop, all elements smaller than the pivot are to the left 
  //      of 'left'.
  //    - Swap the pivot (currently at 'right') back to its final sorted 
  //      position ('left').
  swap(nums, left, right);

  // 4. Return Final Pivot Index:
  //    - Return the index where the pivot is now located. This is its final 
  //      sorted position.
  return left; 
}

// Swap Function (Helper)
public void swap(int[] arr, int i, int j) {
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
```