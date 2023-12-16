---
sthNew: true
Mastery Level:
  - 📘
Time Taken: 
Space:
  - O(1)
Time: O(1)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "1100"
Area:
  - number_theory
Reference 1: https://codeforces.com/blog/entry/24160
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-12-16, 18:29
Last Date: 2023-12-16T19:07:29+08:00
tags:
  - cp
---
[Original Problem](https://codeforces.com/problemset/problem/630/J)
## Idea
---
- The idea here is around [[Prime Number (质数)]]
- Based on [[Prime Number (质数)#Fundamental Theorem of Arithmetic]]. So if a given integer is divisible by a group of [[Integer (整数)]], then the given integer must be divisible by the prime number that make up that group of integers

| divisor | prime components | magic number  |
| ------- | ---------------- | ------------- |
| 2       | 2                | 2             |
| 3       | 3                | 2,3           |
| 4       | 2,2              | 2,3,2         |
| 5       | 5                | 2,3,2,5       |
| 6       | 2,3              | 2,3,2,5       |
| 7       | 7                | 2,3,2,5,7    |
| 8       | 2,2,2            | 2,3,2,5,7,2   |
| 9       | 3,3              | 2,3,2,5,7,2,3 |
| 10      | 2,5              | 2,3,2,5,7,2,3              |
- Based on the above table we can obtain the *smallest integer* that is divisible  by all integers from 2 to 10 is 
$$
2 \times 3 \times 2 \times 5 \times 7 \times 2 \times 3 = 2520
$$
- **2520** is the magic number we are looking for
- The final answer is simply `n/2520`, if it is 3, then it means there is definitely a number that divisible by 2 and 1! With this observation, we can have a [[#Time - O(1)]]

## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- Not using any space on the [[Address Space#Data Segment]]
### Time - O(1)
- Regardless the value of n, we just need to perform a simple division to obtain the answer
 

## Codes
---
### 1st Attempt (Java)
```java
import java.util.Scanner;

public class Solution {

  public static void main(String[] args) {
    // Read input data
    Scanner scanner = new Scanner(System.in);
    long n = scanner.nextLong();

    int magicNum = 2520;

    long res = n/magicNum;
    System.out.println(res);
  }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** I try to loop through the elements one by one until `n`, checking if every element is divisible by 2520 or not. This is `O(n)` and it keeps lead to time out error
- **What you could have done better:** Try to see the problem from a high level overview to get useful observation
- **What you missed:** If a positive integer(`>=2`) is divisible by another positive integer(`>=2`), then the *quotient* is the total number of integer that is divisible by another integer. There other positive integers are in range of (`>=2` and `<=n`)
- **Ideas you've seen before:** [[Prime Number (质数)]] properties 
- **Ideas you found here that could help you later:** The idea that *quotient* is the the total number of integers within a range that is divisible by a particular integer
- **Ideas that didn't work and why:** Going through each integer and check if it is prime or not, this takes too much time, not feasible when `n` is huge