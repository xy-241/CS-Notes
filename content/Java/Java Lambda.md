---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-05-01, 20:35
Last Date: 2024-05-02T20:50:18+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A **concise way** to **defining an implementation** of a [[OOP#Functional Interface]] and **obtain** an [[OOP#OOP Object]] of that particular implementation

>[!question] Why concise?
> It allows us to create an implementation of a [[OOP#OOP Interface]] without the need to create an [[OOP#OOP Class]] or [[OOP#Anonymous Inner Class]] explicitly.

>[!attention]
> Can only be used in the context of **Functional Interface**, because Java lambda **can only define** the **implementation** of **one** [[OOP#OOP Abstract Method]].


## Java Lambda Showcase
---
- In the code editor below, we have a [[OOP#Functional Interface]] `Calculator` that has an [[OOP#OOP Abstract Method]] `calculate` that takes in 2 parameters
- There are **3 implementations** of the functional interface in **3 different ways** - standard [[OOP#OOP Class]] (`addCalculator`), [[OOP#Anonymous Inner Class]] (`subtractionCalculator`) and [[Java Lambda]] (`multiplyCalculator`)


<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42bzneeqa?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

- As you can see from the implementations from the code editor above, the **implementation with java lambda syntax** is **much more concise**, we are **focused** on the **actual logic** being implemented rather than the ceremony of defining interfaces and classes. In another word, instead of creating a class that contains the implementation, we can **create the implementation** **without the need to create a class**. This enhance the **functional programming capabilities of Java**



## References
---
- [Functional Interface | Lambda Expression in Java - YouTube](https://youtu.be/4HC_WyBSDGA?si=OOICd_cJminYkM9y)
- [Lambda Expressions in Java - Full Simple Tutorial - YouTube](https://www.youtube.com/watch?v=tj5sLSFjVj4)