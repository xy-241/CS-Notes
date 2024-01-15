---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - number_theory
Creation Date: 2023-12-15, 15:53
Last Date: 2024-01-15T10:34:34+08:00
References: 
---
## Abstract
---
- An *positive integer* whose divisor is `1` and itself, and itself cant be `1`
- 2 is the smallest prime number
- We can check if an integer is prime by checking if it has any divisor that is between 2 and itself

### Fundamental Theorem of Arithmetic
- States that **every integer** greater than 1 can be represented **uniquely** as **a product of prime numbers**
- [[Prime Number (质数)]] is like the **atomic [[Factor]]** in this case, and thus adhere to [[Factor#Factor Maximum Value]]

## Applications
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
- `i <= Math.sqrt(n)` because prime number is a [[Factor]], see [[#Fundamental Theorem of Arithmetic]]
### Prime Number Generator
We can obtain the next prime of a given integer by keep incrementing the given integer and perform [[#Prime Number Verification]] until we obtain a prime number

```java
public static int nextPrimeGenerator(int currPrime) {
    int nextPrime = currPrime + 1;
    while (!isPrime(nextPrime)) nextPrime++;
    return nextPrime;
}
```


## Theorem
---
### Set of Primes is Infinite
- There is an infinite number of [[Prime Number (质数)]]