---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
Creation Date: 2023-07-20T21:02:30+08:00
Last Date: 2024-07-19T17:11:45+08:00
References: 
---
## Abstract
---
- A [[OOP]] language that is [[Type Safety#Statically Typed]] & [[Type Safety#Strongly Typed]]. It also provides some features of the [[Function|functional paradigms]] but it isn't very elegant

## Java Keywords
---
### static
- Fields and methods declared with the `static` keyword **belong to the class** itself rather than to instances of the class. This allows us to **use** these class members **without creating** an **object of the class**. Static fields and methods are initialised and stored in the **method area** (part of the [[Address Space#Heap Segment|heap]]) during the **class-loading phase**, which **occurs before** the **main program execution** begins

### final
- On [[OOP#OOP Class]]: prevents [[Inheritance]]
- On method: prevents overriding
- On variable: makes it a constant (prevents modification after initialization)

### extends
- The `extends` keyword establishes an [[Inheritance#"Is-a" Relationship|"is-a" relationship]] from the subclass to the superclass, enabling [[Inheritance|inheritance]]


## The Mother of All Classes
---
- `java.lang.Object` is the root of all [[OOP#OOP Class|classes]] in [[Java]]. Whether they are part of the Java libraries or custom classes you create yourself, all classes **implicitly [[Inheritance|inherit]]** from `java.lang.Object`

## Java Iterator
---
- An [[OOP#OOP Object]] of the `java.util.Iterator` [[OOP#OOP Class]] that can be used to **loop through collections** like `ArrayList` and `HashSet`

>[!code] Obtaining a Java Iterator
> `Iterator<T> it = cars.iterator();`, where `cars` is an instance of Java collections.

>[!code] Get the first element of a collection using Java iterator
>`it.next();` returns the first element of a collection, where `it` is a Java iterator.

>[!code] Loop through a collection using Java iterator
> `while(it.hasNext()) {System.out.println(it.next());}`, where `it` is a Java iterator.

>[!code] Remove an element from a collection using Java iterator
> `it.remove();`, where `it` is a Java iterator.