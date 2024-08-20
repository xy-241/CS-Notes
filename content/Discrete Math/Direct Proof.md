---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2024-08-19, 15:35
Last Date: 2024-08-19T16:58:46+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A method of proving a [[Mathematical Statement|mathematical statement]] by starting with known facts ([[Mathematical Statement#Axioms (公理)|axioms]], definitions, or previously proven [[Mathematical Statement#Theorem (定理)|theorems]]) and using logical steps to directly show that the statement in question is true


>[!important] Applicable only when there is a starting point
> It is difficult when the thing we want to prove has an **absence of form**, like the **irrationality of a number**, which is a number that is hard to express mathematically. In such cases, we can make use of [[#Indirect Proof (反证法)]] to obtain a starting point.

>[!example]
> - [[consecutive_odd_number_always _odd_proof.png|Prove that the product of two consecutive odd numbers is always odd]]

## Proof by Construction
---
- Also known as **Proof by Example**
- A form of [[#Direct Proof]] that proves the existence of a mathematical object by actually providing a concrete example

>[!important]
> For [[Existential Statement]], we can proof by providing an example that fulfil the conditions.

>[!example]
> - [[proof_by_construction_1.png|Prove there is an integer such that it is greater than 2 and (x^2 - 5x + 6 > 0)]]

## Proof by Exhaustion
---
- Also known as **Proof by Brute-force** or **Proof by Cases**
- List down all the possible cases and check on all cases

>[!important]
> Useful there is only a handful of possible cases.

>[!example]
> - [[proof_by_exhaustion_1.png|Prove that 6a is not divisible by 5 for an integer a between 1 and 4 inclusive]]
> - [[proof_by_exhaustion_2.png|Prove that the difference of two consecutive squares between 30 and 100 is odd]]
> - [[proof_by_exhaustion_3.png|Prove that there exist irrational numbers p and q such that p^q is rational]]



## Proof by Deduction (演绎推理)
---
- [[#Direct Proof]] that is used when the number of cases is **infinite**, with the help of [[Discrete Math#Theorem (定理)|Theorem]] & [[Discrete Math#Axioms (公理)|Axioms]] to prove something

>[!important]
> Usually takes the form of - `To show that every element of a set satisfies a certain property, suppose x is a particular but arbitrarily chosen element of the set, and show that x satisfies the property`.

>[!example]
> - [[proof_by_deduction_1.png|Prove that the difference of two consecutive squares is always odd]]
> - Prove that the sum of any two even integers is even
> - Prove the sum of any two rational numbers is rational
