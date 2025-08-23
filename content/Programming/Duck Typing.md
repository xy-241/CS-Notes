---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - python
  - java
Creation Date: 2025-08-23, 20:15
Last Date: 2025-08-23T23:36:01+08:00
References:
draft:
description: Learn why Python developers prefer duck typing over isinstance checks. Discover how dynamic typing can cause hidden bugs with subclasses, and why static languages like Java avoid type narrowing issues through compile-time checks.
---
## Abstract
---
```python
# Bad 
if isinstance(obj, list):
    for x in obj:

# Good (Avoid `isinstance`, `type`)
try:
    for x in obj:
        process(x)
except TypeError:
    return  # or log/skip silently
```

- We use **duck typing** in Python instead of relying on `isinstance` because Python is [[Type Safety#Dynamically Typed|dynamically typed]]. Type checks don’t actually guarantee safety even if an `isinstance` check passes, the object may be a subclass that overrides methods in unexpected ways, causing subtle bugs. For example, a subclass could pass `isinstance(obj, list)` but override `append` or `__getitem__` so that the behavior isn’t what you expect
- With duck typing, we focus on if the object **supports the operations we need**, rather than forcing it to be a specific type. This avoids false confidence from rigid type checks and makes code more flexible. It fits Python’s philosophy: _“if it quacks like a duck, it’s a duck.”_
- By contrast, **languages like Java don’t face this issue as much** because they use [[Type Safety#Statically Typed|static type checking]]. In Java, the compiler enforces type contracts at compile time, ensuring that a subclass must still satisfy the interface or superclass contract. This prevents most “type narrowing” problems. In Python issues only surface at runtime, so duck typing (operation-based checks) tends to be safer than `isinstance`

>[!code] But Java has `instanceof`!
> In **Java**, `instanceof` is backed by compile-time contracts (the [[Function#Function Signature|method signatures]] (parameters, return types) must match exactly.), so while subclasses may behave differently, they cannot break the type’s promises. That’s why it’s _less dangerous_.