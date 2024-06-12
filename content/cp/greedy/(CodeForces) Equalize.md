---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space:
  - O(1)
Time: O(n logn)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "1200"
Area:
  - greedy
  - two_pointers
  - sorting
Reference 1: https://codeforces.com/blog/entry/125740
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-02-16, 11:30
Last Date: 2024-02-18T13:40:32+08:00
tags:
  - cp
draft: 
description: Equalize Codeforces
---
[Original Problem](https://codeforces.com/contest/1928/problem/B)
## Approach
---
### Consensus
- Given an array $a$, and a permutation array $p$, both have the same size of $n$
- Then we perform $a_{i} = a_{i}+p_{i}$ operation of the 2 given arrays, our goal is to have the **highest number of elements** that have the **same value** after the operation

>[!info] Property of The Given Permutation
> An array consisting of $n$ **distinct integers** from 1 to 𝑛 in **arbitrary order**. For example, $[2,3,1,5,4]$ is a permutation, but $[1,2,2]$ is not a permutation ($2$ appears twice in the array), and $[1,3,4]$ is also not a permutation ($𝑛=3$ but there is $4$ in the array).

### Idea
- First we can remove all the duplicate values in the given $a$, because each $p_{i}$ is unique, so the element with same value in the given $a$ will 100% end up with a different value. And we only want to find the highest occurrence of one value. The duplicate doesn't help us to do so, so we can just remove them to make the problem simpler
</br>

- Ok, so what is next? How are we going to be sure that after $a_{i} = a_{i}+p_{i}$ and $a_{j} = a_{j}+p_{j}$ operations, $a_{i} = a_{j}$.
- First, lets be sure that both $p_{i}$ and $p_{j}$ are going to be in the range $1$ and $n$ inclusive, $1 \le p_{i},p_{j} \le n$, $a_{i} \ne a_{j}$ and $p_{i} \ne p_{j}$
- Assume $a_{i} \gt a_{j}$, if $a_{i} + p_{i} = a_{j} + p_{j}$, then $a_{i} - a_{j} = p_{j} - p_{i}$
- Since $1 \le p_{i},p_{j} \le n$ and $p_{i} \ne p_{j}$,  so $1 \le p_{j} - p_{i} \le (n-1)$
- So we can conclude that for any two elements from the given $a$, their absolute difference is $\le (n-1)$. The lower bound is guaranteed to be $\ge 1$, since $a_{i} \ne a_{j}$
</br>

- So what is next? With the above information, how do we obtain the the answer? The next step is to sort the $a$ from smallest to biggest to obtain the [[Dynamic Programming#Optimal Substructure (最优子结构)]], values that can be the same are arranged in a **continuous manner**. It makes implementation much easier
- So now, we just need to find the longest subarray in the **maximum value - minimum value** $\le (n-1)$. And since we sorted $a$, the maximum value is the element at the most right side of the subarray and the minimum value is the element at the most left side of the subarray
</br>

- Now imagine we explore the next element in $a$, and realise the most right element - the most left element $\gt (n-1)$. What should we do? Should we call it a day? The answer is no, we should throw away elements from left hand side until the difference of the maximum value and minimum value of the subarray meet $\le (n-1)$ again, because we may have a a lot of elements on the right hand side that can fulfil $\le (n-1)$ 
- So just keep expanding the subarray to the right side and shrink from left if the sub-array fails $\le (n-1)$ , and record down the longest subarray until we finish go through the entire $a$
- We make use of [[Two Pointers (双指针)#Two-Pointers Sliding Window]] to achieve this behaviour in a in $O(n)$
### Conclusion
- We first remove all the duplicate values inside $a$ since they don't attribute to the final answer
- Then sort the remaining elements in $a$ from smallest to biggest to have the optimal substructure
- Then we make use of sliding window to find the longest sub-array in $O(n)$, and the size of the longest sub-array is the answer


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- Sliding windows take $O(1)$ space
### Time - O(nlogn)
- The sorting takes $O(nlogn)$
 

## Codes
---
### 1st Attempt (Java)
```java
import java.util.*;
import java.io.*;
 
public class Solution {
  static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
 
 // Write your solution here
  public static void solve() throws IOException {
    HashSet<Integer> set = new HashSet<>();
    StringTokenizer st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    st = new StringTokenizer(br.readLine());
    for (int i = 0; i < n; i++) {
      set.add(Integer.parseInt(st.nextToken()));
    }
    ArrayList<Integer> list = new ArrayList<>(set);
    Collections.sort(list);

    int leftPointer = 0;
    int ans = 1;

    for (int i = 1; i < list.size(); i++) {
      while (list.get(i) - list.get(leftPointer) > (n-1)) {
        leftPointer++;
      }

      ans = Math.max(ans, i - leftPointer + 1);
    }
    System.out.println(ans);
  }
 
  public static void main(String[] args) throws IOException {
    int t = Integer.parseInt(br.readLine());
    
    while(t-- > 0) {
      solve();
    }
  }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** Unable to figure out what requirements the elements in the $a$ need to fulfil to become the same after adding elements from $p$
- **What you could have done better:** Abstract the problem and constraints into math model
- **What you missed:** How the final same values can be derived logically
- **Ideas you've seen before:** Make use of sliding window to find the longest subarray and greedy approach
- **Ideas you found here that could help you later:** Abstract problems and constraints into math model
- **Ideas that didn't work and why:** Sort the $a$ and see how to create elements that are the same with $p$, but unable to proceed, because didn't have clues to proceed, making a math model will make it much easier 