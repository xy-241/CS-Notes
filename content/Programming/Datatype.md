---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - rust
  - java
Creation Date: 2023-08-18T20:47:17+08:00
Last Date: 2024-06-04T18:26:44+08:00
References: 
---
## Abstract
---
- Datatype is a **classification of information** and it has a **set of [[Operation]]** associated with it

>[!success] Benefits of Explicit Datatype
> 1. Save [[Main Memory]]
> 2. **Generally speeds up** program, refer to this [video](https://www.youtube.com/watch?v=hwyRnHA54lI) for more details. However, use it with caution, refer to the block below for more information 
> 

>[!bigbrain] Premature optimisation is the root of all evil
> Something to note is that the size of your data can affect performance as well as memory usage. CPUs are specifically designed to handle 32 bit and 64 bit values very fast, and sometimes, counterintuitively, an 8 bit value may take longer to process. So, as with everything, **premature optimisation** is the **root of all evil**. 
> 
> Keep the integer as a 32 bit integer for now, if you have 10 million of them and have identified it as a problem that it uses too much memory then go down to a u8 or use **bit-packing methods**.
>
 > It's actually even more nuanced than that, because of [[CPU Cache#Cache Locality]], so actually smaller data can be faster and slower depending on the circumstance. But that's very complex and should be left to experimentation **if the need arises**.
### Primitive Datatype
- Also known as **Built-in Datatype**
* Great performance since there isn't much abstraction like [[#Custom Datatype]]
</br>

- In [[Java]], primitive datatypes are [[Immutability]]

### Custom Datatype
- In [[Java]], custom datatypes **aren't** [[Immutability]]
- Examples are [[OOP Class]] and [[#Struct]]

>[!caution] Java Value Comparsion
> We can't use `==` to compare [[OOP#OOP Object]], because `==` compares the value holding by the variable. However, variables are only holding the [[Memory Address]] to the OOP Object. So if we want to compare the value of OOP Object, we need to use the `equals()` method

## Struct
---
- Allows us to group a set of data to form our own [[Datatype]]. Refer to [Struct in GO](https://youtu.be/8uiZC0l4Ajw?si=UpYAqgfaw9H8BMxE&t=1867) to see how struct is implemented and used in Go

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




## Type Safety
---


>[!question] Is there language that is statically type but not strongly typed?
>
>C is statically typed, as the compiler checks types at compile time. However, it's known for its relatively weak type system. It allows implicit conversions between numeric types and has a `void` pointer type that can point to any data type.
- example below 
```c
#include <stdio.h>
int main()
{
    printf("Hello, World!");
    int a = 1;
    char b = 'a';
    
    a+=b;
    printf("You entered: %d", a);
}
```

### Statically Typed
- [[Datatype]] checking is performed at compile-time. This means errors related to type mismatches are caught before the program runs, offering early detection of potential problems
- The datatype must be known during compilation, either by **explicitly defining** the data type or by **assigning a value** to the variable, which allows the **language to infer the type**


>[!attention]
> Use **type inference** only when the assigned value clearly shows its type (e.g., `a := "thisIsStr"`). Otherwise, explicitly declare the type (e.g., `var a := foo()`).

>[!success] Safer codes and more informative coding experience
> [[Language Processors#Compiler]] has more information to do more checks on the codes and enforce certain standards. Plus better code completion when coding. Refer to this [video](https://youtu.be/hwyRnHA54lI?si=lrDIYGWl04qfdXdj&t=324) for more more details and example.

### Strongly Typed
- We can't add 2 variables of the different [[Datatype]] together during runtime, languages like [[Node.js]] aren't strongly typed
