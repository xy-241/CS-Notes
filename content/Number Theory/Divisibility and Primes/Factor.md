---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - number_theory
Creation Date: 2024-01-15, 10:02
Last Date: 2024-01-15T10:35:34+08:00
References: 
draft: 
---
## Abstract
---
- Also known as *divisor*
- A number that divides another number without leaving a remainder

### Factor Maximum Value
- [[Factor]] maximum value `<=` square root of a given number, below is a visualisation. It is also know as **Trial Division Method**
![[trial_division_method.png]]

### Find Minimal Greater-than-One Factor
Find the minimal factor of a given integer that is `>1`

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
- If the function returns the given `n`, then the given `n` is [[Prime Number (质数)]]
- For `i<=Math.sqrt(n)`, see [[#Factor Maximum Value]]