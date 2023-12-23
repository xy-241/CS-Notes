---
sthNew: true
Mastery Level:
  - 📗
  - 📕
Time Taken: 
Space:
  - O(1)
Time: O(n)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "1000"
Area:
  - data structure
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-12-23, 16:07
Last Date: 2023-12-23T16:24:27+08:00
tags:
  - cp
draft: "true"
---
[Original Problem]()
## Idea
---
- The idea here is to loop through the elements between `l` and `r` (inclusive)
- For each [[Integer (整数)]] we loop through, let it be `j`, we [[Prime Number (质数)#Find Minimal Non-Zero Factor]], and let it be `md`. 
- We are sure `(j-md)%md == 0`, because `j%md=0`, `j/md - md/md = integer`
- As long as `md != j` which means `j` is a prime and `md - j = 0`, and `minFactor()` guarantees that the `md` is `>=2` which is `>1` 


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- We aren't creating any objects on the [[Address Space#Data Segment]]
### Time - O()
- 
 

## Codes
---
### 1st Attempt (Java)
```java
import java.util.Scanner;

public class Solution {
  public static void main(String[] args) {
    // Read input data
    Scanner scanner = new Scanner(System.in);

    int t = scanner.nextInt();
    // Loop through the test cases
    for (int i=0; i<t; i++) {
      int l = scanner.nextInt();
      int r = scanner.nextInt();

      boolean found = false;
      for (int j=l; j<=r; j++) {
        int md = minFactor(j);
        
        // factor means (n-md)%md == 0
        // When the md is >= 2 and md != j and (n-md)%md == 0,  
        // gcd((n-md), md) == md which is guaranteed to be > 1
        if (md != j) {
          found = true;
          System.out.println(md + " " + (j-md));
          break;
        }
      }
      
      if (!found) System.out.println(-1);
    }
    
  }

  // Time Complexity - O(sqrt(n)), where n is the size of the integer
  public static int minFactor(int n) {
    for (int i=2; i<=Math.sqrt(n); i++) {
      if (n%i == 0) return i;
    }

    // When we cant find factor that is bigger than 2 and smaller than n
    return n;
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