---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
  - java
Creation Date: 2024-09-01, 02:33
Last Date: 2024-09-09T01:42:29+08:00
References: 
draft: 
description: 
---
## Abstract
----
- Let $C(T)$ be a [[Datatype#Complex Type|complex type]] based on [[Datatype|type]] $T$. The complex type $C$ can be [[#Covariant]], [[#Contravariant]] and [[#Invariant]]

### Covariant
- Given two [[Datatype|datatypes]] $S$ and $T$ and $C()$ as the [[Datatype#Complex Type|complex type]], $S :< T \rightarrow C(S) <: C(T)$

>[!important] Covariance in Java arrays can lead to runtime errors
> **Java Arrays are Covariant.**
>
> - Imagine you have an array of `Integer`.
> - Due to covariance, you can assign this array to a variable declared as an array of `Object`.
> - Now, you might try to add a `String` to this array (which seems okay since it's an array of `Object`).
> - However, at runtime, Java discovers you're trying to put a `String` into an array meant for `Integer`, causing an error.

### Contravariant
- Given two [[Datatype|datatypes]] $S$ and $T$ and $C()$ as the [[Datatype#Complex Type|complex type]], $S :< T \rightarrow C(T) <: C(S)$

### Invariant
- If [[Datatype#Complex Type|complex type]] $C$ is neither [[#Covariant]] nor [[#Contravariant]]

>[!example] Invariants in Java
> Primitive arrays and [[Generics]] are invariant.