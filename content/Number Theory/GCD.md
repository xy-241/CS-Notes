---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - number_theory
Creation Date: 2023-12-18, 21:23
Last Date: 2023-12-18T21:44:23+08:00
References: 
---
## Abstract
---
- Stands for *Greatest Common Divisor*
- Also known as  *Greatest Common Factor(GCF)*
- The largest positive [[Integer (整数)]] that is a factor of both two or more integers


## Find GCD
---
There are mainly 2 ways to find [[GCD]]

### List Factors
- Write out the [[Prime Number (质数)]] of each [[Integer (整数)]] and identify the prime numbers that appears in both. The [[GCD]] is the product of the common set of prime numbers
- *Not efficient*

### Euclidean Algorithm
- The *efficient way* of finding [[GCD]]
- To find GCD between 2 [[Integer (整数)]] - `a` & `b`, where `a>=b`. We can conclude that `a = bq + r`, where `q` and `r` are integers
- The Euclidean Algorithm states that
$$
GCD(a, b) = GCD(b, r)
$$
- When `r` in `a = bq + r` is `0`, `b` is be the GCD
- The `gcd()` function implemented with [[Recursion]]
```java
public static int gcd(int a, int b) {
  int r = a%b;
  if (r == 0) return b;
  return gcd(b, r);
}
```
- [Euclidean Algorithm Proof](https://youtu.be/cOwyHTiW4KE?si=hwuNs4Fg1olBe1tf&t=257)
