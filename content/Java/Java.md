---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
Creation Date: 2023-07-20T21:02:30+08:00
Last Date: 2024-06-29T17:05:51+08:00
References: 
---
## Abstract
---
- A [[OOP]] language that is[[Datatype#Statically Typed]] & [[Datatype#Strongly Typed]]. It also provides a [[Function|functional]] interface but it isn't very elegant




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