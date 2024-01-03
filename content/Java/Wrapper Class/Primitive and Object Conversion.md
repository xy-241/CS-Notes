---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
Creation Date: 2023-07-15T12:46:04+08:00
Last Date: 2023-12-16T20:23:03+08:00
References: 
---
## Abstract
---
- Facilities the integration between [[OOP]] concepts with low level [[Primitive Datatype]]

## Boxing
- Take a [[Primitive Datatype]] & put it inside an [[OOP#OOP Object]] of [[Wrapper Class Datatype]]
- Aka converting primitive to object 
## Auto-boxing
- [[Primitive and Object Conversion]] but without explicitly the use of `new` keyword, [[Language Processors#Compiler]] does the work automatically 


## Unboxing
- The opposite of [[#Boxing]]
```java
int intVal = numObject.intValue();
```

## Auto-unboxing
* [[#Unboxing]] but without explicitly calling built-in method