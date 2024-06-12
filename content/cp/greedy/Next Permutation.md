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
Brush: 2
Difficulty:
  - Medium
Area:
  - greedy
  - two_pointers
Reference 1: https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/medium/31.next-permutation
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-02-26T19:38:00
Last Date: 2024-01-04T12:17:20+08:00
tags:
  - cp
draft:
---
[Original Problem](https://leetcode.cn/problems/next-permutation/description/)
## Idea
---
### Consensus
- The next permutation is permutation that has a heavier *weight*, except for the next permutation of the permutation with the heaviest weight
- For example, `[1,2,3]`, the next permutation is `[1,3,2]`, we move `3` to the 2nd index, this is a heavier weight because `3` is bigger than the `2`
- So how do we find the next permutation logically?

### Find `nextIndex`
- `nextIndex` which is the index we want to replace with a bigger value, so we can make sure we have a permutation that has heavier weight
- And we use [[Greedy Algorithm]] to find this `nextIndex`
- We loop through the second last element from backwards, the index of the first element that is smaller than the element on the right side is the `nextIndex`
- For example, given `[1,2,3]`, `2<3`, therefore, the `nextIndex` is `1`
- If we are unable to find such an element, that simply means the given [[Array]] is sorted from biggest to smallest, then we can just use [[Two Pointers (双指针)#Left-Right Pointers]] `twoPointerSort()` to sort it from smallest to biggest which is the next permutation
- Remember, when we loop through the elements from right to left, **what is on the right is always equal or bigger**, otherwise, we will find our `nextIndex` and terminate the loop already

### Find `smallIndex`
- `smallIndex` has the element whose value is bigger than the value at the `nextIndex` and `smallIndex` is at the right hand side of `nextIndex`
- Why we don't just swap the value at `nextIndex` and `nextIndex`, and call it a day?
- Because there is this particular tricky situation: given `[1,3,2]`, `nextIndex` is `0`, if we swap and call it a day, we will get `[3,1,2]`, but this isn't the next permutation, the next permutation is `[2,3,1]` which is heavier than `[1,3,2]` but lighter than `[3,1,2]`
- Damn, that is pretty tricky
- Don't worry, we can make use Greedy Algorithm once again by looping from most right hand side to `nextIndex+1` to find the first element that is bigger than the element at `nextIndex`. The guarantee us the smallest element to be swapped to `nextIndex`

### One Last Sort!
- Given `[1,3,2]`, the next permutation is `[2,1,3]`
- By finding `nextIndex`, we obtain `nextIndex = 0`
- By finding `smallIndex`, we obtain `smallIndex = 2`
- After swapping, we obtain `[2,3,1]` which is heavier than `[2,1,3]` and incorrect!
- This can be solved easily by calling the `twoPointerSort()` again, since we know the elements after the `nextIndex` is sorted from biggest to smallest, the reverse is smallest to biggest. This guarantees the lightest sequence of elements after the `nextIndex` 

### Conclusion
- That is it!
- We have one [[Greedy Algorithm#Greedy Loop]] to find `nextIndex` in `O(n)` time 
- We have another Greedy Loop to find `smallIndex` in `O(n)` time 
- Lastly, we have [[#One Last Sort!]] that takes `O(n)` time and `O(1)`
- Pretty efficient way to solve it, isn't it? 

## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- Refer to [[#Conclusion]]
### Time - O(n)
- Refer to [[#Conclusion]]
 

## Codes
---
### 2nd Attempt (Java)
```java
class Solution {
    public void twoPointerSort(int left, int right, int[] arr) {
        int temp;
        while (left < right) {
            temp = arr[right];
            arr[right--] = arr[left];
            arr[left++] = temp;
        }
    }
    
    public void nextPermutation(int[] nums) {
        int indexLast = nums.length - 1;
 
        int currRight = nums[indexLast];
        int nextIndex;
        for (nextIndex=nums.length-2; nextIndex>=0; nextIndex--) {
            if (nums[nextIndex] < currRight) break;

            currRight = nums[nextIndex];  
        }

        if (nextIndex == -1) {
            twoPointerSort(0, indexLast, nums);
            return;
        } 

        // Find the smallest value to replace the current value at nextIndex
        int smallIndex;
        for (smallIndex=indexLast; smallIndex>=nextIndex+1; smallIndex--) {
            if (nums[smallIndex] > nums[nextIndex]) break;
        }

        int temp = nums[nextIndex];
        nums[nextIndex] = nums[smallIndex];
        nums[smallIndex] = temp;

        twoPointerSort(nextIndex+1, indexLast, nums);
    }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** Overwhelmed by the complexity of the problem
- **What you could have done better:** Look at one example, and see how to progress it to the answer step by step
- **What you missed:** How to be [[Greedy Algorithm|Greedy]] and [[Two Pointers (双指针)#Left-Right Pointers]] to reverse a sorted [[Array]] [[Sorting#In-Place]] in `O(n)` time
- **Ideas you've seen before:** Greediness!
- **Ideas you found here that could help you later:** Be Greedy, take it one part by one part! And using left-right pointers to reverse a sorted array in-place in linear time
- **Ideas that didn't work and why:** Find out all the possible [[Permutation]], but this will take `O(n!)` for both time and space