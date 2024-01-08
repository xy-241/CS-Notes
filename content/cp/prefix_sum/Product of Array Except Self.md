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
Reference 1: https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/medium/238.product-of-array-except-self
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-01-08, 12:52
Last Date: 2024-01-08T13:13:43+08:00
tags:
  - cp
draft: 
---
[Original Problem](https://leetcode.com/problems/product-of-array-except-self/)
## Idea
---
### Consensus
- The solution must run in `O(n)`
- Can't use division operation
- The output [[Array]] does not count as extra space for [[Algorithm Complexity Analysis#Worst Space Complexity]]

### Main Idea
![[Product of Array Except Self.png]]

- We have one array `prefix[]` that keeps track of the product of the elements at the current index. The product at current index is the product of all elements on the left side of the current index
- Then we have another loop to calculate the postfix. The postfix at current index is the product of all elements at the right hand side. As you can see from the diagram above, postfix can be represented with a variable instead of array to save space
### Conclusion
- Make use of [[Prefix Sum (前缀和)]] to keep track of products of elements at the left hand side of each element in the array
- Then using a variable to calculate the product of elements at the right hand side of each element to obtain the answer


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- The output array isn't counted as stated by the question 
### Time - O(n)
- We need to loop through the elements of the given array 2 times
- 1 time to obtain the `prefix[]`, another time to calculate the postfix to obtain the final answer
 

## Codes
---
### 5th Attempt (Java)
```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] prefix = new int[nums.length];

        prefix[0] = 1;

        for (int i=1; i<nums.length; i++) {
            prefix[i] = prefix[i-1] * nums[i-1]; 
        }

        int postfix = 1;
        for (int i=nums.length-2; i>=0; i--) {
            postfix *= nums[i+1];
            prefix[i] = prefix[i] * postfix;
        }

        return prefix;
    }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** Didn't read the problem carefully and implementing [[Prefix Sum (前缀和)]] on products of elements
- **What you could have done better:** Sketch out the calculation process clearly on the paper
- **What you missed:** *NIL*
- **Ideas you've seen before:** Prefix Sum (前缀和)
- **Ideas you found here that could help you later:** Prefix Sum (前缀和)'s ability to provide the product of a range of elements in O(1)
- **Ideas that didn't work and why:** *NIL*