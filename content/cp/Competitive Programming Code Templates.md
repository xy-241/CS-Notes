---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - cp
Creation Date: 2023-12-29, 16:16
Last Date: 2023-12-29T16:23:53+08:00
References: 
draft: 
---
## Abstract
---
- A collection of code templates to kickstart the 


## Codeforces
---
### Java Code Template
**When there are multiple inputs in a single test case**
```java title="Solution.java"
import java.util.Scanner;

public class Solution {
  static Scanner scanner = new Scanner(System.in);
  
  // Write your solution here
  public static void solve() {
    System.out.println("Hello world");
  }
  
  public static void main(String[] args) {
    int t = scanner.nextInt();
    scanner.nextLine();
    
    while(t-- > 0) {
      solve();
    }
  }
}
```

**When there is only a single input in a given test case**
```java title="Solution.java"
import java.util.Scanner;
 
public class Solution {
  static Scanner scanner = new Scanner(System.in);
  
  // Write your solution here
  public static void solve() {
    System.out.println("Hello world");
  }
  
  public static void main(String[] args) {
    solve();
  }
}
```