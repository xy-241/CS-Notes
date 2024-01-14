---
sthNew: true
Mastery Level:
  - 📙
Time Taken: 
Space:
  - O(n)
Time: O(nm)
Appears On:
  - Grind 75
Brush: 4
Difficulty:
  - Medium
Area:
  - dynamic_programming
  - 力扣加加
Reference 1: https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/medium/139.word-break
Reference 2: 
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
Creation Date: 2022-10-31T10:26:00
Last Date: 2024-01-14T15:01:58+08:00
tags:
  - cp
draft: 
---
[Original Problem](https://leetcode.com/problems/word-break)
## Approach
---
### Consensus
- Given a string `s` and an [[Array]] of strings `wordDict`
- We want to use the strings from `wordDict` to form `s`
- We can reuse the strings from `wordDict` as many times as we want

### Main Idea
- If we observe carefully, we can find there is a [[Dynamic Programming#Optimal Substructure (最优子结构)]]
- For example, given `xxxsee`, and we have `see` inside `wordDict`, in order for us to create `xxxsee`, we need to be sure `xxx` is inside `wordDict` or can be made up of strings from `wordDict`. Thus, `xxx` is the substructure of the problem and checking if we are able to make up `xxx` gives us the optimal substructure 
- We can use an array to keep track the state of each substructure - `dp[]`
</br>

- So where should we start?
- **Base Case:** We should start when `s` is empty, when it is empty, we can definitely create it, it is like we can get anything free without putting in anything
</br>

- Ok, so how can we progress on?
- We loop through the `s` from left to right, then in each loop we calculate the substring
- So is `s` is `xxxsee`, we get 6 loops, and 6 substrings
	- `x`
	- `xx`
	- `xxx`
	- `xxxs`
	- `xxxse`
	- `xxxsee`
- For each substring, we loop through all the strings inside `wordDict`, let each string be `word`. If the string is bigger than the substring, then we can check the next string. Since it is 100% impossible to create a shorter string with a longer string
- Else we can check if the `substring - word` is valid and `word` exists in `s` at the same position. Example: substring is `xxxsee`, `word` is `see` `substring - word` is `xxx` aka the substructure
- If the substructure is true, and `word` exists inside `s` at the same position, then, we can definitely make up the substring
</br>

- The answer is simply to check the state of the substructure which is the full `s` from `dp[]`

### Conclusion
- The idea here is to see that the current segment of string aka substructure is built on-top of the previous sub-segment of `s`


## Space & Time Analysis
---
The analysis method we are using is [[Algorithm Complexity Analysis]]
### Space - O(n)
- *Ignore input size & language dependent space*
- We are using an [[Array]] to keep track of the if we are able to using the string from `wordDict` to construct that particular sub-segment
### Time - O(nm)
- n is the length of `s` and m is is the size of `wordDict`
- We need to go through each character of `s`, and each character is used as the endpoint of that particular sub-segment, and we need to loop through all strings inside `wordDict` to check if we can create that particular sub-segment (Pruning, when a word match is found, we can terminate the wordList loop, and move to the next sub-segment)
 

## Codes
---
### 4th Attempt (Java)
```java
class Solution {
    HashSet<String> wordSet;
    StringBuilder sb;
    public boolean wordBreak(String s, List<String> wordDict) {
        sb = new StringBuilder(s);
        boolean[] dp = new boolean[s.length()+1];
        dp[0] = true;

        for (int i=1; i<=s.length(); i++) {
            for (String word: wordDict) {
                int startIndex = i-word.length();

                if (startIndex < 0) continue;

                if (dp[startIndex] && sb.substring(startIndex, i).equals(word)) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[s.length()];
    }
}
```

## Personal Reflection
---
- **Why it takes so long to solve:** Unable to think the question in the [[Dynamic Programming]] mindset， seeing the [[Dynamic Programming#Optimal Substructure (最优子结构)]]
- **What you could have done better:** Practice more
- **What you missed:** each sub-segment of `s` is the optimal substructure(最优子结构)
- **Ideas you've seen before:** optimal substructure(最优子结构)
- **Ideas you found here that could help you later:** if a current segment depends on the previous segment, maybe can think about optimal substructure(最优子结构) and dynamic programming 
- **Ideas that didn't work and why:** [[Backtracking]], it takes too much time which leads to time exceed error