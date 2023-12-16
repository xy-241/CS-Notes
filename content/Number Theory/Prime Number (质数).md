---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - number_theory
Creation Date: 2023-12-15, 15:53
Last Date: 2023-12-16T19:09:33+08:00
References: 
---
## Abstract
---
- An *positive integer* whose divisor is `1` and itself, and itself cant be `1`
- 2 is the smallest prime number
- We can check if an integer is prime by checking if it has any divisor that is between 2 and itself
```java
// Time Complexity - O(n), where n is the size of the integer
public static boolean isPrime(int n) {
	for (int i=3; i<n; i++) if (n % i == 0) return false;
	return true;
}
```
- Based on the above idea, we can obtain the next prime of a given integer by keep incrementing the given integer and perform the `isPrime()` until we obtain a prime number
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