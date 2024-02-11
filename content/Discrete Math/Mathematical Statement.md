---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-11-02T22:09:00
Last Date: 2024-02-11T21:49:47+08:00
References: 
sr-due: 2024-02-13
sr-interval: 3
sr-ease: 250
---
## Abstract
---
- Also known as **Proposition** 
- **Can be presented with variables** like `p`, `q`, `r` & `s` which return either `True` or `False` etc
- 3 important types are [[#Universal]], [[Conditional Statement]] & [[#Existential]]. We can form **complex statements** that are made of more than one type

>[!tip] Keep It Atomic
>This makes the cognitive load low, easier to build on top of the statement, especially for [[Mathematical Proof]] that is complicated

>[!caution]
>1. [[Predicate]] without value substituted to its [[Predicate#Predicate Variable]] isn't statement, unless it is [[Propositional Logic#Logical Equivalence]] equation that involves predicate. For example $\neg(\forall x, P(x)) \equiv \exists x, \neg P(x)$
>2. Not in a question form
>3. Either `True` or `False`, but not both at the same time

## Universal
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
- `There is AT LEAST ONE that IS NOT`


### Universal Conditional
$$
\forall x (if~P(x) \rightarrow Q(x))
$$
- Made of [[#Universal]] & [[Conditional Statement]]
  
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

## Existential
---
- Made of [[Predicate#Predicate Symbol]], [[Predicate#Predicate Variable]] & [[Predicate#Quantifiers]]
$$
\exists x \in D, Q(x)
$$
- `true` iff `Q(x)` is `true for at least one x` in `D`
- `false` iff `Q(x)` is `false for all x` in `D` 
- For simple ones, usually existential comes with [[Mathematical Statement#Logical Connectives|Conjunction]]

### Negation of Existential
$$
\neg(\exists x \in D, Q(x)) \equiv \forall x \in D, \neg  Q(x)
$$
- Negation of existential is [[Propositional Logic#Logical Equivalence]] to [[#Universal]]
- `ALL ARE NOT`





## Terminologies
---
### Logical Connectives 
- Negation: `NOT` performed first
- Disjunction: `OR` ,Conjunction: `AND` coequal, make sure proper parentheses is used to avoid [[Propositional Logic#Ambiguous]]
- If-then/implies: performed last, coequal with `iff`

### Statement/Propositional Form
- Make up with [[#Statement]] variables & [[#Logical Connectives]]
### Compound Statement
- Make up with [[#Statement]] variables & [[#Logical Connectives]]

>[!tip] Simplification
>When the statement has [[Conditional Statement]], convert it using [[Conditional Statement#Implication Law]] to make it much less confusing


### Tautology `t`
- [[Mathematical Statement]] that is **always true** 
### Contradiction `c`
- [[Mathematical Statement]] that is **always false**




