---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags: 
Creation Date: 2024-05-01, 20:35
Last Date: 2024-05-10T22:08:44+08:00
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

>[!important]
> Creating an **illusion** of [[Function#First-class Citizen Function]].

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

- As you can see from the implementations from the code editor above, the **implementation with java lambda syntax** is **much more concise**, we are **focused** on the **actual logic** being implemented rather than the ceremony of defining interfaces and classes
- In another word, instead of creating a class that contains the implementation, we can **create the implementation** **without the need to create a class**. This enhance the **functional programming capabilities of Java**


## Java Stream API
---
- A way to **process a sequence of [[OOP#OOP Object]]** using **functional programming style**
- In the code editor below, we have a [[Array#Dynamic Array]] of integers. The stream API is carried in 4 steps: 
	1. create a stream of the integer with `stream()`
	2. multiply all the integers in the stream by $2$ with `map(num->num * 2)`
	3. sort the the stream in ascending order with `sorted()`
	4. print out the stream of integers with `forEach(num->System.out.println(num))`

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42c57yr4q?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

>[!important] Builder design pattern & Java Lambda
> As you can see, the Java Stream API syntax is very concise, thanks to [builder design pattern](https://refactoring.guru/design-patterns/builder) and [[Java Lambda]].
> 
> The **intermediate operations** like `stream()`, `sorted()` and `map()` follows the builder design pattern, **returning a new object of stream** after execution. This **avoids the need to create variables** to **store intermediate processed results**, making the code more concise. 
> 
> Java lambda allows us to specify the logic inside `.map()` and `.forEach()` **without the need to create [[OOP#OOP Class]]** that contains the logic implementation **explicitly**, making the code more concise. 

## References
---
- [Functional Interface | Lambda Expression in Java - YouTube](https://youtu.be/4HC_WyBSDGA?si=OOICd_cJminYkM9y)
- [Lambda Expressions in Java - Full Simple Tutorial - YouTube](https://www.youtube.com/watch?v=tj5sLSFjVj4)
- [java.util.stream (Java SE 9 & JDK 9 )](https://docs.oracle.com/javase/9/docs/api/java/util/stream/package-summary.html#StreamOps)
- [Stream API in Java - YouTube](https://youtu.be/tklkyVa7KZo?si=MqRBFeT0agtwb7Xj)