---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-06-04, 15:46
Last Date: 2024-06-04T16:13:06+08:00
References: 
draft: 
description: Binary Search in Rotated Sorted Array, detailed solution with hand-crafted visuals for Leetcode Search in Rotated Sorted Array.
---
## Abstract
---

![[rotated_sorted_array.svg|500]]

- [Search in rotated sorted array](https://leetcode.com/problems/search-in-rotated-sorted-array/description/) gives us a **rotated sorted array** as shown above. We need to **find the index** of a **given target value** in $O(logn)$. This can be achieved using [[Binary Search]] with a bit more logic involved

>[!important]
> All elements in the given array is **unique**!


## Solution
---

![[rotated_sorted_array_solution.svg|500]]

- When we obtain a **mid value**, there are only $2$ variables
- First, is the the **mid value in** the **first** or **second segment**?
- Second, is the **mid value** **bigger** or **smaller** than the **target value**?
- We can model this into a truth table as shown below

| Case | isInFirst | isSmaller | Meaning                                                                                                                                                  |
| ---- | --------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | ❌         | ❌         | Current location: in **second segment** or the **range only covers one segment**.<br><br>**Target value** is **bigger** than the current **mid value**.  |
| 2    | ❌         | ✅         | Current location: in **second segment** or the **range only covers one segment**.<br><br>**Target value** is **smaller** than the current **mid value**. |
| 3    | ✅         | ❌         | Current location: in **first segment**.<br><br>**Target value** is **bigger** than the current **mid value**.                                            |
| 4    | ✅         | ✅         | Current location: in **first segment**.<br><br>**Target value** is **smaller** than the current **mid value**.                                           |

- `isInFirst` is obtained by **comparing** the current **mid-value** with the **last element of the given array**. If the current mid-value is **bigger** than the last element, we can confidently say that it **belongs to the first segment**, as all elements in the first segment are larger than those in the second
- `isSmaller` is obtained by **comparing** the current **mid-value** with the **target value**. It is true when the target value is smaller than the mid-value
 
>[!important] Action taken for Case 1
> **Move to left & right**
> 
> The **target value** can be at the **right side** of the current mid value, but it can also be at the **left side**, because **all elements** in the **first segment** is **bigger** than the **elements in the second segment.**
> 
> So we need to perform another **check** here. We check if the **target value** is **bigger** than the **last element of the second segment**.
> 
> If **yes**, it means there is **NO WAY** the target value is **in** the **second segment**, and we should **move** to the **LEFT side**.
> 
> If **no**, it means there is **NO WAY** the target value is **in** the **first segment**, and we should **move** to the **RIGHT side**.
> 
> The **logic holds** when the **range only covers one segment**.
> 

>[!important] Action taken for Case 2
> **Move to left**
> 
> The **target value** can **ONLY** be to the **LEFT side** of the **current mid value** because it is **smaller**. **Moving** to the **right side** will **surely result** in a **bigger value** within the **second segment** or **range** that only **covers one segment**.

>[!important] Action taken for Case 3 
> **Move to right**
> 
> The **target value** can **ONLY** be to the **RIGHT side** of the **current mid value** because it is **bigger**. **Moving** to the **left side** will **surely result** in a **smaller value** within the **first segment**.
> 

>[!important] Action taken for Case 4
> **Move to left & right**
> 
> The **target value** can be at the **left side** of the current mid value, but it can also be at the **right side**, because **all elements** in the **second segment** is **smaller** than the **elements in the first segment.**
> 
> So we need to perform another **check** here. We check if the **target value** is **bigger** than the **last element of the second segment**.
> 
> If **yes**, it means there is **NO WAY** the target value is **in** the **second segment**, and we should **move** to the **LEFT side**.
> 
> If **no**, it means there is **NO WAY** the target value is **in** the **first segment**, and we should **move** to the **RIGHT side**.

- Below is the Java implementation based on the idea described above

```java
class Solution {
  public int search(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;
      int midVal = nums[mid];

      if (midVal == target)
        return mid;

      boolean isInFirst = midVal > nums[right];
      boolean isSmaller = target < midVal;
      if (!isInFirst && !isSmaller) {
        if (target > nums[right]) {
          right = mid - 1;
        } else
          left = mid + 1;
      } else if (!isInFirst && isSmaller) {
        right = mid - 1;
      } else if (isInFirst && !isSmaller) {
        left = mid + 1;
      } else if (isInFirst && isSmaller) {
        if (target > nums[right]) {
          right = mid - 1;
        } else
          left = mid + 1;
      }
    }

    return -1;
  }
}
```