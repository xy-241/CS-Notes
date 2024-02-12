---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space:
  - O(nm)
Time: O(nm)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "900"
Area:
  - dynamic_programming
  - number_theory
  - bitwise
Reference 1: https://codeforces.com/blog/entry/108560
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-02-11, 23:51
Last Date: 2024-02-12T17:45:27+08:00
tags:
  - cp
draft: 
description: Almost Ternary Matrix codeforces
---
[Original Problem](https://codeforces.com/contest/1699/problem/B)
## Approach
---
### Consensus
- Give $n$ and $m$, where $n$ is the number of rows and $m$ is the number of columns. Both $n$ and $m$ are **even** [[Integer (整数)]]
- We need to return a matrix that is $n\times m$, each cells contains a value of $0$ or $1$. We need to make sure each cell has exactly 2 adjacent cells that have an opposite value. So if the current cell has a value of $0$, it needs to have 2 adjacent cells that have a value of $1$

### Idea
- Lets first break down the problem into its smallest form
- What is the smallest form of the problem? Basically it is the smallest value for both $n$ and $m$. Since $n$ and $m$ are both even integers, and the smallest even integers are $2$. Thus, the smallest form of the problem is $2$ for both $n$ and $m$
- Below is the only 2 possible solution to this smallest form of the problem. Feel free to double check it. One thing to note here is that, the answer here is **self-contained**
![[cf_almost_ternary_matrix.png|500]]
- Self-contained means that the answer to the smallest problem has a **stable state**, if we want to build on top the it, we need to avoid disrupting this stable state
- How to build on top and avoid disrupting the stable state? Actually it is very simple, there is this pattern as shown below. We **extend 1st answer with 2nd answer**, and **vice verse**
![[cf_almost_ternary_matrix_2.png|500]]
- Since $n$ and $m$ are event integers, we can have $n=2\times a$, $m=2\times b$, where $a$ and $b$ are integer
- $n\times m=4\times ab$, and the smallest matrix has a value of $2\times2 = 4$. So we can conclude that we can use $nm\div d$ smallest matrix to form the final matrix
- We just need to make sure each smallest matrix is adjacent to a different type of the smallest matrix, 1st type matrix is adjacent to 2nd type matrix, vice versa 
### Implementation Details
- We can make use [[XOR#XOR Bitmasking]] to populate each row of the matrix with the smallest matrix
- We also need to make use of XOR Bitmasking when we need to populate the next row


### Conclusion
- Break down the problem into its smallest form with the number theory concept (definition of even number), and find what are the possible solutions for the smallest form
- Then see how can we build on top of the smallest form, and eventually obtain overall answer - [[Dynamic Programming]]
- For implementation, we make use of bitwise operator XOR to populate the matrix efficiently 


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(nm)
- *Ignore input size & language dependent space*
- We need to create an output buffer that contains the result matrix, to avoid time timeout due to too many IO operations
### Time - O(nm)
- We need to populate each cell one by one
 

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
- **Why it takes so long to solve:** Overwhelmed by the given problem, unable to break down the problem into its smallest form and build on top of it
- **What you could have done better:** Try to break down the problem into is smallest form, and see how to build on top of it
- **What you missed:** Simplification of the problem with the help of number theory concepts, and the dynamic programming component 
- **Ideas you've seen before:** Dynamic programming and XOR Bitwising
- **Ideas you found here that could help you later:** Problem simplification 
- **Ideas that didn't work and why:** Bitwise, bitwise is only used to help with the implementation, not a core component that is tested here