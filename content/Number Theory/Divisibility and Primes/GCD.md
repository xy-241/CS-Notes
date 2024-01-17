---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - number_theory
Creation Date: 2023-12-18, 21:23
Last Date: 2024-01-17T16:35:22+08:00
References: 
---
## Abstract
---
- Stands for **Greatest Common Divisor**
- Also known as  **Greatest Common Factor(GCF)**
- The largest positive [[Integer (整数)]] that is a [[Factor]] of both two or more integers

>[!tip] Zero
>The GCD of `0` and another number is another number, since `0` divided by any number results in a remainder of `0`

### GCD 1
- This means there isn't a single common [[Prime Number (质数)]] [[Factor]] between the two numbers
### Find GCD by Listing Factors
- Write out the [[Prime Number (质数)]] of each [[Integer (整数)]] and identify the prime numbers that appears in both. The [[GCD]] is the product of the common set of prime numbers
- **Not efficient**

### Find GCD by Euclidean Algorithm
- The **efficient way** of finding [[GCD]]
- To find GCD between 2 [[Integer (整数)]] - `a` & `b`, where `a>=b`. We can conclude that `a = bq + r`, where `q` and `r` are integers
- The Euclidean Algorithm states that
$$
GCD(a, b) = GCD(b, r)
$$
- When `r` in `a = bq + r` is `0`, `b` is be the GCD
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
- So since `d|r`, and `d|b`, we can reduce the range by finding `gcd(r, b)`
