---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2024-12-13, 12:05
Last Date: 2024-12-13T12:33:13+08:00
References: 
draft: 
description: Data Layer Abstraction separates data access from business logic, enabling easier database swaps and enhancing security.
title: "Understanding Data Layer Abstraction: DO, VO, and DTO Explained"
---
## Abstract
---
- **Data Layer Abstraction** separates data access logic from the rest of the application by using an intermediary layer like [[#DO]], [[#VO]] and [[#DAO]] to interact with databases

>[!important]
>Ensures a clear **separation** between **data access** and **business logic**, so schema changes and database switches don't require significant changes to the business logic.
>
> **Centralises security features**, such as SQL injection prevention.



## DO
---

| id  | name     | email            | created_at       |
| --- | -------- | ---------------- | ---------------- |
| 1   | John Doe | john@example.com | 2024-01-01 10:00 |
```java
public class UserDO {
    private int id;
    private String name;
    private String email;
    private Timestamp createdAt;

    // Getters and Setters
}
```

- **Data Object**
- Direct mapping to a database table, used in the [[#DAO|DAO layer]]
- We can obtain an instance of DO using [[#Mapper]] - `UserDO userDO = userMapper.getUserById(1);`

### Mapper

```java
import org.apache.ibatis.annotations.Select;

public interface UserMapper {
    @Select("SELECT id, name, email FROM users WHERE id = #{id}")
    UserDO getUserById(int id);
}
```

- A **mapper** is a component that maps data between different layers, typically between the database and the application’s object model, simplifying interactions with data sources and improving code maintainability

## VO
---

| id  | name     | email            | created_at       |
| --- | -------- | ---------------- | ---------------- |
| 1   | John Doe | john@example.com | 2024-01-01 10:00 |
```java
public class UserVO {
    private String name;
    private String email;

    public UserVO(String name, String email) {
        this.name = name;
        this.email = email;
    }

    // Getters only
}
```

- **Value Object**
- Encapsulates data relevant to the business domain, and **used in application logic**
- We usually obtain an instance of VO with data from [[#DO]] - `UserVO userVO = new UserVO(userDO.getName(), userDO.getEmail());`

>[!question] Why no setters?
> VO represents **immutable** business/domain data.

## DAO
---

| id  | name     | email            | created_at       |
| --- | -------- | ---------------- | ---------------- |
| 1   | John Doe | john@example.com | 2024-01-01 10:00 |
```java
public class UserDTO {
    private String name;
    private String email;
    private int age;

    public UserDTO(UserDO userDO) {
        this.name = userDO.getName();
        this.email = userDO.getEmail();
        this.age = calculateAge(userDO.getCreatedAt());
    }

    private int calculateAge(Timestamp createdAt) {
        return Period.between(createdAt.toLocalDateTime().toLocalDate(), LocalDate.now()).getYears();
    }

    // Getters only
}
```

- **Data Transfer Object**
- Sends formatted data to external systems, often used in APIs
- We usually wrap [[#DO]] with DAO, so it is formatted and ready to be returned in an API response - `UserDTO userDTO = new UserDTO(userDO);`

>[!question] Why no setters?
> DAO transfers formatted, **immutable** data between layers/systems.