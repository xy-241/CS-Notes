---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space: 
Time: 
Appears On:
  - Grind 75
Brush: 4
Difficulty:
  - Medium
Area:
  - greedy
  - two_pointers
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-01-09, 16:17
Last Date: 2024-01-10T11:57:53+08:00
tags:
  - cp
draft: "true"
---
[Original Problem](https://leetcode.com/problems/container-with-most-water/description/)
## Approach
---
### Consensus
- The area is the product of the height and width
- Height: the shorter side of the left right side
- Width: the distance of from left side to the right side

### Main Idea
- We start from the most left hand side and most right side, so we have the maximum possible width 
- Then what should we do next?
- There is a chance that the max volume has a different left index and right index, so the next step is to find that potential left index and right index
- How do we do that?
- We can use a [[Greedy Algorithm]] approach here. The only possible way to increase the volume is to replace the shorter side with a new height.
- So if height at left index is shorter, we replace it with height at the right side, if height at the right index is shorter, we replace it with height at the left side
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

## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O()
- *Ignore input size & language dependent space*
- 
### Time - O()
- 

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
- **Why it takes so long to solve:** *NIL*
- **What you could have done better:** *NIL*
- **What you missed:** *NIL*
- **Ideas you've seen before:** *NIL*
- **Ideas you found here that could help you later:** *NIL*
- **Ideas that didn't work and why:** *NIL*