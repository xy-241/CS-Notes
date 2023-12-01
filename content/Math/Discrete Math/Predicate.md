---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-11-21T11:25:00
Last Date: 
References:
---
## Abstract
- Also known as *Propositional Functions* & *Open Sentences*
- Truth value depends on [[#Variable]]
- Becomes a [[Mathematical Statement]] when specific values are substituted for [[#Variable]]
- Returns either `true` or `false`, thus cant be used as a [[#Variable]]
- Made of [[#Symbol]] & finite number of [[#Variable]]
- Example: let `P` stand for `is a student at NUS`, then `P(x) = x is a student at NUS`, where `x` is the [[#Variable]], `P` is the [[#Symbol]]



## Terminologies 
### Variable

### Symbol
### Quantifiers
- Instead of manually assign a specific value to [[#Variable]] to obtain a [[Mathematical Statement]]
- *Quantifiers* is another way, specific how many of a particular type of values that make the *predicate* true
$$
\forall
$$
$$
\exists
$$
### Order of [[#Quantifiers]]
- Unless the [[#Quantifiers]] are of the same type. Otherwise, the meaning is different
#### Example
1. For all people x, there is a person y such that x loves y
2. There is a person y such that all people x, x loves y
- The first one means for everyone (you, me, he), there is someone we love
- The second one means there is someone who is loved by everyone (you, me, he)
 
### Domain of Predicate Variable
- The set of all values that may be substituted in place of the [[#Variable]]
- Also known as *Domain of Discourse*, *Universe of Discourse*, *Universal Set* & *Universe*
### Truth Set
- The set of values in [[#Domain of Predicate Variable]] substituted to [[#Variable]] that makes the *Predicate* true
- Detonated by, meaning value of `x` is an element of the [[#Domain of Predicate Variable]], such at the *Predicate* is `true`
$$
{x \in D \mid P(x)}
$$
