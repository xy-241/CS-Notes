---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-10-23T08:54:00
Last Date: 2024-08-23T04:09:09+08:00
References: 
---
## Abstract
---
- A form of [[Mathematical Argument]] that is guaranteed to be [[Mathematical Argument#Valid|Valid]]
- Tools that enable [[Deductive Reasoning (演繹推理)]]


## Modus Ponens
---

|            | Case 1            |
| ---------- | ----------------- |
| Premise 1  | $p \rightarrow q$ |
| Premise 2  | $p$               |
| Conclusion | $q$               |


## Modus Tollens
---
- Denying the consequent, based on the idea of [[Conditional Statement#Contrapositive (逆否命题)]]

|            |                   |
| ---------- | ----------------- |
| Premise 1  | $p \rightarrow q$ |
| Premise 2  | $\neg q$          |
| Conclusion | $\neg p$          |



## Generalisation
---

|            | Case 1     | Case 2     |
| ---------- | ---------- | ---------- |
| Premise    | $p$        | $q$        |
| Conclusion | $p \lor q$ | $p \lor q$ |

## Specialisation 
---
- Allow us to discard some information to focus on things that we are interested

|            | Case 1      | Case 2      |
| ---------- | ----------- | ----------- |
| Premise    | $p \land q$ | $p \land q$ |
| Conclusion | $p$         | $q$         |

## Elimination
---

|            | Case 1     | Case 2    |
| ---------- | ---------- | --------- |
| Premise 1  | $p \lor q$ | $p\lor q$ |
| Premise 2  | $\neg q$   | $\neg p$  |
| Conclusion | $p$        | $q$       |

## Transitivity
---

|            | Case 1            |
| ---------- | ----------------- |
| Premise 1  | $p \rightarrow q$ |
| Premise 2  | $q \rightarrow r$ |
| Conclusion | $p \rightarrow r$ |

## Division into Cases
---
- The table below only shoes 2 cases, we can have more than 2 cases


|            | Case 1            |
| ---------- | ----------------- |
| Premise 1  | $p \lor q$        |
| Premise 2  | $p \rightarrow r$ |
| Premise 3  | $q \rightarrow r$ |
| Conclusion | $r$               |


## Contradiction Rule
---

|            |                            |
| ---------- | -------------------------- |
| Premise 1  | $\neg p \rightarrow false$ |
| Conclusion | $p$                        |


>[!important]
> If a **assumption** leads to a **contradiction**, then that **assumption** must be false. The core of [[Indirect Proof#Proof by Contradiction (矛盾证明法)]]


