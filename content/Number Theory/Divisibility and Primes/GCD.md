---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - number_theory
Creation Date: 2023-12-18, 21:23
Last Date: 2024-02-21T13:23:33+08:00
References: 
---
## Abstract
---
- Stands for **Greatest Common Divisor**, also known as  **Greatest Common Factor(GCF)**
- The largest positive [[Integer (整数)]] that is a [[Factor]] for both two or more integers
- Basically a product of all the **common [[Prime Number (质数)]]** factor in the given set of integers

>[!tip] One of given integer is 0
>The GCD of `0` and another number $a$ is $a$, since `0` divided by any number results in a remainder of `0`

>[!tip] GCD is 1
> This means there isn't a single common [[Prime Number (质数)]] [[Factor]] between the two numbers



### Euclidean Algorithm
- The **efficient way** of finding [[GCD]]
- The Euclidean Algorithm states that
$$
GCD(a, b) = GCD(b, r)
$$
- Given 2 [[Integer (整数)]] - $a$ & $b$, where $a \ge b$. With the use of [[Divisibility (可除性)#Divisibility Mathematical Model]] $a = qb + r$,  when $r$ is $0$, $b$ is the GCD
- The `gcd()` function implemented with [[Recursion]], [[Algorithm Complexity Analysis#Worst Time Complexity]] is `O(logn)`
```java
public static int gcd(int a, int b) {
  if (b == 0) return a;

  int r = a%b;
  if (r == 0) return b;
  return gcd(b, r);
}
```
#### Proof
>[!attention] Not a very clear proof, just for better understanding
- [Euclidean Algorithm Proof Reference](https://youtu.be/cOwyHTiW4KE?si=hwuNs4Fg1olBe1tf&t=257)
- Let `d` be the GCD of `a` and `b` -> `d|a` and `d|b`
- And we know `a = bq + r`, so `r = a - bq`
- With `r = a - bq`, we are sure we can factor out a `d` from `a - bq`, since `d|a` and `d|bq`, since `q` is an [[Integer (整数)]]
- So since `d|r`, and `d|b`, we can reduce the range by finding `gcd(b, r)`

>[!info]- Brute-force Method: List Factors
> Write out the [[Prime Number (质数)]] of each given [[Integer (整数)]] and identify the prime numbers that appears in both. The [[GCD]] is the product of the common set of prime numbers