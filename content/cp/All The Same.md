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
  - "1100"
Area:
  - number_theory
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-12-20, 16:43
Last Date: 2023-12-21T17:17:16+08:00
tags:
  - cp
draft: 
---
[Original Problem](https://codeforces.com/contest/1593/problem/D1)
## Idea
---
- We only return `-1` when all the given numbers are the same, then `k` can be any number in this case. Thus return `-1`
- When there is multiple differences. We can find the [[GCD]] of the differences to obtain the biggest possible `k`. We can use [[GCD#Euclidean Algorithm]] to make the process `O(logn)`, and simplify the implementation
- Assume we have 2 positive differences - `a` and `b`. `a = k*y` and `b=k*z`, where `k` is the GCD, `y` and `z` are [[Integer (整数)]] 
- When `a` and `b` are divisible by `k`, it means by subtracting `y` times from `a` and `z` time from `b`. We obtain `0` aka reaching same level
- Given `[1,5,13]`, the differences we have are `4` and `8`, the GCD of `4` and `8` is `4` -> `4 = 1*4`, `8 = 2*4`
- Given `[1,13,5]`, the differences we have are `12` and `8`, the GCD of `12` and `8` is `4` -> `12 = 3*4`, `8 = 2*4`
- We can make the difference is positive, to ensure the GCD calculated is positive
## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- We aren't creating anything on [[Address Space#Data Segment]]
### Time - O(n logn)
- We need to loop through each element to find the difference which is `O(n)`, and perform `gcd()` on each element pair which is `O(logn)`. So overall is `O(n logn)``
 

## Codes
---
### 1st Attempt (Java)
```java
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Solution {
  public static void main(String[] args) {
    // Read input data
    Scanner scanner = new Scanner(System.in);

    int t = scanner.nextInt();
    // Loop through the test cases
    for (int i=0; i<t; i++) {
      int n = scanner.nextInt();

      // Get a list of integers
      List<Integer> intList = new ArrayList<>();
      for (int j=0; j<n; j++) intList.add(scanner.nextInt());

      
      // Find the gcd of all valid(>0) differences
      int k = -1;
      for (int j=1; j<intList.size(); j++) {
        int currDiff = Math.abs(intList.get(j) - intList.get(j-1));
        if (currDiff == 0) continue;
        if (k == -1) {
          k = currDiff;
          continue;
        }
        k = gcd(k, currDiff); // gcd of all differences, gcd finds the largest common divisor aka the largest value that can be subtracted from all values to a point we reach 0
      }

      System.out.println(k);
    }
  }

  // O(logn)
  public static int gcd(int a, int b) {
    int r = a%b;
    if (r == 0) return b;
    return gcd(b, r);
  }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** Not familiar with how [[GCD]] helps to find the biggest possible value that make all the [[Integer (整数)]] to be the same. And un-ware that I can use [[GCD#Euclidean Algorithm]] to find GCD in `O(logn)`
- **What you could have done better:** Read up on on Number Theory
- **What you missed:** Euclidean Algorithm
- **Ideas you've seen before:** [[Prime Number (质数)]]
- **Ideas you found here that could help you later:** GCD and Euclidean Algorithm that find the largest possible integer that ensure all given integers can be reduced to the same
- **Ideas that didn't work and why:** Trying to [[GCD#List Factors]], too inefficient and tedious to implement