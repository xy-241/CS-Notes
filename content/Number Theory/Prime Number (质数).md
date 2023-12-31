---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - number_theory
Creation Date: 2023-12-15, 15:53
Last Date: 2023-12-31T18:02:39+08:00
References: 
---
## Abstract
---
- An *positive integer* whose divisor is `1` and itself, and itself cant be `1`
- 2 is the smallest prime number
- We can check if an integer is prime by checking if it has any divisor that is between 2 and itself

## Trial Division Method
---
### Prime Number Verification
Verifying if an [[Integer (整数)]] is a [[Prime Number (质数)]] in `O(sqrt(n))`

```java
public static boolean isPrime(long n) {
  if (n <= 1) return false;
  for (long i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
```

### Find Minimal Greater-than-One Factor
- Find the minimal factor of a given integer that is `>1`
- If the function returns the given `n`, then the given `n` is [[Prime Number (质数)]]
```java
// Time Complexity - O(sqrt(n)), where n is the size of the integer
public static int minFactor(int n) {
  for (int i=2; i<=Math.sqrt(n); i++) {
    if (n%i == 0) return i;
  }

  // When we cant find factor that is bigger than 2 and smaller than n
  return n;
}
```

Visualisation why `i <= Math.sqrt(n) {:java}`. Basically `Math.sqrt(n) {:java}` is the upper limit for half of the possible factors
![[trial_division_method.png]]

## Prime Number Generator
---
We can obtain the next prime of a given integer by keep incrementing the given integer and perform the `isPrime()` using [[#Trial Division Method]] until we obtain a prime number

```java
public static int nextPrimeGenerator(int currPrime) {
    int nextPrime = currPrime + 1;
    while (!isPrime(nextPrime)) nextPrime++;
    return nextPrime;
}
```


## Theorem
---
### Fundamental Theorem of Arithmetic
- States that **every integer** greater than 1 can be represented **uniquely** as **a product of prime numbers**, up to the order of the factors
- [[Prime Number (质数)]] is like the *atomic unit* in this case
### Set of Primes is Infinite
- There is an infinite number of [[Prime Number (质数)]]