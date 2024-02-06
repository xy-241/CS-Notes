---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - boolean_algebra
  - computer_organisation
  - cp
Creation Date: 2023-09-21T10:01:00
Last Date: 2024-02-06T13:55:40+08:00
References: 
sr-due: 2024-02-08
sr-interval: 2
sr-ease: 230
---
## Abstract
---
$$
B - A = \{x \in U: x \in B \land x \notin A\}
$$
- **Exclusive OR**, **difference**
- Returns true only when 2 inputs aren't the same



### Self-Inverse
- $a\oplus a=0$

>[!info] XOR summation
>Given a list of [[Integer (整数)]] $[a_1,a_2,\ldots,a_{n-1},a_n]$, let $x$  be the XOR summation of the list of integers $x= a_{1}\oplus a_{2}\ldots\oplus a_{n-1}\oplus a_{n}$ , and then we put $x$ into the list. Shuffle the list randomly
>
>**Now when we pick the first element or a random element from the list, we are sure it is the XOR summation of the rest of the integers**
>
> **Proof** using [[Mathematical Proof#Proof by Exhaustion/Brute-force/Cases]] and **Self-inverse**, [[#Own-Inverse]] and [[Algebra Properties#Commutativity (交换律)]]. There are 2 possible outcomes of picking a random integer from the list
>1. $x$, $x$ is the XOR summation by definition
>2. $a_1$, $a_1$ is an integer that is in the given list
>	- For $a_1$ to be the XOR Summation of the rest of the elements, it must fulfil the following $a_{1}= a_{2}\oplus \ldots\oplus a_{n-1}\oplus a_{n}\oplus x$ 
>	- We can expand the $x$  at the RHS, and we get $(a_{2}\oplus \ldots\oplus a_{n-1}\oplus a_{n})\oplus (a_{1}\oplus a_{2}\ldots\oplus a_{n-1}\oplus a_{n})$ 
>	- We can re-arrange the RHS with commutativity, and we get $a_{1}\oplus a_{2}\oplus a_{2} \ldots\oplus a_{n-1}\oplus a_{n-1} \oplus a_{n}\oplus a_{n}$ 
>	- With Self-Inverse and [[#Own-Inverse]], we can reduce the RHS to $a_{1}$
>	- Since RHS is equal to LHS, $a_{1}= a_{2}\ldots\oplus a_{n-1}\oplus a_{n}\oplus x$  is valid. Thus $a_{1}$ is the XOR summation of the rest of the elements
>	  
>Practice problem: [Codeforces - XOR Mixup](https://codeforces.com/contest/1698/problem/A)

### Own-Inverse
- $a\oplus 0 = a$

>[!bigbrain] Chemistry with Self-Inverse
>Given $a\oplus b$, we can get back $a$ by $a\oplus b \oplus b$ . Because $b\oplus b = 0$ based on [[#Self-Inverse]], and $a\oplus 0 =a$ based on Own-Inverse
>```java title="Swapping values"
> public class MyClass {
>     public static void main(String args[]) {
>       int x=10;
>       int y=25;
>       
>       x = x ^ y; // x ^ x = y, x ^ y = x
>       y = x ^ y; // x
>       x = x ^ y; // y
> 
>       System.out.println("x: " + x);
>       System.out.println("y: " + y);
>     }
> }
> ```
> 

### Logic Gate Implementation
![[XOR.png|300]]
The [[Mathematical Statement]] is $(A \lor B) \land (\not A \lor \not B)$
1. [[OR]]: $A$ **or** $B$ must be true
2. [[AND]], [[NOT]] (De Morgan's laws): Either $A$ or $B$ are `false`
3. [[AND]]: The above 2 must be true in order to let the statement to be true

### XOR Bitmasking
- Flip a a [[Subnet]] of [[Computer Data Representation#Bit]] of the given input
```
     1 1 1 0 1 1 0 1     input
(^)  0 0 1 1 1 1 0 0      mask
------------------------------
     1 1 0 1 0 0 0 1    output
```
- The position of mask that is set to `1` flips the bits of the given input