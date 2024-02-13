---
sthNew: true
Mastery Level:
  - 📘
Time Taken: 
Space: 
Time: 
Appears On:
  - Codeforces
Brush: 1
Difficulty: 
Area:
  - number_theory
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-02-13, 14:48
Last Date: 2024-02-13T14:55:01+08:00
tags:
  - cp
draft: "true"
description: Rectangle Cutting codeforces
---
[Original Problem](https://codeforces.com/contest/1928/problem/A)
## Approach
---
### Consensus

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
- **Why it takes so long to solve:** *NIL*
- **What you could have done better:** *NIL*
- **What you missed:** *NIL*
- **Ideas you've seen before:** *NIL*
- **Ideas you found here that could help you later:** *NIL*
- **Ideas that didn't work and why:** *NIL*
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