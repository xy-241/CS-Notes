---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space: 
Time: 
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - div2B
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
Last Date: 2024-02-16T11:42:24+08:00
tags:
  - cp
draft: "true"
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
- 
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
- **Why it takes so long to solve:** *NIL*
- **What you could have done better:** *NIL*
- **What you missed:** *NIL*
- **Ideas you've seen before:** *NIL*
- **Ideas you found here that could help you later:** *NIL*
- **Ideas that didn't work and why:** *NIL*