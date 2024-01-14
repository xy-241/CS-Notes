---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - rust
Creation Date: 2023-08-18T20:47:17+08:00
Last Date: 2024-01-14T17:22:54+08:00
References: 
---
## Abstract
---
- Each type has a set of [[Operation]] associated with it

### Primitive Datatype
- Also known as *Built-in Datatype*
* Great performance since there isn't much abstraction like [[#Custom Datatype]]

### Custom Datatype

- Examples are [[OOP Class]] and [[Structure]]


## Rust
---
### Rust Scalar Type
- Basically [[#Primitive Datatype]], rust supports 
	1. [[Integer Encoding (数字编码)#2's Complement (补码)]] [[Integer (整数)]] (For [[Integer Encoding (数字编码)#Integer Overflow]] panic in debug mode and go back to the biggest or smallest value in release mode)
	2. [[Floating-Point Encoding (浮点数编码)|Floating Point]]
	3. Boolean
	4. Character
- Refer to [Rust Scalar Data Types](https://rust-book.cs.brown.edu/ch03-02-data-types.html#scalar-types) for more details
### Rust Compound Type
- Basically [[#Custom Datatype]] rust supports natively
	1. Tuple, basically [[Array]] that contains elements of different [[Datatype]]
	2. Array, basically Array
- Refer to [Rust Compound Data Types](https://rust-book.cs.brown.edu/ch03-02-data-types.html#compound-types) for more details
## Terminologies 
---
### Statically Typed
- The [[Datatype]] must be known during [[Compilation]]

 