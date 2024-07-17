---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
Creation Date: 2024-07-17, 21:08
Last Date: 2024-07-17T21:15:41+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Type safety means ensuring that **operations** are only performed on **variables of compatible [[Datatype]]**, **preventing errors** and **ensuring correct results**

### Type System
- A set of rules about [[Datatype]] of [[Abstraction#Data Abstraction|variable]], [[Expression]], [[Function]], and their interactions
### Statically Typed
- [[Datatype]] checking is performed at **compile time**

>[!important]
> The datatype must be known during compilation, either by **explicitly defining** the data type or by **assigning a value** to the variable, which allows the **language to infer the type**.
> 
> Use **type inference** only when the assigned value clearly shows its type like `a := "thisIsStr"`. Otherwise, explicitly declare the type (e.g., `String a := foo()`). This ensures **code readability**.

>[!success] More stable codes & a more informative coding experience
> **Errors** related to **type mismatches** can be **caught before the program runs**, offering **early detection** of potential problems.
> 
> [[Language Processors#Compiler]] also has more information to do more checks on the codes and enforce certain standards. Plus better **code completion** when coding. Refer to this [video](https://youtu.be/hwyRnHA54lI?si=lrDIYGWl04qfdXdj&t=324) for more more details and example.

### Dynamically Typed
- [[Datatype]] checking is performed when we are **running the program**

>[!success] Faster coding experience
> We don't need to think about what datatype each variable has, we can better **focus** on **implementing the logic**.

>[!caution] More runtime errors
> We may run **operation** on variables that have **incompatible datatypes** during runtime, this can be avoided if the languages is [[#Statically Typed]].

### Strongly Typed
- Strongly typed means the [[Datatype]] checking is **strict**
- For example, we can't add `int` variable with `string` variable

### Weakly Typed
- Weakly typed means the [[Datatype]] checking **ISN'T strict**
- For example, we can add `int` variable with `string` variable in [[Node.js|Javascript]]



## Type Systems and Safety: Static, Strong
---

| [[#Statically Typed\|Statically Typed]] | [[#Strongly Typed\|Strongly Typed]] | Meaning                                                                   | **Language**    |
| --------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------- | --------------- |
| ❌                                       | ❌                                   | Datatype checking is performed at **runtime**, with **loose rules**       | Javascript, PHP |
| ❌                                       | ✅                                   | Datatype checking is performed at **runtime**, with **strict rules**      | Python          |
| ✅                                       | ❌                                   | Datatype checking is performed at **compile time**, with **loose rules**  | C               |
| ✅                                       | ✅                                   | Datatype checking is performed at **compile time**, with **strict rules** | Java            |

- Javascript **allows** the **addition** between **integer** and **string**

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42fqdaua5?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

- Python **prevents** the **addition** between **integer** and **string**. However, the datatype checking only occurs when the code is executed. Change `False` to `True` on **line 5** to observe the datatype checking process

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42fqdmazh?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>
 

- C allows **implicit conversions** between numeric types and has a `void` pointer type that can point to any data type. `b` contains the [[Memory Address]] which is used in the addition with `a`

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42fqefxte?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>
 
- Java **prevents** the **addition** between **integer** and **string**, even if the code with type error isn't going to get executed


<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42fqfy2rj?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>
 
