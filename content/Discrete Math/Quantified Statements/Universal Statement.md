---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-02-13, 13:45
Last Date: 2024-08-26T13:49:50+08:00
References: 
draft: 
description: 
---
## Universal Statement
---
$$
\forall x \in D, Q(x)
$$
- Made of [[Predicate#Predicate Symbol]], [[Predicate#Predicate Variable]] & [[Quantifier]]
- `true` iff `Q(x)` is `true for every x` in `D`
- `false` iff `Q(x)` is `false for at least one x` in `D` 
- For simple ones, usually universal comes with [[Conditional Statement]]

>[!important]
> $\forall x \in D, Q(x)$ is same as $Q(x_{1}) \land Q(x_{2}) \land \ldots \land Q(x_{n})$.

### Negation of Universal
$$
\neg(\forall x \in D, Q(x)) \equiv \exists x \in D, \neg  Q(x)
$$
- Negation of Universal is [[Propositional Logic#Logical Equivalence]] to [[Existential Statement]]
- The above [[Predicate]] means `There is AT LEAST ONE that IS NOT`

### Vacuous Truth of Universal
- Given the statement: `All balls in the bowl are blue`, however `no balls in the bowl`. The statement is vacuously true, because the [[#Negation of Universal]] is `One of the balls in the bowl isn't blue` which is **obviously false**

>[!important] Another perspective
> If you consider a [[Mathematical Argument#Premise|hypothesis]] as a [[Set|set]], when the set is an [[Common Sets#Empty Set|empty set]] (aka the hypothesis is false), the negation of the statement is that there exists at least one element in the set that contradicts the given universal statement. Since it is an empty set, there isn't such an element. Thus, an empty set or a false hypothesis will always result in a universal statement that is true.

## Universal Conditional
---
$$
\forall x (P(x) \rightarrow Q(x))
$$
- Made of [[Universal Statement]] & [[Conditional Statement]]

  
>[!tip] Simplified to universal statement
> The above universal conditional statement can be reduced to $\forall x \in P, Q(x)$ by narrowing down the [[Predicate#Domain of Predicate Variable]] $x$ with respect to $P(x)$. In essence, the new $x$ is the [[Predicate#Truth Set]] of $P(x)$.

### Negation of Universal Conditional
- Make use of [[#Negation of Universal]] & [[Conditional Statement#Implication Law]]

>[!important]
> Useful for [[Indirect Proof#Proof by Contradiction (矛盾证明法)]]!

### Vacuous Truth of Universal Conditional
- Given $\forall x \in D, P(x) \rightarrow Q(x)$
- It is **Vacuously True** if and only if `P(x)` is false `for every x in D`
- [[#Vacuous Truth of Universal]] also applies here for the [[Quantifier]] part

