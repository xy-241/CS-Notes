---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - java
Creation Date: 2024-09-01, 03:02
Last Date: 2024-09-05T20:36:03+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Many modern programming languages support exceptions.
- The `catch` blocks are checked in the order they appear. The first compatible `catch` block handles the exception.
- `finally` is optional and used for housekeeping tasks (e.g., closing resources)
- `finally` is always executed, even if there's an exception or a `return` in the `try` or `catch` blocks

>[!important] 3 possible execution outcome
> **Normal Execution:** `try` block executes without errors, then `finally` block executes.
> 
> **Error Execution:** If an error occurs in the `try` block, execution jumps to the first compatible `catch` block, then the `finally` block executes.
> 
> **Passing the Buck:** The caller can pass the exception up the call stack until it's caught. [[#Unchecked Exceptions|Unchecked exceptions]] propagate automatically. [[#Checked Exceptions|Checked exceptions]] must be handled or declared.


>[!important] Good practices
> **Do NOT Return from Finally:** Can lead to counter-intuitive behaviour and lost exceptions.
> 
> **Do NOT Use Exception As a Control Flow Mechanism:** Use `if-else` for normal program logic, not exceptions.
> 
> **Do NOT Break Abstraction Barrier:** Handle implementation-specific exceptions within the class to avoid leaking details to the caller.
> 
> **Catch Exceptions to Clean Up:** Handle exceptions to release resources, even if you re-throw the exception.
> 
> **Do NOT Catch-Them-All!**: Avoid catching `Exception` to prevent silently ignoring all exceptions.
> 
> **Do NOT Overreact:** Don't exit the program just because of an exception.

### Raising Exception
- Use the `throws` keyword in the method declaration to indicate that the method might throw an exception.
- Create a new exception object and `throw` it to the caller.
- Executing the `throw` statement causes the method to immediately return.

### Unchecked Exceptions
- Caused by programmer errors (e.g., `IllegalArgumentException`, `NullPointerException`)

>[!important]
> Generally not explicitly caught or thrown.

>[!code] Unchekd exceptions in Java
> Subclasses of `RuntimeException`.

### Checked Exceptions
- Programmer has no control over them (e.g., `FileNotFoundException`)

>[!important] Must be handled or declared
> Must be either handled or declared in the method signature using `throws`, or we can't pass compilation checks.

## Java Exception
---
![[java_exception_hierarchy.png|300]]

- Exceptions are instances that are a [[Subtyping|subtype]] of the `Exception` class. Information about an exception is encapsulated in an exception instance and "passed" into the `catch` block
- [[Inheritance|Inherit]] from an existing exception class if you need to provide additional information or behaviour


>[!code] The `Error` class
> Used for unrecoverable situations (e.g., `OutOfMemoryError`). Typically don't need to create or handle `Error`.



>[!important]
> Only handles one `catch()` block!
> 
> Exceptions can be handled with a catch block that catches its [[Subtyping|supertype]].

