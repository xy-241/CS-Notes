---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
Creation Date: 2023-07-20T21:02:30+08:00
Last Date: 2024-08-25T15:52:47+08:00
References: 
---
## Abstract
---
- A [[OOP]] language that is [[Type Safety#Statically Typed]] & [[Type Safety#Strongly Typed]]. It also provides some features of the [[Function|functional paradigms]] but it isn't very elegant

>[!important] Entry point method
> The class that kickstarts the Java program must **have** a [[Function|function]] with the [[Function#Function Signature|function signature]] `public static void main(String[] args)`. This is **the** standardised entry point, so the JVM knows where to start executing the program.
> 
> Adding `final` to the function signature also works.


## The Mother of All Classes
---
- `java.lang.Object` is the root of all [[OOP#OOP Class|classes]] in [[Java]]. Whether they are part of the Java libraries or custom classes you create yourself, all classes **implicitly [[Inheritance|inherit]]** from `java.lang.Object`

>[!important] 2 useful methods
> `boolean equals(Object obj)`: Checks if two objects are the same.
> 
> `String toString()`: Returns a text representation of an object. Java automatically uses `toString` to convert objects to text when you combine them with strings (using `+`) or print them.

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