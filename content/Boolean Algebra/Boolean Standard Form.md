---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - boolean_algebra
  - computer_organisation
Creation Date: 2023-08-20T15:47:57+08:00
Last Date: 2024-09-30T22:32:31+08:00
References: 
draft: 
---
## Abstract
---
- When it is expressed in [[#Sum-of-Products (SOP)]] or [[#Product-of-Sums (POS)]]


>[!important]
> Every Boolean expression can be expressed in either SOP (Sum of Products) or POS (Product of Sums) form. We can convert from one form to the other by taking the complement of the current form.

>[!important] Test your understanding!
> `X' + Y + Z` is SOP, it is also POS because `X' + Y + Z` as a whole is [[#Sum Term]].
> 
> `X · (W' + Y · Z)` isn't SOP, because it isn't a [[#Boolean Literal]], and of multiple boolean literals, or of multiple product terms.
>  It isn't POS too, because it isn't or of multiple boolean literals, and of multiple sum terms.
>  
>  `X·Y·Z'` is POS, because the whole is [[#Product Term]], it is also SOP
### Boolean Variable
-  A variables that hold either `true` or `false`

### Boolean Literal
- A [[#Boolean Variable]] on its own or its complemented form

## Product Term
---
- A single [[#Boolean Literal]] or a [[AND]] of several Boolean Literals

### Sum-of-Products (SOP) 
- A [[#Product Term]] or a [[OR]] of multiple Product Term
- Used in [[Minterm]]

## Sum Term
---
-  A single [[#Boolean Literal]] or a [[OR]] of multiple Boolean Literals

### Product-of-Sums (POS) 
- A single [[#Sum Term]] or [[AND]] of multiple Sum Term
- Used in [[Maxterm]]

