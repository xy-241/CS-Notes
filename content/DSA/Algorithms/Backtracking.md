---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2023-09-18T12:15:00
Last Date: 2023-11-07T09:05:05+08:00
---
## Abstract
---
- Basically a brute-force method that explores all possible paths
- [[Backtracking]] is an *Algorithm Strategy*, while [[Recursion]] is more like a *Algorithm Tool*
- The application of [[Recursion]] in searching problem 
- 回溯算法通常并不显式地对问题进行拆解，而是将问题看作一系列决策步骤，通过试探和[[#Pruning (剪枝)]]，搜索所有可能的[[#Solution (解)]]
- We can perform [[#Pruning]] to improve the performance, but this will not change the overall worst case
- [[Iterative Recursion]] doesn't work well to implement this algorithm, stick to [[Recursion]] - backtracking allows us to implicitly create multiple nested for-loops until we find the desired answer

## Tips in solving Leetcode
---
### [[#Pruning (剪枝)]]
- When in finding sum questions, *sort* the given [[Array]] before backtracking, then we can skip the rest of the loops if +the next element is bigger

### Remove Duplicates in [[#Combination]]
- Sort the given set
- At each level, we skip the elements that have the same value as the previous element
```java
// In the primary function
Arrays.sort(nums);

// In Backtracking function
for (start = start; start<nums.length; start++) {
	// ...
	while(start < nums.length-1 && nums[start]==nums[start+1]) start++;
}
```
### 2 Ways to Remove Duplicates in [[#Permutation (排列)]]
1. Use a [[Hash Set]]/[[Array]] to remove duplicates at each level, *given the element value is small*
```java
// Without the need to sort the given array in the primary function

// In Backtracking function
boolean[] duplicates = new boolean[21];
for (int i=0; i<nums.length; i++) { 
	if (duplicates[nums[i]+10]) continue;
	duplicates[nums[i]+10] = true;
	// ...
}
```
2. Sort the given [[Array]], then remove duplicates by checking if the previous element is same as current element && isn't used which means the previous element with the same value can be used, resulting in a duplicated [[#Permutation (排列)]]
```java
// In the primary function
Arrays.sort(nums);

// In Backtracking function
if (i>0 && nums[i-1]==nums[i] && visited[i-1]==false) continue;
```

## Leetcode Questions
---
>[!important]
>- For [[#Combination]] & [[#Partition (分割)]], [[#Solution (解)]] is obtained by collecting the [[#State (状态)]] at the [[Binary Tree (二叉树)#Leaf Node | Leaf Node]]
>- For [[#Subset (子集)]], [[#Solution (解)]] is obtained by collecting the [[#State (状态)]] at all nodes
### [[Combination]]
#### Single Set
- [77. Combinations](https://leetcode.cn/problems/combinations/)
- [39. Combination Sum](https://leetcode.cn/problems/combination-sum/)
- [40. Combination Sum II](https://leetcode.cn/problems/combination-sum-ii/)
- [216. Combination Sum III](https://leetcode.cn/problems/combination-sum-iii/)
#### Multiple Sets
- [17. Letter Combinations of a Phone Number](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

### Partition (分割)
>[!important]
>- Basically [[#Combination]] without re-using the same element 
- [131. Palindrome Partitioning](https://leetcode.cn/problems/palindrome-partitioning/)
- [93. Restore IP Addresses](https://leetcode.cn/problems/restore-ip-addresses/)

### Subset (子集)
- [78. Subsets](https://leetcode.cn/problems/subsets/)
- [90. Subsets II](https://leetcode.cn/problems/subsets-ii/)
#### Maintain Given Order
- [491. Non-decreasing Subsequences](https://leetcode.cn/problems/non-decreasing-subsequences/)


### Permutation (排列)
#### Without Duplicates
- [46. Permutations](https://leetcode.cn/problems/permutations/)
#### With Duplicates
- [47. Permutations II](https://leetcode.cn/problems/permutations-ii/)

### Chessboard Problem
- [51. N-Queens](https://leetcode.cn/problems/n-queens/)
- [37. Sudoku Solver](https://leetcode.cn/problems/sudoku-solver/)

## Terminologies
---
### Solution (解)
- The answer that fulfil all [[#Constraint (约束条件)]]
- Can be one or many
- Path(s) that fulfil all the [[#Constraint (约束条件)]]
### Constraint (约束条件)
- Conditions that limit the [[#Solution (解)]], usually used in [[#Pruning (剪枝)]]
- For example, the [[#Solution (解)]] must contain certain number of nodes or sum up to a particular value
### State (状态)
- Represents the problem at any point of the time, including the choices made
### Attempt (尝试)
- The process of finding potential [[#Solution (解)]] with the provided choices
- Including making the choice, updating the [[#State (状态)]] and check if it is the [[#Solution (解)]]
### Backtracking (回退)
- Removing the previous choice made & return to the previous [[#State (状态)]]
### Pruning (剪枝)
- Based on [[#Constraint (约束条件)]], Avoid exploring some paths fully when we know there isn't a point to explore nodes on the rest of the path or other paths, to save on the computation 
- For example, when the question says the [[#Solution (解)]] must contains a certain number of nodes, we can terminate [[#Attempt (尝试)]] if we see there is no way to get to that number of nodes