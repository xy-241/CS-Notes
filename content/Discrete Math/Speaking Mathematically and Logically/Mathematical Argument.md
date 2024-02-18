---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - discrete_math
Creation Date: 2023-11-04T19:24:00
Last Date: 2024-02-18T13:24:23+08:00
References: 
---
## Abstract
---
- A sequence of [[#Premise]] ending in a [[#Conclusion]]
- Every step should **follow logically** from all previous steps
- `IF (p AND ... p) THEN Conclusion` is a [[Mathematical Statement#Tautology]]
- An **argument** can be [[#Valid]], but if the Premise is not true, the Conclusion is going to be false

### Premise
- Also known as **Assumption** or **Hypothesis**
- A [[Mathematical Statement]]
### Conclusion
- A [[Mathematical Statement]] that must be true when all [[#Premise]] are true, in order for the [[Mathematical Argument]] to be [[#Valid]]



## Validity
---
### Critical Row
- A row of **Truth Table** in which all the [[#Premise]] are true
### Valid
- *Does the conclusion follow logically from the premises, regardless of whether those premises are actually true?*
- [[Mathematical Argument]] is said to be **Valid** if and only if whenever [[Mathematical Statement]] substituted that make all [[#Premise]] true, and the [[#Conclusion]] is also true 
- The conclusion logically follows from the premises. It doesn't guarantee that the premises themselves are actually true.
</br>

- There is [[#Critical Row]] in which Conclusion is false: **Invalid**
- The Conclusion in every Critical Row is true: **valid**
- For all non-critical rows, regardless is conclusion is true or false: **valid**

### Sound
- A [[Mathematical Argument]] is called **sound** if & only if it is [[#Valid]] **AND** all the [[#Premise]] is true. That means the [[#Conclusion]] also must be true