---
sthNew: true
Mastery Level:
  - 📗
Time Taken: 19
Space:
  - O(n)
Time: O(n)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "1000"
Area:
  - data structure
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-12-13, 21:36
Last Date: 2023-12-15T16:13:17+08:00
tags:
  - cp
---
[Original Problem](https://codeforces.com/contest/1907/problem/B)
## Idea
---
- The idea here is to maintain 2 [[Stack]], one for *lowercase*, one for *uppercase*. The stack keeps track the index of the elements that aren't `b` or `B`
- When we see a `b` or `B`, we just delete the first element from the corresponding stack by replacing the element at that index with either `b` or `B`
- Then we loop the original string, add characters that aren't `b` and `B` to form a new string which is the final answer


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(n)
- *Ignore input size & language dependent space*
- We are maintaining 2 [[Stack]]
### Time - O(n)
- One loop to serialise the given string
- One loop to form the final answer string
 

## Codes
---
### 1st Attempt (Java)
```java
import java.util.Scanner;
import java.util.Stack;

public class Solution {
  public static void main(String[] args) {
    // Read input meta data
    Scanner scanner = new Scanner(System.in);
    int t = scanner.nextInt();
    scanner.nextLine();
    

    for (int i=0; i<t; i++) {
      char[] s = scanner.nextLine().toCharArray();

      Stack<Integer> lowerCase = new Stack<>();
      Stack<Integer> upperCase = new Stack<>();

      for (int j=0; j<s.length; j++) {
        if (s[j] == 'b' && lowerCase.size() > 0) {
          s[lowerCase.pop()] = 'b';
          continue;
        }
        if (s[j] == 'B' && upperCase.size() > 0) {
          s[upperCase.pop()] = 'B';
          continue;
        }
        if (s[j] >= 'a' && s[j] <= 'z') {
          lowerCase.push(j);
        } else {
          upperCase.push(j);
        }
      }
      
      StringBuilder sb = new StringBuilder();
      for (int j=0; j<s.length; j++) {
        if (s[j] != 'B' && s[j] != 'b') sb.append(s[j]);
      }
      System.out.println(sb.toString());
    }
  }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** *NIL*
- **What you could have done better:** *NIL*
- **What you missed:** *NIL*
- **Ideas you've seen before:** [[Stack]], last in first out property
- **Ideas you found here that could help you later:** Understand the properties of [[Data Structure]] well
- **Ideas that didn't work and why:** *NIL*