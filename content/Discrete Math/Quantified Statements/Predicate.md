---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-11-21T11:25:00
Last Date: 2024-02-22T13:29:25+08:00
References: 
sr-due: 2024-04-01
sr-interval: 39
sr-ease: 270
---
## Abstract
---
- Also known as **Propositional Functions** & **Open Sentences**
- Predicate is a function([[#Predicate Symbol]]) that accepts a valid input to its [[#Predicate Variable]] and return either **true** or **false**
- Example: let $P()$, the predicate symbol stands for `is a student at NUS` and $x$ be the predicate variable. Together, we get $P(x)$ which stands for $x$ `is a student at NUS`


>[!caution] Dynamic Truth Value
>Depends on the values we substituted to the Predicate Variable

>[!caution] Not a Mathematical Statement
>Only becomes a [[Mathematical Statement]] when specific values are substituted to the Predicate Variable, and we call it **Closed Predicate**. Otherwise **Open Predicate**

>[!caution] Predicate is not a Predicate Variable
> Can't be used as a Predicate Variable that is substituted into Predicate Symbol like $P()$. Because Predicate is meant to return either `true` or `false` with value substituted 

### Predicate Variable
- Holds value that determines if [[Predicate]] is **true** or **false**
>[!caution] Not a Mathematical Statement
>It doesn't hold the value of **true** or **false**! Only [[Mathematical Statement]] can be **true** or **false**
### Predicate Symbol
- Represents a property or [[Relation]]

### Domain of Predicate Variable
- The set of all values that may be substituted in place of the [[#Predicate Variable]]
- Also known as **Domain of Discourse**, **Universe of Discourse**, **Universal Set** & **Universe**
### Truth Set
- The set of values in [[#Domain of Predicate Variable]] substituted to [[#Predicate Variable]] that makes the [[Predicate]] return true
- Detonated by ${x \in D \mid P(x)}$, meaning a particular value $x$ is an element of the Domain of Predicate Variable, such that the **Closed Predicate** is `true`

## Quantifiers
---
- Instead of manually assign a specific value to [[#Predicate Variable]] to obtain a [[Mathematical Statement]]
- **Quantifiers** is another way to specify **how many** of a particular type of values that can make the [[Predicate]] a **closed predicate**
- There are 2 types, represented with either  $\forall$ or $\exists$

>[!caution] Order of Quantifiers
>Unless the **Quantifiers** are of the **same type**. Otherwise, the meaning is different
>
> Given $P(x,y)$ is **x loves y**
> 1. $\forall x \exists y, P(x,y)$  in english: For all people x, there is a person y such that x loves y.
> 2. $\exists y \forall x, P(x,y)$ in english: There is a person y such that all people x, x loves y. 
>    
> - The first one means for everyone (you, me, he), there is someone we love
> - The second one means there is someone who is loved by everyone (you, me, he)

>[!info] Multiply-Quantified
> Predicate with more than one Quantifiers

>[!info] Implicitly Quantified
> The Quantifiers are assumed without specified explicitly

 

