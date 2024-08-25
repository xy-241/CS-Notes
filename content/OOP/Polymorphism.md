---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OOP
Creation Date: 2023-07-23T17:48:21+08:00
Last Date: 2024-08-25T17:37:03+08:00
References: 
---
## Abstract
---
>[!quote]
> Many Forms, One Purpose.

- Think of polymorphism like a chameleon. A chameleon can change its appearance to blend in with its surroundings. Similarly, in programming, polymorphism lets **objects take on different forms while still serving the same purpose**


>[!important] The Chameleon's Trick
> [[Method Overriding|Method overriding]] is the key to polymorphism's magic. It lets you redefine how an object behaves, even if you don't have access to the original code. This is like teaching a new trick to an old dog - you're updating its behaviour without changing its core identity.
> 
> Coupled with [[Dynamic Binding|dynamic binding,]] we are able to utilise the desired form from the many forms available during runtime to fulfil the task precisely.


>[!success] Future-proofing codes
> With polymorphism, we can add **new objects or features without breaking existing parts of your program**.

>[!caution] Adding functionality challenge
> If you want all animals to have a new ability, like `move`, you need to add that method to the base `Animal` class and then **override it in every existing animal class**. This can be **tedious and error-prone**.