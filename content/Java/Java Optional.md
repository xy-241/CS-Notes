---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
  - binance
Creation Date: 2024-12-12, 14:17
Last Date: 2024-12-12T18:24:12+08:00
References: 
draft: 
description: The use of Java's Optional to handle data presence explicitly while reserving exceptions for operational issues like database errors. By returning Optional.empty() for missing data, it avoids ambiguity around null values, ensuring clarity and safer code execution.
title: Handling Data Absence and Operational Errors with Java Optional
---
## Abstract
---
```java
public Optional<User> findUserById(int id) {
    try {
        // Assume this fetches data or returns null if no data
        User user = database.queryForObject("SELECT * FROM users WHERE id = ?", id);
        return Optional.ofNullable(user);
    } catch (SQLException e) {
        // Handle database error, e.g., log it or rethrow as a custom exception
        throw new RuntimeException("Database error occurred", e);
    }
}

// Calling the method
try {
    Optional<User> userOpt = findUserById(1);
    userOpt.ifPresentOrElse(
        user -> System.out.println("User found: " + user.getName()),
        () -> System.out.println("No user found")
    );
} catch (RuntimeException e) {
    System.err.println("Error fetching user: " + e.getMessage());
}
```


>[!important]
> `Optional` focuses on **data presence**, while exceptions handle **operational issues**, such as database connectivity. By returning `Optional.empty()` for missing data, the caller knows it’s not an error, it’s simply an empty result. Without `Optional`, it’s unclear whether `null` means "no data" or "method failed." With `Optional`, the intent becomes explicit.
> 
> Java Optional is a [Maybe Monad](https://en.wikipedia.org/wiki/Monad_(functional_programming)).

>[!attention]
> We shouldn't overuse `Optional`. It should be used as a return type to indicate whether the returned object contains a value or is empty. Avoid using it as a parameter!


## References
---
- [Optionals In Java - Simple Tutorial - YouTube](https://youtu.be/vKVzRbsMnTQ?si=xrbg9QOQXDL7kLuc)