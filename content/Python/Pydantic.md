---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - python
  - programming
Creation Date: 2025-11-03, 00:45
Last Date: 2025-11-03T00:51:29+08:00
References:
draft:
description: Pydantic is a Python library for fast data validation, type enforcement, automatic conversion, JSON serialization, and custom validators for clean, reliable input.
---
## Abstract
---
- A **data validation and parsing** library that uses Python type hints to define structured models. It ensures that incoming data (like JSON, APIs, forms) is clean, consistent, and typed correctly before your application uses it.

## Type Enforcement & Automatic Conversion
---
- When data is passed into a Pydantic model, it:
	- Checks that each field matches the declared type
	- Automatically converts compatible values when possible: (`"20"` → `int`, `"true"` → `bool`)
- This helps catch bugs early and reduces manual parsing.

## JSON Serialization
---
```python
# Construct models directly from dictionaries
User(**dictionary_object)
```
- This feels conceptually similar to C++ reflection because Pydantic introspects field definitions, though the underlying mechanism is different.

- Pydantic models can be serialized easily:
	- `model_dump()` → Python dictionaries
	- `model_dump_json()` → JSON strings

## Built-in Format Validation
---
- Pydantic includes rich field types such as:
	- `EmailStr`
	- `AnyUrl`
	- `IPvAnyAddress`
	- `PaymentCardNumber`
	- `FilePath`
- These ensure the value follows a valid format ( like checking the structure of an email).

## Custom Validators
---
- You can define your own validation logic using decorators:
	- `@field_validator` for single fields
	- `@model_validator` for cross-field constraints
- This is useful for enforcing business rules or complex checks.

## References
---
- [Pydantic Tutorial • Solving Python's Biggest Problem - YouTube](https://youtu.be/XIdQ6gO3Anc?si=xsuPTQWVPukaYFCS)