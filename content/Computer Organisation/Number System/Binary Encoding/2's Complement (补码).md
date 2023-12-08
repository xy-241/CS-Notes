---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-08-06T16:31:00
Last Date: 2023-12-08T21:52:41+08:00
References: 
---
## Abstract
- We are adding extra 1 to the [[1's Complement (反码)]], *positive number remain unchanged*
- This makes sure that there is only one `0` by adding 1 to after converting from [[Sign-and-Magnitude (原码)]] to [[1's Complement (反码)]]
- After computation, take the value [[Sign-and-Magnitude (原码)#Sign Bit]] (negative if it is `1`) and perform addition with value of whole [[Sign-and-Magnitude (原码)#Magnitude]] (all are positive)
- This is the form that computers use to store integers

![[2's Complement.png]]


## References
- [2's Complement Addition and Subtraction](https://www.youtube.com/watch?v=sJXTo3EZoxM)