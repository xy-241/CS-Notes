---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
  - OOP
Creation Date: 2024-08-16, 12:04
Last Date: 2024-08-25T16:30:27+08:00
References: 
draft: 
description: 
---
## Abstract
---
- A special [[OOP Method|method]] used to initialise [[OOP#OOP Object|objects]]

>[!important] Method signature
> 1. The name of the constructor must be the same as the name of the [[OOP#OOP Class|class]]
> 2. Constructors do not have a return type, not even `void`
> 3. Constructors can have [[Access Modifier|access modifiers]]

>[!important] Calling superclass's constructor
> `super(..)` must be the **first line** inside the subclass's constructor. This means that if your call to `super(..)` requires a computed value, the value must be computed inline as arguments to `super(..)`.



## Java Default Constructor
---
- Java's default constructor is called **implicitly** when you don't define any [[Java Constructor|constructors]] in your [[OOP#OOP Class|class.]]

>[!important] Properties
> - Doesn't set any fields
> - Calls the super constructor, the default super constructor


## Chaining Constructors
---
```java
// Without chaining constructors
class Circle {
  public Circle(Point c, double r) {
    this.c = c;
    this.r = r;
  }

  // Overloaded constructor
  public Circle() {
    this.c = new Point(0, 0);
    this.r = 1;
  }
}


// Chaining constructors
class Circle {
  public Circle(Point c, double r) {
    this.c = c;
    this.r = r;
  }

  // Overloaded constructor with a call to this(..)
  public Circle() {
    this(new Point(0, 0), 1);
  }
}
```

- Instead of maintaining two separate [[Java Constructor|constructors]], `Circle(Point c, double r)` and `Circle()`, we only need to maintain `Circle(Point c, double r)`. This is achieved by chaining the implementation of `Circle()` to `Circle(Point c, double r)` using `this(new Point(0, 0), 1)`.

>[!important] `this()`
> The call to `this(..)` (if used) must be the **first line in the constructor**.
> 
> You can't have both `super(..)` and `this(..)` in the same constructor.
> 
> If you use `this(..)`, the [[#Java Default Constructor|default constructor]] isn't automatically added.