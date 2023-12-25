---
sthNew: true
Mastery Level:
  - 📗
Time Taken: 28
Space:
  - O(1)
Time: O(?)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "1000"
Area:
  - number_theory
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-12-15, 16:16
Last Date: 2023-12-15T16:58:36+08:00
tags:
  - cp
---
[Original Problem](https://codeforces.com/problemset/problem/177/B1)
## Idea
---
- The idea here is create a matrix with *minimum rows* at every round, so we are able to get the *maximised value from the number of columns*
- So assume we have `n` pebbles, the matrix is going to be `ab`, where `a` is the number of rows and `b` is the number of column. And both `a` and `b` are positive integers and are divisors of `n`
- So the goal now is to find the smallest `a` aka the smallest divisor of `n` aka the smallest [[Prime Number (质数)]] of the group of prime numbers that composites `n`
- The quotient of `n` is the number of columns aka the number of pebbles we gain and can be used in the next round
- We repeat this until `n` is 1 or less


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- Not creating any objects on the [[Address Space#Data Segment]]
### Time - O(?)
- I am not too sure, requires more readings on the time complexity of finding the next prime number
- But the solution takes `590 ms` to complete on codeforces
 

## Codes
---
### 1st Attempt (Java)
```java
import java.util.Scanner;

public class Solution {

  public static void main(String[] args) {
    // Read input data
    Scanner scanner = new Scanner(System.in);
    int n = scanner.nextInt();

    int res = n;
    int prime = 2;

    while (n > 1) {
      while (n % prime != 0) prime = nextPrimeGenerator(prime);
      n /= prime;
      res += n;
    }

    System.out.println(res);
  }

  // Helper functions
  public static boolean isPrime(int n) {
    for (int i=3; i<n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  public static int nextPrimeGenerator(int currPrime) {
    int nextPrime = currPrime + 1;
    while (!isPrime(nextPrime)) {
      nextPrime++;
    }
    return nextPrime;
  }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** *NIL*
- **What you could have done better:** Be more familiar with Number Theory
- **What you missed:** *NIL*
- **Ideas you've seen before:** [[Prime Number (质数)]]
- **Ideas you found here that could help you later:** Abstracting the problem into the a form that I can apply number theory concepts like Prime Number
- **Ideas that didn't work and why:** *NIL*