---
sthNew: true
Mastery Level:
  - 📙
Time Taken: 22
Space:
  - O(1)
Time: O(1)
Appears On:
  - Grind 75
Brush: 2
Difficulty:
  - Medium
Area:
  - data structure
Reference 1: 
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2023-02-28T11:11:00
Last Date: 2024-01-06T18:36:10+08:00
tags:
  - cp
draft: 
---
[Original Problem](https://leetcode.com/problems/valid-sudoku/description/)
## Idea
---
### Consensus
- A Sudoku board (partially filled) could be valid but is not necessarily solvable
- Only the filled cells need to be validated according to the mentioned rules
- So we just need to make sure the `row`, `col` and each `9-cells box` are valid


### Conclusion
- Just check if `row`, `col` and each `9-cells box` are valid respectively
- Return `false`, if we have an element appears more than once in a single `row` or `col` or `9-cells box`
- We consolidated the validating logic into `public boolean check(int rIdx, int cIdx, int range, boolean rowOrder, char[][] board){} {:java}`


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(1)
- *Ignore input size & language dependent space*
- We are just using a fixed-size `freq` [[Array]] that is size 9
### Time - O(1)
- We are looping through the array 3 times to make sure `row`, `col` and each `9-cells boxe` are valid, and each loop through processes exactly $9 \times 9 = 81 \space elements$
 

## Codes
---
### 2nd Attempt (Java)
```java
class Solution {
    public boolean isValidSudoku(char[][] board) {
        if (!check(0, 0, 9, true, board)) return false;

        if (!check(0, 0, 9, false, board)) return false;

        for (int r=0; r<=6; r+=3) {
            for (int c=0; c<=6; c+=3) if (!check(r, c, 3, true, board)) return false;
        }

        return true;
    }

    public boolean check(int rIdx, int cIdx, int range, boolean rowOrder, char[][] board) {
        char[] freq = new char[10];

        for (int i=0; i<range; i++) {
            for (int j=0; j<range; j++) {
                char currChar = rowOrder ? board[i+rIdx][j+cIdx] : board[j+rIdx][i+cIdx];
                if (currChar == '.') continue;

                int charValIdx = currChar - '1';
                if (freq[charValIdx] == '1') return false;
                freq[charValIdx] = '1';
            }
            if (range == 9) Arrays.fill(freq, '0');
        }

        return true;
    }
}   
```

## Personal Reflection
---
- **Why it takes so long to solve:** *NIL*
- **What you could have done better:** Read the question more carefully
- **What you missed:** Sudoku board (partially filled) could be valid but is not necessarily solvable
- **Ideas you've seen before:** Matrix manipulation
- **Ideas you found here that could help you later:** Matrix manipulation
- **Ideas that didn't work and why:** [[Backtracking]] to check if the problem is solvable. We just need to validate the Soduku, we don't need to solve it, it takes too much resources to do do