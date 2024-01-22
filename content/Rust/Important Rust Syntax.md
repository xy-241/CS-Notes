---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - rust
Creation Date: 2024-01-13, 17:35
Last Date: 2024-01-22T15:17:50+08:00
References: 
draft: 
---
## Abstract
---
- A list of Rust syntax that worth noting


## Rust Variable
---
### Rust: Difference between Constant and Variable
- `const` can be used in the [[Global State]](stored in the [[Address Space#Data Segment]]), and `let` can only be used in a function(Stored in the [[Address Space#Stack Segment]])

### Rust: Variable Shadowing
- Allowing us to reuse the same variable name, assign a different type of change the value (so we don't need to think of a new variable name) of a [[Immutable]] variable (add in a degree of flexibility)
- Works on both `let` and `let mut`, but no `const`
- Refer to [Rust Variable Shadowing](https://rust-book.cs.brown.edu/ch03-01-variables-and-mutability.html#shadowing) for more details