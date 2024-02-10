---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space:
  - O(n)
Time: O(n logn)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "900"
Area:
  - greedy
  - sorting
Reference 1: https://codeforces.com/blog/entry/125300#comment-1111892
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-02-08, 10:52
Last Date: 2024-02-10T16:14:26+08:00
tags:
  - cp
draft: 
description: CP Solution
---
[Original Problem](https://codeforces.com/contest/1918/problem/B)
## Approach
---
### Consensus
- Given 2 [[Permutation]], we can swap any 2 elements at a time, the catch is that, when we swap the 2 elements of the first permutation, we need to do the element swapping at the exact position for the second permutation
- The goal is to have the **minimal** [[Permutation#Permutation Inversion]] **sum** of the two permutations

### Idea
- Lets abstract the problem, let the 2 elements we want to swap in the first permutation be $a_i,a_j$, where $i,j$ are the position index, and $i<j$. Let the 2 elements we want to swap in the second permutation be $b_i,b_j$
</br>

- It makes sense to swap when $a_{i} + b_{i} > a_{j} + b_{j}$, when the net gain is positive. One of the permutation definitely has the pair that has a super big permutation inversion when the another pair doesn't have a inversion. Or both permutations have an inversion
  </br>

- So we can group the elements on the same index together. And put the groups into an array, and sort it based on $a_{i} + b_{i}$
### Conclusion
- Basically think of the given 2 permutations as one, sort them based on the sum of elements on the same index
- The sorting performs the swapping
- The group of elements swapped to front means we sure have at least one reduction in permutation reversion, and the cost of the **potential increment** in permutation reversion is **relatively small**


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(n)
- *Ignore input size & language dependent space*
- The stringBuilder to buffer the answer is the length of the given permutation strings
### Time - O(n logn)
- The sorting aka swapping takes `O(n logn)`
 

## Codes
---
### 1st Attempt (Java)
```java
import java.util.*;
     
public class Solution {
  static Scanner scanner = new Scanner(System.in);
 
 // Write your solution here
  public static void solve() {
    int n = scanner.nextInt();
    int[][] arr = new int[n][2];
 
    for (int i=0; i<n; i++) {
      int a = scanner.nextInt();
      arr[i][0] = a;
    }
 
    for (int i=0; i<n; i++) {
      int a = scanner.nextInt();
      arr[i][1] = a;
    }
 
    Arrays.sort(arr, (a, b) ->   Integer.compare(a[0]+a[1], b[0]+b[1]));
 
    StringBuilder firstLine = new StringBuilder();
    StringBuilder secondLine = new StringBuilder();
    for (int[] a : arr) {
        firstLine.append(a[0]).append(" ");
        secondLine.append(a[1]).append(" ");
    }

    System.out.println(firstLine);
    System.out.println(secondLine);
  }
 
  public static void main(String[] args) {
    int t = scanner.nextInt();
    scanner.nextLine();
    
    while(t-- > 0) {
      solve();
    }
  }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** Unable to see that we are able to group the 2 permutations into one, and apply [[Greedy Algorithm]] on it to find the solution
- **What you could have done better:** hmm, probably practice more and try to abstract problems into math formula
- **What you missed:** Group the element at the same index of the given two permutations into one
- **Ideas you've seen before:** Greedy algorithm
- **Ideas you found here that could help you later:** Abstract problems into math formula, and grouping the pairs
- **Ideas that didn't work and why:** Didn't really have any ideas lol