---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - boolean_algebra
  - computer_organisation
Creation Date: 2023-09-21T10:01:00
Last Date: 
References:
---
## Abstract
---
- Returns true only when 2 inputs aren't the same
![[XOR.png]]

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


## Terminologies
---
### Self-Inverse
- `a ^ a = 0`
### Own-Inverse
- `a ^ b ^ b = a`
- Because [[#Self-Inverse]], `b ^ b = 0`