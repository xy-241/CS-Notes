---
sthNew: true
Mastery Level:
  - 📘
Time Taken: 15
Space:
  - O(1)
Time: O(n)
Appears On:
  - Grind 75
Brush: 5
Difficulty:
  - Medium
Area:
  - prefix_sum
  - dynamic_programming
Reference 1: https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/medium/238.product-of-array-except-self
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-01-08, 12:52
Last Date: 2024-06-01T15:12:56+08:00
tags:
  - cp
draft: 
description: Leetcode 238. Product of Array Except Self, detailed solution with hand-crafted visuals
---

## Abstract
---
- [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) gives us an [[Array]], and we need to produce a new array with the same length, the elements inside the new array is the product of all the elements in the given array, excluding the element at the same index
- The solution must run in `O(n)`
- Can't use division operation
- The new array does not count as extra space for [[Algorithm Complexity Analysis#Worst Space Complexity]]
- We can make use of the idea presented in [[Prefix Sum (前缀和)]], **storing** the **intermediate product** to **avoid duplicated computation**. This allows us to obtain the answer in $O(n)$ time 

## Solution
---

![[product_of_array_except_self.svg|600]]

- We can make use of the idea presented in [[Prefix Sum (前缀和)]], **storing** the **intermediate product** to **avoid duplicated computation** as shown in the diagram above. This allows us to obtain the answer in $O(n)$ time 
- The element at a **particular index of the new array** is the **product** of **all elements at the left side** of that particular index and **all element at the right side** of that particular index. So we have **prefix product array** that keeps track of the **product of all elements at the left side** for all indexes, and **suffix product array** that keeps track of the **product of all elements at the right side** for all indexes. Then the answer is just the product of the **intermediate product** from **prefix product array** and **suffix product array**
- Below is the code implementation with Java based idea described above. From `prefix[i] = prefix[i - 1] * nums[i - 1]` and `suffix[i] = suffix[i + 1] * nums[i + 1]`, we can see we are making use of [[Dynamic Programming#Optimal Substructure (最优子结构)]] to avoid [[Dynamic Programming#Overlapping Subproblems (重复子问题)]]. We are able to use [[Dynamic Programming#Top-down DP Approach]] to create the **prefix product array** and **suffix product array**. `prefix[0] = 1` and `suffix[nums.length - 1] = 1` are the base case

```java
class Solution {
  public int[] productExceptSelf(int[] nums) {
    int[] prefix = new int[nums.length];
    int[] suffix = new int[nums.length];
    int[] res = new int[nums.length];

    prefix[0] = 1;
    suffix[nums.length - 1] = 1;

    for (int i = 1; i < nums.length; i++) {
      prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    for (int i = nums.length - 2; i >= 0; i--) {
      suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    for (int i = 0; i < nums.length; i++) {
      res[i] = prefix[i] * suffix[i];
    }

    return res;
  }
}
```

- We can further optimise the solution by replacing the **suffix product array** with **a variable** `suffix` as shown below. We are using `res` to produce the **prefix product array**, then compute the final answer array with the `suffix` variable, the **final product** at a **particular index** just needs the **suffix at that particular index**, **optimal substructure**

```java
class Solution {
  public int[] productExceptSelf(int[] nums) {
    int[] res = new int[nums.length];
    res[0] = 1;

    for (int i = 1; i < nums.length; i++) {
      res[i] = res[i - 1] * nums[i - 1];
    }

    int suffix = 1;
    for (int i = nums.length - 2; i >= 0; i--) {
      suffix *= nums[i + 1];
      res[i] = res[i] * suffix;
    }

    return res;
  }
}
```



## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- The output array isn't counted as stated by the question 
### Time - O(n)
- We need to loop through the elements of the given array 2 times
- 1 time to obtain the **prefix product array**, another time to calculate the suffix to obtain the final answer
 

## Personal Reflection
---
- **Why it takes so long to solve:** Didn't read the problem carefully and implementing [[Prefix Sum (前缀和)]] on products of elements
- **What you could have done better:** Sketch out the calculation process clearly on the paper
- **What you missed:** *NIL*
- **Ideas you've seen before:** Prefix Sum (前缀和)
- **Ideas you found here that could help you later:** Prefix Sum (前缀和)'s ability to provide the product of a range of elements in O(1)
- **Ideas that didn't work and why:** *NIL*