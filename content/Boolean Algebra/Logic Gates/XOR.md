---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - boolean_algebra
  - computer_organisation
Creation Date: 2023-09-21T10:01:00
Last Date: 2023-12-24T17:08:01+08:00
References: 
---
## Abstract
---
- *Exclusive OR*, *difference*
$$
B - A = \{x \in U: x \in B \land x \notin A\}
$$
- Returns true only when 2 inputs aren't the same

![[XOR.png]]

## Properties
---
### Self-Inverse
- `a ^ a = 0`
- `a` [[XOR]] `a` is always 0
### Own-Inverse
- `a ^ b ^ b = a`
- W always get back the another half by [[XOR]] the another half one more time. Because [[#Self-Inverse]], `b ^ b = 0`

## Tricks
---
### Swapping values 
```java
public class MyClass {
    public static void main(String args[]) {
      int x=10;
      int y=25;
      
      x = x ^ y; // x ^ x = y, x ^ y = x
      y = x ^ y; // x
      x = x ^ y; // y

      System.out.println("x: " + x);
      System.out.println("y: " + y);
    }
}
```

