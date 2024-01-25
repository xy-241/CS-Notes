---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - cp
Creation Date: 2023-12-29, 16:16
Last Date: 2024-01-25T13:20:53+08:00
References: 
draft: 
---
## Abstract
---
A collection of code templates to kickstart the journey of solving interesting problems on Codeforces!


## Java Code Template
---
**When there are multiple inputs in a single test case**
```java title="Solution.java"
import java.util.*;

public class Solution {
  static Scanner scanner = new Scanner(System.in);
  
  // Write your solution here
  public static void solve() {
    System.out.println("Write your solution inside the solve() method");
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
import java.util.*;
 
public class Solution {
  static Scanner scanner = new Scanner(System.in);
  
  // Write your solution here
  public static void solve() {
    System.out.println("Write your solution inside the solve() method");
  }
  
  public static void main(String[] args) {
    solve();
  }
}
```

**Test the program with test cases inside `input.txt`**
```bash
java Solution.java < input.txt
```

>[!tip]
>1. Make sure all inputs are read in in sequence 
>2. Use `long` to prevent integer overflow issue 