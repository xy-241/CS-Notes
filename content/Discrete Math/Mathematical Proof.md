---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-11-04T19:10:00
Last Date: 2024-02-15T17:02:35+08:00
References: 
---
## Abstract
---
- [[#Concise]], [[#Polished]] [[Mathematical Argument]] explaining the **validity** of [[Mathematical Statement]] 
- There are 2 types of proofs - [[#Direct Proof]] and [[#Indirect Proof (反证法)]]

## Direct Proof
---
- A method of proving a [[Mathematical Statement]] by starting with known facts ([[Discrete Math#Axioms (公理)]], definitions, or previously proven theorems) and using logical steps to directly show that the statement you want to prove is true

>[!caution] Only Applicable when there is a starting point
> Is difficult when the thing we want to proof has an **absence of a form** like **Irrationality of a number**, which is number that is hard to be expressed mathematically. In such cases, we can make use of [[#Indirect Proof (反证法)]] to obtain a starting point
### Proof by Deduction (演绎推理)
- [[#Direct Proof]]
- Used when the number of cases is **infinite**
- Use [[Discrete Math#Theorem (定理)|Theorem]] & [[Discrete Math#Axioms (公理)|Axioms]] to proof something
- Usually takes the form of - `To show that every element of a set satisfies a certain property, suppose x is a particular but arbitrarily chosen element of the set, and show that x satisfies the property`
>[!example]
>- Prove that the sum of any two even integers is even
>- Prove the sum of any two rational numbers is rational
### Proof by Exhaustion/Brute-force/Cases
- List down all the possible cases and check on all cases
- Useful there is a handful of possible cases

### Proof by Construction/Example
- A form of [[#Direct Proof]]
- For [[Existential Statement]], we can proof by providing an example that fulfil the conditions
## Indirect Proof (反证法)
---
- When [[#Direct Proof]] is hard to derive, we can try indirect proof

### Proof by Counterexample (反例法)
- An example that shows that a [[Mathematical Statement]] isn't always true. Useful for [[Universal Statement]]

### Proof by Contradiction (矛盾证明法)
- [[#Indirect Proof]]
- Proof the negation is true to proof the given [[Mathematical Proof]] false, vice versa
- Useful when it is hard to use [[#Direct Proof]], where the negated [[Mathematical Statement]] has form to proof
>[!example]
>- [[Integer (整数)#Theorem 4.6.1]]
>- Proof square root of 2 is irrational 

### Proof by Contraposition (逆否命证明法)
- Use when the [[Conditional Statement#Contrapositive (逆否命题)]] is easier to proof

## Terminologies
---
### Concise
- There is no irrelevant details
### Polished
- Should be the final drift
### Without Loss Of Generality (WLOG)
- Used before an assumption in a *proof* which narrows the *premise* to some special case
- And implies that proof for that case can be easily applied to all other cases
- To remove very similar proof, for example, `a` & `b` are two consecutive odd number. We need to proof the product of the 2 consecutive odd numbers is always odd
- we need to proof it correct for both `a<b` & `b<a` cases, we can remove proof for one of the cases using `WLOG`