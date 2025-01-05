---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - backend_dev
  - java
  - binance
Creation Date: 2024-11-19, 15:35
Last Date: 2024-11-20T16:20:41+08:00
References: 
draft: 
description: Commonly used Java Sprintboot features
---
## Abstract
---
- Java Spring Boot is a framework for building **Java-based web applications** and **microservices**

>[!important] 
> It simplifies development by providing 
> - pre-configured templates
> - reducing boilerplate code
> - enabling rapid application development. 
> 
> It is built on the Spring framework, offering features like 
> - dependency injection
> - embedded servers (e.g., Tomcat)
> - seamless integration with databases


## Java Springboot Dependency Injection
---
### `@Value`

```java
@Value("${my.property:defaultValue}")
private String myProperty; // Uses defaultValue if my.property is not set
```

- Injects values from external configuration (like `application.properties` or `application.yml`) into **Spring-managed beans**

## Java Springboot Web Request Mapping
---
### `@RequestMapping`

```java
@RequestMapping(value = "/myPath", method = RequestMethod.GET)
public String myHandler() {
    return "myView";
}
```

- Can specify HTTP methods, request parameters, and path variables

### `@GetMapping`

```java
@GetMapping("/users")
public List<User> getUsers() {
    return userService.getAllUsers();
}
```

- Maps HTTP GET requests

### `@PostMapping`

```java
@PostMapping("/users")
public User createUser(@RequestBody User user) {
    return userService.createUser(user);
}
```

- Maps HTTP POST requests

### `@PutMapping`

```java
@PutMapping("/users/{id}")
public User updateUser(@PathVariable Long id, @RequestBody User user) {
    return userService.updateUser(id, user);
}
```

- Maps HTTP PUT requests

### `@DeleteMapping`

```java
@DeleteMapping("/users/{id}")
public void deleteUser(@PathVariable Long id) {
    userService.deleteUser(id);
}

```

- Maps HTTP DELETE requests


%% ## Java Sprintboot Request Parameters and Path Variables
---
 %%