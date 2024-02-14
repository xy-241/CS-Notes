---
sthNew: true
Mastery Level:
  - 📘
Time Taken: 
Space:
  - O(1)
Time: O(1)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - div2A
Area:
  - number_theory
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-02-13, 14:48
Last Date: 2024-02-14T12:56:21+08:00
tags:
  - cp
draft: 
description: Rectangle Cutting codeforces
---
[Original Problem](https://codeforces.com/contest/1928/problem/A)
## Approach
---
### Consensus
- Given $a$ and $b$ which are the width and height of a rectangle. We want to check is it possible to form a new rectangle after making a straight cut parallel of one side of the given rectangle
- There are a few constraints here 
	1. The new sides after cutting should still be [[Integer (整数)]]
	2. The area should remain unchanged
	3. The new sides should not be the given $a$ and $b$, if the same, we aren't creating a new rectangle

### Idea
- Given $a$ and $b$, we can conclude that the area of the rectangle is $ab$
- When we cut, we can choose to cut from one side, either cut $a$(cut parallel to the $b$ side) or $b$(cut parallel to the $a$ side)
- The position of cutting a side is also fixed - right in the middle of the side we are cutting, so it is either $a/2$ or $b/2$, because if we don't cut in the middle, there is no way for us to have a chance to form a rectangle. When we cut, we must make sure the **side we cut** is placed in **parallel in the new rectangle**, or we will get back the same rectangle. An example is shown below
![[(CodeForces) Rectangle Cutting.png|500]]
- Since the new side is either $a/2$ or $b/2$, and we need to make sure the area of the new rectangle remains unchanged $ab$. If the side isn't even, we are sure we can't cut it
- Let $a$ be even, when we cut it into half, we obtain $a/2$, the another side will be $2b$ with basic algebraic operations. $\frac{a}{2} \times 2b = ab$

>[!attention] One Catch!
>If $\frac{a}{2}= b$, then $2b = 2 \times \frac{a}{2} = a$. We are basically getting back **the same rectangle!** 

### Conclusion
- We can obtain a new rectangle by making a straight line cut parallel to one side of the rectangle if and only if it meets the following **2 conditions**
	1. We need to make sure we cut the side in two equal size to have a valid rectangle. Thus, the side we are cutting is even, since we want the side of the rectangle to be integer
	2. After cutting the side, the side that is cut can't have the same value as the side that we didn't cut

## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- We just keeping track a boolean value for the answer
### Time - O(1)
- We are only making use a few arithmetic operations and boolean checking here 
 

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
    int a = Integer.parseInt(st.nextToken());
    int b = Integer.parseInt(st.nextToken());

    boolean isThereNew = false;
    if (a%2 == 0 && a/2!=b) isThereNew = true;
    if (b%2 == 0 && b/2!=a) isThereNew = true;

    System.out.println(isThereNew ? "YES" : "NO");
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
- **Why it takes so long to solve:** Overwhelmed by matrix, not sure where to start
- **What you could have done better:** Visualisation of the cutting we can perform on the rectangle in the brain, and abstract problems into math symbols
- **What you missed:** *NIL*
- **Ideas you've seen before:** number theory 
- **Ideas you found here that could help you later:** number theory, the visualisation of matrix operation in the brain and abstract problems into math symbols
- **Ideas that didn't work and why:** Finding all the possible [[Factor]] of the area, and check if the $factor*2$ is a factor that isn't $a$ or $b$, if yes then we can create a new rectangle. Otherwise, no. This doesn't work, because it takes $O(sqrt(n))$ to find all factors and it will TLE
>[!error]- Solution that Time Limit Exceed
> The solution below has a time complexity of $O(ab)$
> ```java
> import java.util.*;
> import java.io.*;
>  
> public class Solution {
>   static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
>  
>  // Write your solution here
>   public static void solve() throws IOException {
>     StringTokenizer st = new StringTokenizer(br.readLine());
>     long a = Long.parseLong(st.nextToken());
>     long b = Long.parseLong(st.nextToken());
> 
>     long area = a*b;
> 
>     List<Integer> factors = new ArrayList<>();
>     for (int i=1; i<=Math.sqrt(area); i++) {
>       if (area%i == 0 && i != a && i != b) {
>         factors.add(i);
>         factors.add((int)area/i);
>       }
>     }
> 
>     boolean isThereNew = false;
> 
>     for (int f:factors) {
>       int beforeDiv = f*2;
>       if (beforeDiv == a || beforeDiv == b) {
>         isThereNew = true;
>         break;
>       }
>     }
>     
>     if (isThereNew) {
>       System.out.println("YES");
>     } else {
>       System.out.println("NO");
>     }
>   }
>  
>   public static void main(String[] args) throws IOException {
>     int t = Integer.parseInt(br.readLine());
>     
>     while(t-- > 0) {
>       solve();
>     }
>   }
> }
> ```