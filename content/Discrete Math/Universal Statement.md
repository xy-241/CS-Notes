---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-02-13, 13:45
Last Date: 2024-02-13T13:53:44+08:00
References: 
draft: 
description: 
---
## Abstract
---
$$
\forall x \in D, Q(x)
$$
- Made of [[Predicate#Predicate Symbol]], [[Predicate#Predicate Variable]] & [[Predicate#Quantifiers]]
- `true` iff `Q(x)` is `true for every x` in `D`
- `false` iff `Q(x)` is `false for at least one x` in `D` 
- For simple ones, usually universal comes with [[Conditional Statement]]

### Negation of Universal
$$
\neg(\forall x \in D, Q(x)) \equiv \exists x \in D, \neg  Q(x)
$$
- Negation of Universal is [[Propositional Logic#Logical Equivalence]] to [[#Existential]]
- The above [[Predicate]] means `There is AT LEAST ONE that IS NOT`

### Universal Conditional
$$
\forall x (if~P(x) \rightarrow Q(x))
$$
- Made of [[Universal Statement]] & [[Conditional Statement]]
  
  >[!tip] Simplification
  > The above statement can be reduced to $\forall x \in P, Q(x)$

### Negation of Universal Conditional
- Make use of [[#Negation of Universal]] & [[Conditional Statement#Implication Law]]

### Vacuous Truth of Universal
- Given the statement: `All balls in the bowl are blue`, however `no balls in the bowl`. The statement is vacuously true, because the [[#Negation of Universal]] is `One of the balls in the bowl isn't blue` which is **obviously false**

### Vacuous Truth of Universal Conditional
- Given $\forall x \in D, P(x) \rightarrow Q(x)$
- It is **Vacuously True** if and only if `P(x)` is false `for every x in D`
- [[#Vacuous Truth of Universal]] also applies here for the [[Predicate#Quantifiers]] part

