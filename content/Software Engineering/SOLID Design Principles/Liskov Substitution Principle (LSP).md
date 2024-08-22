---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-07-20T00:24:49+08:00
Last Date: 2024-08-22T20:55:04+08:00
References: 
---

## Abstract
---
>[!quote]
> **Objects of a** [[Subtyping|superclass]] should be replaceable with **objects of a subclass** without affecting the **correctness of the program**.

- Not all [[Inheritance#"Is-a" Relationship]] should be modelled with [[Inheritance]]

>[!example] Fly example
> Consider a base class `Bird` with a method `fly()`. If you derive a class `Penguin` from `Bird`, but `Penguin` cannot fly, it would violate the LSP because substituting a `Bird` with a `Penguin` would break the `fly()` method's expected behaviour.
> 
> The derived class should enhance or maintain the behavior of the base class, but never contradict or weaken it.

>[!example] Length example
> In the Liskov Substitution Principle (LSP), if we have a `Square` class that inherits from a `Rectangle` class, issues arise when performing certain operations. For example, when we perform the `change width` operation on both objects:
> - The `Square` will change both its width and length, as they are always equal.
> - The `Rectangle` will only change its width, leaving its length unchanged.
> 
> Later, when we perform the `obtain length` operation:
> - The `Square` will return its changed length (which is now equal to its changed width).
> - The `Rectangle` will return its original, unchanged length.
>   
> This discrepancy in behavior violates the principle of [[OOP Compatibility]], a key aspect of the LSP. The LSP states that objects of a derived class should be substitutable for objects of their base class without affecting the correctness of the program. In this case, substituting a `Square` for a `Rectangle` leads to unexpected results, breaking the program's correctness.


>[!question] How can we fix this?
> **Leverage a Common [[OOP#OOP Interface|OOP Interface]]:** Abstract the `Square` and `Rectangle` properties into an interface. Implement the `width` and `length` in each respective class. This prevents object substitution when obtaining the `length` (which is specific to `Rectangle` objects), thereby ensuring OOP compatibility.
>
> **Prevent [[Inheritance|Inheritance]] and [[OOP Method#Method Overriding|Method Overriding]]:** Declare the OOP class or individual [[OOP#OOP Class|OOP methods]] as [[Java Keywords#final|final]]. This enhances the ability to reason about program correctness. Noteworthy examples include `java.lang.Math` and `java.lang.String`, which are not inheritable.
>
> **Unit Testing:** Employ assertions to verify the LSP during compilation. You can find an illustrative example [here](https://nus-cs2030s.github.io/2223-s2/16-lsp.html#lsp-through-the-lens-of-testing).

