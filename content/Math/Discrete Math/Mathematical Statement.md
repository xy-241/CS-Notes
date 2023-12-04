---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-11-02T22:09:00
Last Date: 
References:
---
## Abstract
- Also known as *Proposition* 
- 3 important types are [[#Universal]], [[#Conditional]] & [[#Existential]]
- We can form *statements* that are [[#Universal]] & [[#Conditional]], or more to form *complex statements*
- Either `True` or `False`
>[!caution] 
>- Doesn't depend on any *Variable*, unless it is [[Propositional Logic#Logical Equivalence]] equation
>- Not in a question form
## Different Types of Statements
### Universal
- Made of [[Predicate#Symbol]], [[Predicate#Variable]] & [[Predicate#Quantifiers]]
$$
\forall x \in D, Q(x)
$$
- `true` iff `Q(x)` is `true for every x` in `D`
- `false` iff `Q(x)` is `false for at least one x` in `D` 
- For simple ones, usually universal comes wiht [[Conditional Statement]]
### Existential
- Made of [[Predicate#Symbol]], [[Predicate#Variable]] & [[Predicate#Quantifiers]]
$$
\exists x \in D, Q(x)
$$
- `true` iff `Q(x)` is `true for at least one x` in `D`
- `false` iff `Q(x)` is `false for all x` in `D` 
- For simple ones, usually existential comes with [[Mathematical Statement#Logical Connectives|Conjunction]]
### Negation of Universal
- [[Propositional Logic#Logical Equivalence]] to [[#Existential]]
- `There is AT LEAST ONE that IS NOT`
- $$
\neg(\forall x \in D, Q(x)) \equiv \exists x \in D, \neg  Q(x)
$$
### Negation of Existential
- [[Propositional Logic#Logical Equivalence]] to [[#Universal]]
- `ALL ARE NOT`
- $$
\neg(\exists x \in D, Q(x)) \equiv \forall x \in D, \neg  Q(x)
$$
### Negation of Universal Conditional
- Make use of [[#Negation of Universal]] & [[Conditional Statement#Implication Law]]

### Universal Conditional
- Made of [[Predicate#Symbol]], [[Predicate#Variable]] & [[Predicate#Quantifiers]] & [[Conditional Statement]]
$$
\forall x (if \: P(x) \rightarrow Q(x))
$$
- Can be simplified to [[#Universal]]
$$
\forall x \in P, Q(x)
$$
### Conditional
- [[Conditional Statement]]
- If..., then...



## Terminologies
### Statement
- A sentence that is `True` or `False`, but not both
- Can be presented with variables like `p`, `q`, `r` & `s` etc
### Logical Connectives 
- Negation: `NOT` performed first
- Disjunction: `OR` ,Conjunction: `AND` coequal, make sure proper parentheses is used to avoid [[Propositional Logic#Ambiguous]]
- If-then/implies: performed last, coequal with `iff`

### Statement/Propositional Form
- Make up with [[#Statement]] variables & [[#Logical Connectives]]
### Compound Statement
- Make up with [[#Statement]] variables & [[#Logical Connectives]]
- When the statement has [[Conditional Statement]], convert it using [[Conditional Statement#Implication Law]] to make it much less confusing

### Tautology `t`
- [[#Statement/Propositional Form]] that is *always true* 
### Contradiction `c`
- [[#Statement/Propositional Form]] that is *always false*

### Implicitly Quantified
- The [[Predicate#Quantifiers]] are assumed without specified explicitly

### Vacuous Truth of [[#Universal]]
- Given the statement: `All balls in the bowl are blue`, however `no balls in the bowl`. The statement is vacuously true, because the [[#Negation of Universal]] is `One of the balls in the bowl isn't blue` which is obviously false
### Vacuous Truth of [[#Universal Conditional]]
- Given $$
\forall x \in D, P(x) \rightarrow Q(x)
$$
- It is *Vacuously True* if and only if `P(x)` is false `for every x in D`
- [[#Vacuous Truth of Universal]] also applies here

### Multiply-Quantified
- *Statement* with more than one [[Predicate#Quantifiers]]