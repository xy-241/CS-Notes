---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space:
  - O(n)
Time: O(n)
Appears On:
  - Codeforces
Brush: 1
Difficulty: 
Area:
  - prefix_sum
Reference 1: https://codeforces.com/blog/entry/123952
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-12-30, 18:58
Last Date: 2023-12-30T19:46:14+08:00
tags:
  - cp
draft: 
---
[Original Problem](https://codeforces.com/contest/1915/problem/E)
## Idea
---
- We want to find a [[Array#Contiguous Segment]] where the value at the odd index - the value at the even index = 0
- To make it easier to work with, we can set all the values at the odd index to be negative, and the values at even index to be positive. The another way works too
- By doing, so we can just perform addition on the elements and we want a contiguous segment which sum up to 0
- And since it is a contiguous segment, then it must have a starting point and and ending point
- So lets approach the question by finding the ending point, and we can do it by loop through each index once, and verify if it can be the ending point
- We can achieve this using [[Prefix Sum (前缀和)]]
- The idea here is to take advantage of prefix sum's [[Prefix Sum (前缀和)#O(1) Range Sum Query]] which gives us back the sum of a contiguous segment with any two given index
- So now the question is: in what case we can determine a range sum query will return a 0? The answer is simple: when there is a value at smaller index of the prefix sum has the same value as the value at the current index of the prefix sum
- Example, value at current index = 3, value at a smaller index = 3, then the range sum is 3-3 = 0. Refer to the [[Prefix Sum (前缀和)#O(1) Range Sum Query|prefix sum range sum formula]]
- And we can use [[Hash Map]] to keep track of the value appear at each index of the prefix sum. So we can perform the check in `O(1)`
- After looping though all the elements of the prefix sum without finding a match, then it means there isn't any contiguous segment which gives us back `0`


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(n)
- *Ignore input size & language dependent space*
- We created a prefix sum array and hashset which takes `O(n)` space each 
### Time - O(n)
- We only need one loop to find the ending point with the help of prefix sum
 

## Codes
---
### 1st Attempt
```java title="Solution.java"
import java.util.Scanner;
import java.util.Set;
import java.util.HashSet;
 
public class Solution {
  static Scanner scanner = new Scanner(System.in);
  
  // Write your solution here
  public static void solve() {
    int n = scanner.nextInt();

    long[] prefixSum = new long[n+1];
    Set<Long> set = new HashSet<>();
    set.add(0l);


    for (int i=1; i<=n; i++) {
      prefixSum[i] = prefixSum[i-1] + scanner.nextInt() * (i%2 == 0 ? 1 : -1);

      if (set.contains(prefixSum[i])) {
        System.out.println("YES");
        while (++i <= n) scanner.nextInt();;
        return;
      }
      set.add(prefixSum[i]);
    }

    System.out.println("NO");
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
- **Why it takes so long to solve:** Unfamiliar with the [[Prefix Sum (前缀和)]]
- **What you could have done better:** Practice more on prefix sum questions!
- **What you missed:** I missed the [[Prefix Sum (前缀和)#O(1) Range Sum Query]], and we should think about the values at the odd index and even index together. I separated the values at odd index to its own prefix sum and the values at event index to its own prefix sum. This makes it hard to find that sweet sweet [[Array#Contiguous Segment]] with the Range Sum Query that sums up to `0`
- **Ideas you've seen before:** Prefix Sum
- **Ideas you found here that could help you later:** The O(1) Range Sum Query property of Prefix sum
- **Ideas that didn't work and why:** Separating  the values at odd index to its own prefix sum and the values at event index to its own prefix sum, this breaks the contiguous nature of the prefix sum, and we cant leverage on the range sum query property 