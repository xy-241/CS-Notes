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
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-01-28, 16:42
Last Date: 2024-01-28T16:44:58+08:00
tags:
  - cp
draft: "true"
description: CP Solution
---
[Original Problem](https://codeforces.com/contest/1925/problem/B)
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

public class Solution {
static Scanner scanner = new Scanner(System.in);

// Write your solution here
public static void solve() {
  long x = scanner.nextLong();
  long n = scanner.nextLong();

  long res = 1;

  for (int i=1; i<=Math.sqrt(x); i++) {
    if (x%i == 0) {
      if (i * n > x) break;
      
      res = Math.max(res, i);

      long oppFactor = x/i;
      if (oppFactor * n <= x) res = Math.max(res, oppFactor);
    }
  }

  System.out.println(res);
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
- **Why it takes so long to solve:** *NIL*
- **What you could have done better:** *NIL*
- **What you missed:** *NIL*
- **Ideas you've seen before:** *NIL*
- **Ideas you found here that could help you later:** *NIL*
- **Ideas that didn't work and why:** *NIL*