---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space:
  - O(1)
Time: O(n)
Appears On:
  - Grind 75
Brush: 4
Difficulty:
  - Medium
Area:
  - greedy
  - two_pointers
Reference 1: https://algo.itcharge.cn/Solutions/0001-0099/container-with-most-water/#%E9%A2%98%E7%9B%AE%E5%A4%A7%E6%84%8F
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2022-05-09T13:29:00
Last Date: 2024-01-12T12:20:35+08:00
tags:
  - cp
draft: 
---
[Original Problem](https://leetcode.com/problems/container-with-most-water/description/)
## Approach
---
### Consensus
- **Area:** product of the height and width
- **Height:** shorter side of the left right side
- **Width:** distance of from left side to the right side

### Main Idea
- We start from the most left hand side and most right side, so we have the maximum possible width 
- Then what should we do next?
- There is a chance that the max volume has a different left index and right index, so the next step is to find that potential left index and right index
- How do we do that?
- We can use a [[Greedy Algorithm]] approach here. The only possible way to increase the volume is to replace the shorter side with a new height.
- So if height at left index is shorter, we replace it with height at the right side, if height at the right index is shorter, we replace it with height at the left side. This can be achieved easily with [[Two Pointers (双指针）#Left-Right Pointers]]
- There 3 possible situations
	1. Left side is shorter: replace left side with height that is at the right side of the current left
	2. Right side is shorter: replace right side with heigh that is at the left side of the current right
	3. Both left and right are the same: replace left side with height that is at the right side of the current left & replace right side with heigh that is at the left side of the current right
- `res` is used to keep track of the biggest volume at all potential situations
- You may question if this works for the following situation:
![[Container With Most Water.excalidraw.svg]]
- It seems like instead of replacing the left height `3`, it makes more sense to move the right height `4` to get `5` to have an overall higher volume
- The answer NO, remember the height is decided by the shorter side, so if we replace `4` with `5`, the height is still unchanged, it is still `3`, and width is decreased by one
- So the conclusion is that replacing the higher side will **ALWAYS** result in a smaller overall volume!
- So we only left with replacing shorter side with a new side that has the potential to give us a higher volume. The greediness!

### Conclusion
- We start with left at index 0 and right at the most right hand side
- Then with [[Greedy Algorithm]], we replace the side with shorter height with the help of [[Two Pointers (双指针）#Left-Right Pointers]]
- At the same time, we are using a `res` variable to keep track the highest volume across all potential volumes 

## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- Constant space used for two pointers and `res`
### Time - O(n)
- We need to process each height once

## Codes
---
### 4th Attempt (Java)
```java
class Solution {
    public int maxArea(int[] height) {
        int res=0;
        int left=0;
        int right=height.length-1;

        while (left < right) {
            int leftHeight = height[left];
            int rightHeight = height[right];
            int width = right - left;

            int currArea = Math.min(leftHeight, rightHeight) * width;
            if (currArea > res) res = currArea;

            if (leftHeight < rightHeight) left++;
            if (leftHeight == rightHeight) {
                left++;
                right--;
            } 
            if (leftHeight > rightHeight) right--;
        }

        return res;
    }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** Unable to abstract the problem to apply the [[Greedy Algorithm]]
- **What you could have done better:** Simply practice more on similar problems
- **What you missed:** *NIL*
- **Ideas you've seen before:** Greedy algorithm and left right pointers
- **Ideas you found here that could help you later:** *NIL*
- **Ideas that didn't work and why:** *NIL*