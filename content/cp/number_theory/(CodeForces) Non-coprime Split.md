---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space:
  - O(1)
Time: O(nlogn)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "1100"
Area:
  - number_theory
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-12-23, 16:07
Last Date: 2024-01-28T16:37:15+08:00
tags:
  - cp
draft: 
---
[Original Problem](https://codeforces.com/contest/1872/problem/C)
## Idea
---
- The idea here is to loop through the elements between `l` and `r` (inclusive)
- For each [[Integer (整数)]] we loop through, let it be `j`
- Then we [[Factor#Find Minimal Greater-than-One Factor]], and let it be `md` if we can obtain one, and it will be `a`
- Then `j-md` will be `b`
- Then [[GCD]] of `md` and `j-md` will be `md` which is guaranteed to be `>1`


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- We aren't creating any objects on the [[Address Space#Heap Segment]]
### Time - O(nlogn)
- Assume `r-l` is `n`, [[Factor#Find Minimal Greater-than-One Factor]] is `O(logn)`, thus overall time complexity is `O(nlogn)`
 

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
- **Why it takes so long to solve:** Unaware of the [[Factor#Find Minimal Greater-than-One Factor]]
- **What you could have done better:** Practice more questions on [[Number Theory]]
- **What you missed:** Find Minimal Greater-than-One Factor. And an [[Integer (整数)]] can be minused all the way to `0` by minusing it with one of its factor after certain number of times 
- **Ideas you've seen before:** [[Prime Number (质数)]] and [[GCD]]
- **Ideas you found here that could help you later:** Find Minimal Greater-than-One Factor in `O(logn)`
- **Ideas that didn't work and why:** Trying to apply GCD concepts on the potential numbers in the range of `l` and `r`, but stuck on how to split the potential number `a+b` into 2 valid Integer (整数), way to complicated and time consuming. We should think about how to find the 2 valid Integer (整数) from all the potential pair of factors that sum up to the potential number `a+b`