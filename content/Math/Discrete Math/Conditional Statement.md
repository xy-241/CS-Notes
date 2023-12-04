---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-10-20T15:42:00
Last Date: 
References:
---
## Abstract
- Given `P`: it rains, `Q`: the floor is wet
- Compound Statement `P -> Q`: If it rains, then the floor is wet
>[!caution]
>- If it doesn't rain, then the floor can be either wet or no wet
- ***The floor MUST be wet if it rains***
- *Logically Equivalent* to `~P OR Q`

| P   | Q   | P -> Q | ~P OR Q |
| --- | --- | ------ | ------- |
| 0   | 0   | 1      |     1    |
| 0   | 1   | 1      |      1   |
| 1   | 0   | 0      |       0  |
| 1   | 1   | 1      |      1   |


## Terminologies 
### Hypothesis/Antecedent
- After `if`
### Conclusion/Consequent
- After `then`
### Vacuously True
- True by default 
- When the "if" part of an if-then statement is false, then statement as a whole is said to be true regardless of whether the conclusion is true of false
### Implication Law
- Convert `->` to `OR` 
- Useful when we need to perform [[Mathematical Proof#Proof by Contradiction (反证法)]] on *Conditional Statement*
### Converse (相反)
- Compound Statement `Q -> P`: If the floor is wet, then it rains
- When the floor isn't wet, it can still rain or doesn't rain
- ***It must rain IF the floor is wet***

| Q   | P   | Q -> P |
| --- | --- | ------ |
| 0   | 0   | 1      |
| 1   | 0   | 0      |
| 0   | 1   | 1      |
| 1   | 1   | 1      |
### Inverse (对立)
- Compound Statement `~P -> ~Q`: if it doesn't rain, then the floor isn't wet
- When it does rain, the floor can be wet or cant be wet
- ***The floor must NOT BE WET IF it isn't raining***
- *Logically Equivalent* to [[#Converse]]

| P   | Q   | ~P  | ~Q  | ~P -> ~Q |
| --- | --- | --- | --- | -------- |
| 0   | 0   | 1   | 1    |        1  |
| 0   | 1   | 1    | 0    |        0  |
| 1   | 0   |  0   |  1   |     1     |
| 1   | 1   |   0  |   0  |      1    |
### Contrapositive (反证)
- Compound Statement `~Q -> ~P`: If the floor isn't wet, then it doesn't rain 
- It must not rain if the floor isn't wet
- *Logically Equivalent* to *Standard Conditional Statement*

| Q   | P   | ~Q  | ~P  | ~Q -> ~P |
| --- | --- | --- | --- | -------- |
| 0   |  0   |  1   |   1  |   1       |
| 1   |   0  |   0  |    1 |    1      |
| 0   |    1 |    1 |    0 |      0    |
| 1    |    1 |    0 |    0 |    1      |
### Bi-conditional
- `p <-> q`, `if AND only if`, `iff`
### Sufficient Condition
- `r` is a sufficient condition for `s`, `r -> s`
### Necessary Condition
- `r` is a necessary condition for `s`, `s -> r`