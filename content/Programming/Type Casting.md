---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
Creation Date: 2024-08-22, 20:44
Last Date: 2024-08-26T19:54:34+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Also known as **Type Conversion**
- The process of converting a variable from one [[Datatype|data type]] to another. This allows the variable to be **treated as a different data type and utilise its properties**. Type conversion can be **implicit**, where the conversion is handled automatically by the programming language, or **explicit**, where the conversion is performed manually by the programmer.

>[!attention] Explicit type casting is dangerous
> **Data Loss:** Converting from a floating-point number (`float`) to an integer (`int`) results in the truncation (loss) of the decimal portion **(narrowing type conversion**). This isn't allowed in in [[Java]], but allowed in [[C]], thus Java is [[Type Safety#Strongly Typed|more strongly typed]].
> 
> **Loss of Object State or Methods:** [[#Widening Type Conversion|Widening type conversions]] can lead to the loss of access to specific subclass attributes and methods.
> 
> **Invalid Casting:** Incorrectly casting objects (e.g., trying to treat a `Cat` object as if it were a `Dog` object) will typically result in a runtime error (such as a `ClassCastException` in Java).

### Widening Type Conversion
- [[Type Casting|Casting]] a [[Subtyping|subclass]] object to its superclass
- A value of datatype $T$ **can be assigned** to a variable of type $S$ if and only if $T$ is a subtype of $S$
- Supported by [[Java]] **implicitly**

### Narrowing Type Conversion
- [[Type Casting|Casting]] a [[Subtyping|superclass]] object to its superclass
- Supported by [[Java]] **explicitly**

>[!important] Explicit narrowing type conversion in Java
> It tells [[Language Processors#Compiler|compiler]] we know what we are doing, don't enforce any checks, thus we will get runtime error if the type conversion is not compatible.


>[!question] Why do we need narrowing?
> [[Dynamic Binding|Dynamic binding]] allows us to pass [[Subtyping|subtypes]] to a supertype. However, if we want to use methods specific to the subtype, we need to perform narrowing. Otherwise, we'll encounter compilation errors. This is because, to the compiler, the [[Subtyping#Compile-time Type vs Run-time Type|compile-time type]] (the supertype) **doesn't support those subtype-specific methods**.