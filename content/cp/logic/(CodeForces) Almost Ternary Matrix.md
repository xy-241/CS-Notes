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
  - "900"
Area:
  - logic
  - number_theory
  - bitwise
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-02-11, 23:51
Last Date: 2024-02-12T00:01:10+08:00
tags:
  - cp
draft: "true"
description: CP Solution
---
[Original Problem](https://codeforces.com/contest/1699/problem/B)
## Approach
---
### Consensus
- Give $n$ and $m$, where $n$ is the number of rows and $m$ is the number of columns. Both $n$ and $m$ are **even** [[Integer (整数)]]
- We need to return a matrix that is $n\times m$, each cells contains a value of $0$ or $1$. We need to make sure each cell has exactly 2 adjacent cells that are have an opposite value. So if the current cell has a value of $0$, it needs to have 2 adjacent cells that have a value of $1$

### Idea
- Lets first break down the problem into its smallest form
- What is the smallest form of the problem? Basically it is the smallest value for both $n$ and $m$. Since $n$ and $m$ are both even integers, so the smallest even integers are $2$
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
    StringTokenizer st = new StringTokenizer(br.readLine());
    int n = Integer.parseInt(st.nextToken());
    int m = Integer.parseInt(st.nextToken());

    int[][] arr = new int[n][m];
    int[] index = new int[]{1,0};
    int[] orginalIndex = new int[]{1,0};
    for (int h=0; h<n; h+=2) {
      for (int w=0; w<m; w+=2) {
        arr[h][w] = index[0];
        arr[h][w+1] = index[1];
        arr[h+1][w] = index[1];
        arr[h+1][w+1] = index[0];

        index[0]^=1;
        index[1]^=1;
      }

      index[0] = orginalIndex[0]^1;
      index[1] = orginalIndex[1]^1;

      orginalIndex[0] = index[0];
      orginalIndex[1] = index[1];
    }

    StringBuilder sb = new StringBuilder();
    for (int h=0; h<n; h++) {
      for (int w=0; w<m; w++) {
        sb.append(arr[h][w] + " ");
      }
      sb.append("\n");
    }

    System.out.println(sb.substring(0, sb.length()-1));
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