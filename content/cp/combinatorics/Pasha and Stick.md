---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space:
  - O(1)
Time: O(1)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "1000"
Area:
  - combinatorics
Reference 1: https://codeforces.com/blog/entry/22341
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-12-26, 14:54
Last Date: 2023-12-26T23:30:10+08:00
tags:
  - cp
draft: 
---
[Original Problem](https://codeforces.com/contest/610/problem/A)
## Idea
---
- The idea here is that the perimeter of a rectangle must be *an even number* `2k`, where `k` is an [[Integer (整数)]]. Because there are 2 pairs of `height+width` which is `k` to fit into the definition of even number
- Thus, we can return `0` straight 
- Otherwise, we can obtain `k` by dividing the given `n` by 2
- Remember `k` is `height+width`, so if `k` is `10`, the possible combination of `height` and `width` is `(1,9)`, `(2,8)`, `(3,7)`, `(4,6)` and `(5,5)`
- We not including `(6,4)` because it is same as `(6,4)`. The order doesn't matter
- We can observe that after the midpoint `5`, it starts to repeat itself
- So we can conclude that the possible combination of `height` and `width` given `k` is `k/2` (rounding down)
- Since we don't want square, which means the `height` and `width` are the same -> `(5,5)`, `k=10`, and this can only happen when `k%2 = 0` aka `k` can be split into 2 equal values
- Thus, we minus 1 to the final answer if `k%2 = 0`

## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- We aren't creating any objects on the [[Address Space#Data Segment]]
### Time - O(1)
- No looping is needed to loop through all possible pairs of `height` and `width` by leveraging on the beauty of counting 
 

## Codes
---
### 1st Attempt (Java)
```java
import java.util.Scanner;

public class Solution {
  public static void main(String[] args) {
    // Read input data
    Scanner scanner = new Scanner(System.in);

    int n = scanner.nextInt();
    int res = 0;

    if (n % 2 == 1) {
      System.out.println(res);
      return;
    }

    int widthHeight = n/2;

    res = widthHeight/2;
    if (widthHeight % 2 == 0) res--;

    System.out.println(res);
  }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** simply unfamiliar with combinatorics and failed to make basic deduction that the perimeter of rectangle must be even
- **What you could have done better:** Practice more combinatorics and read about counting in [[Discrete Math]]
- **What you missed:** perimeter of rectangle must be even and using counting to come out an answer in constant time instead of loop through each possible pair of `height` and `width`
- **Ideas you've seen before:** the definition of even number, `2k` where `k` is an [[Integer (整数)]]
- **Ideas you found here that could help you later:** the beauty of counting in combinatorics
- **Ideas that didn't work and why:** Looping through each possible pair of `height` and `width`. This takes linear time and it leads to timeout