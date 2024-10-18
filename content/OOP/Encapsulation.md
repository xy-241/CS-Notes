---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
Creation Date: 2024-05-28, 23:25
Last Date: 2024-07-18T21:59:39+08:00
References: 
draft: 
description: 
---
## Abstract
---
- **Group** related [[Abstraction#Data Abstraction|variables]] and [[Abstraction#Control Abstraction|functions]] together to create a [[OOP#OOP Class|OOP class]]
- This class manages **how data is hidden** and allow **access** through **class itself** or its **methods**, ensuring **data safety**


## Tell, Don't Ask
---
- A principle in [[OOP]] that **tells** objects **what to do** rather than **asking** them about their **internal state** and then **making decisions based on that state**. This promotes [[Encapsulation|encapsulation]], **reduces** dependencies, and **enhances** code maintainability and readability. As a result, code is less likely to break when the internal state of objects changes

>[!success] Encapsulation
> By instructing objects on **what to do**, you ensure they **encapsulate their data** and provide a **well-defined interface for interaction**.

>[!success] Reduce dependencies 
> Reducing the dependencies between objects leads to a more **modular** and **flexible design**, where changes in one part of the system have **minimal impact on other parts**.

>[!success] Improves readability
> It makes the code easier to understand as it **focuses on actions** and **responsibilities** rather than on the internal states of objects.

>[!example]
>The client should _tell_ a for example a `Circle` object what to do (compute the circumference), instead of _asking_ "What is your radius?" to get the value of a field, then perform the computation on the object's behalf.

## "Has-a" Relationship
---
- Also known as **Composition**
- "Class A **has a** Class B," it means that Class A contains an instance of Class B as one of its members or attributes. This relationship, known as composition, is achieved by Class A **holding a reference** to an object of Class B

>[!important] A less abstracted explanation
> Consider a class `Car` and a class `Engine`. In this case, a `Car` **has an** `Engine`, meaning that a `Car` object contains an instance of the `Engine` class.
> 
> This allows for flexible designs as the `Engine` class can be **easily replaced** with another class that exhibits the same behaviour. It also promotes [[Encapsulation|encapsulation]] by **keeping related functionalities within the classes responsible for them**.
> 
> "Has-a" Relationship is employed when **one class** needs to **utilise** the **functionality of another class** **without** [[Inheritance|inheriting]] from it, resulting in a more **modular** and **adaptable design**.

>[!example]
>if Class A receives  instance of class b as a parameter to a method , class a is free to use the instance how ever they like as the instance acts as a interface/blueprint of what the object can and cant do 

>[!important] why use composition instead of inheritance
>lets say you have a parent class called image , this class contians the data and methods to implement and manipulate a image 
>if you have a abstract method that implements save and load method for diffrent image types(jpg.png,etc) 
>if lets say the children class is draw on image , it doesnt make sense to implement a load or save image , instead we pass the class a instance of image 

## References 

[flaws of inheritance and why you should use composition](https://youtu.be/hxGOiiR9ZKg?si=xThkAVOK7ficdsQd)
