---
sthNew: true
Mastery Level:
  - 📕
Time Taken: 
Space:
  - O(n)
Time: O(n+m)
Appears On:
  - Codeforces
Brush: 1
Difficulty:
  - "1300"
Area:
  - prefix_sum
  - greedy
Reference 1: https://codeforces.com/blog/entry/124890
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2024-01-24, 12:48
Last Date: 2024-01-24T13:23:47+08:00
tags:
  - cp
draft: 
description: Explore a Greedy Algorithm paired with a clever use of Prefix Sum to efficiently solve CodeForces problem 1922/C.
---
[Original Problem (CodeForces)](https://codeforces.com/problemset/problem/1922/C)
## Approach
---
### Consensus
- There are 2 ways to move around, one is left to right, another one is right right to left
- When we are moving in that particular direction, we check if the distance from current location to the next location is shorter than from current location to the previous location. If yes, then `1`, else we have to take the distance between the current location to the next location

### Details
- Finding the cost of travelling from current location to the next location can be solved easily with [[Greedy Algorithm]]
- Then for each start-end pair, we just need to **obtain the sum of the cost between the start location and the end location**
</br>

- If we observe carefully, obtaining the sum of cost between 2 locations. We can optimise the time complexity with [[Prefix Sum (前缀和)#O(1) Range Sum Query]]!
- But we need to mindful that instead of $Range[i, j] = P[j]- P[i-1]$, we use $Range[i, j] = P[j]- P[i]$, because we start from location $i$, the cost is $0$, we want to know what is the cost of travelling from location $i$ to location $j$, not travelling to $i$ until $j$
</br>

- The travelling from left to right is pretty straight forward, the tricky part is travelling from right to left
- For me, I set the prefix sum array in this way: index 0 means the cost of travelling from most right to most left, so the more right we move in the prefix sum, the smaller the cost
- Then when we are given a starting location(higher value) and end location(lower value), we simply `prefix_sum[end location]` - `prefix_sum[start location]` to obtain the cost. You can think of it like cost of travelling first 5 locations - cost of travelling first 3 locations = cost of travelling last 2 cities

### Conclusion
- The problem uses greedy algorithm, prefix sum (with a small twist) to solve


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(n)
- *Ignore input size & language dependent space*
- We are creating 2 [[Dynamic Array (List)]] to implement prefix sum
### Time - O(n + m)
- O(n) to populate the prefix sum, O(m) to handle all the pairs of starting location to ending location
 

## Codes
---
### 1st Attempt (Java)
```java
import java.util.Scanner;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
 
public class Solution {
  static Scanner scanner = new Scanner(System.in);
  public static void solve() {
    int n = scanner.nextInt();
    int[] cityDist = new int[n];
    for (int i = 0; i < n; i++) {
      cityDist[i] = scanner.nextInt();
    }

    // Forward Prefix
    List<Long> forwardCost = new ArrayList<>();
    forwardCost.add(0l);
    forwardCost.add(1l);
    for (int i = 2; i < n; i++) {
      long nextCity = cityDist[i];
      long currCity = cityDist[i - 1];
      long prevCity = cityDist[i - 2];

      boolean isNextCityCloser = (nextCity - currCity) < (currCity - prevCity);

      if (isNextCityCloser) {
        forwardCost.add(forwardCost.get(i - 1) + 1);
      } else {
        forwardCost.add(forwardCost.get(i - 1) + (nextCity - currCity));
      }
    }

    // Backward Prefix
    List<Long> backwardCost = new ArrayList<>();
    backwardCost.add(0l);
    backwardCost.add(1l);
    int currIndex = 2;
    for (int i = n-2; i > 0; i--) {
      long nextCity = cityDist[i-1];
      long currCity = cityDist[i];
      long prevCity = cityDist[i + 1];

      boolean isNextCityCloser = (currCity-nextCity) < (prevCity-currCity);

      if (isNextCityCloser) {
        backwardCost.add(backwardCost.get(currIndex-1) + 1);
      } else {
        backwardCost.add(backwardCost.get(currIndex-1) + (currCity - nextCity));
      }
      currIndex++;
    }
    Collections.reverse(backwardCost);

    int m = scanner.nextInt();

    for (int i=0; i < m; i++) {
      int l = scanner.nextInt()-1;
      int r = scanner.nextInt()-1;

      boolean isForward = l < r;

      if (isForward) {
        System.out.println(forwardCost.get(r) - forwardCost.get(l));
      } else {
        System.out.println(backwardCost.get(r) - backwardCost.get(l));
      }
    }
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

## Personal Reflection
---
- **Why it takes so long to solve:** I keep getting Timeout Error with just the [[Greedy Algorithm]]. I failed to see that with [[Prefix Sum (前缀和)]], we are able to obtain the cost of travelling from one city to another in constant time
- **What you could have done better:** Practice more on prefix sum, and be dead comfortable with [[Prefix Sum (前缀和)#O(1) Range Sum Query]]
- **What you missed:** Prefix Sum
- **Ideas you've seen before:** Greedy and prefix sum
- **Ideas you found here that could help you later:** Prefix sum's range sum query
- **Ideas that didn't work and why:** just greedy algorithm alone, the time complexity is too large 