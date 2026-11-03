# Lambda Expressions in Java

### **What is a Lambda Expression?**
At its core, a **lambda expression** in Java is a concise way to represent an **anonymous function**, i.e., a function without a name that can be used anywhere a functional interface is required. It’s Java’s way of treating functions as **first-class citizens**.

Lambdas allow you to treat a block of code (often a single method implementation) as data that you can pass around, store, or execute later without having to formally declare a class for each case.

---

## **Syntax of Lambda Expressions**

```java
(parameters) -> expression
or
(parameters) -> { statements; return result; }
```

### Breakdown:
1. **Parameters (the left side of the arrow)**: Represents the input parameters.
    - E.g., `(int x)` or simply `(x)`. If type can be inferred by the compiler, no need to declare it.
    - If there's only *one parameter*, you can omit the parentheses, like `x -> x * 2`.
  
2. **Arrow (`->`)**: Separates the parameters from the body of the function.

3. **Lambda Body (the right side of the arrow)**: 
    - If only one expression, curly braces `{}` and `return` keyword can be omitted, e.g., `x -> x * x;`.
    - If multiple statements, braces are required, e.g.:

        ```java
        (x, y) -> {
            int sum = x + y;
            return sum;
        }
        ```

---

## **Functional Interface – The Foundation of Lambda Expressions**
A **functional interface** is any interface in Java containing **exactly one abstract method**. That single method defines the abstract behavior you can implement using lambdas.

### Example: 
```java
// Functional Interface
@FunctionalInterface
interface Transformer<T, R> {
    R transform(T t);  // One abstract method
}
```

### Lambda Works with Functional Interfaces:
```java
// Example usage of lambda with Transformer interface.
Transformer<Integer, Integer> square = x -> x * x;
System.out.println(square.transform(5));  // Prints 25
```

#### Note:
- By convention, if an interface is intended to be functional, it’s annotated with `@FunctionalInterface`. However, it’s not mandatory.

---

## **Lambda Expression Examples**

1. **No parameters**:
    ```java
    Runnable task = () -> System.out.println("Running");
    task.run();  // Outputs "Running"
    ```

2. **One parameter with or without type**:
    ```java
    // Type inferred
    Transformer<Integer, Integer> increment = x -> x + 1;
    
    // Explicit type
    Transformer<Integer, Integer> incrementExplicit = (Integer x) -> x + 1;
    
    System.out.println(increment.transform(5));  // Prints 6
    ```

3. **Multiple parameters**:
    ```java
    Comparator<String> compareByLength = (s1, s2) -> s1.length() - s2.length();
    System.out.println(compareByLength.compare("apple", "pear"));  // Prints 1
    ```

4. **Multiple Statements in Body (with curly brackets)**:
    ```java
    Transformer<Integer, Integer> factorial = n -> {
        int result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    };
    System.out.println(factorial.transform(5));  // Prints 120
    ```

---

## **Lambda as Syntactic Sugar for Anonymous Classes**
Before lambdas, creating a function or behaviorally similar implementation required anonymous classes, which were far more verbose. 

### Before (using Anonymous Class):
```java
Transformer<Integer, Integer> square = new Transformer<>() {
    @Override
    public Integer transform(Integer x) {
        return x * x;
    }
};
```

### After (using Lambda Expression):
```java
Transformer<Integer, Integer> square = x -> x * x;
```

**Lambda expressions** remove a lot of *boilerplate* (class declaration, method signature, etc.) and make the code clearer and more concise.

---

## **Method References**
Lambda expressions can be simplified even more using **method references** when existing methods directly match the functional interface signature.

### Syntax:
```java
Class::staticMethod
object::instanceMethod
Class::constructor  // Constructor reference
```
### Example:
```java
// Instance method reference
Point origin = new Point(0, 0);
Transformer<Point, Double> dist = origin::distanceTo;  // same as p -> origin.distanceTo(p)

// Static method reference
Transformer<Integer, Integer> absValue = Math::abs;  // same as x -> Math.abs(x)
```

### Constructor References:

```java
Supplier<Point> pointSupplier = Point::new;  // same as () -> new Point();
```

**Important Points**:
- **Method references** can be used where lambdas directly call an existing method and do not introduce additional logic.
- **Compile-time Inference**: Java can infer whether you're referencing a static or instance method based on the type of the functional interface you're using.

---

## **Effectively Final Variables in Lambdas**
Lambda expressions can capture variables from their enclosing scope like anonymous inner classes, but with one important restriction: 

- **Captured variables must be effectively final**. That means they **cannot** be modified after they are initialized.

### Example:
```java
int multiplier = 2;
Transformer<Integer, Integer> doubler = x -> x * multiplier;  // Works fine

multiplier = 3;  // Not allowed! compiles error because capturing variables must be final/effectively final.
```

---

## **Lexical Scoping and `this` in Lambdas**
- In lambdas, the keyword **`this`** refers to the instance of the enclosing class, not the lambda object itself, meaning lambdas **inherit** the scoping of the class in which they’re defined.

### Example:
```java
class A {
    int x = 10;
    public void demonstrate() {
        Transformer<Integer, Integer> f = y -> this.x * y;  // "this" refers to instance of A
        System.out.println(f.transform(2));  // Outputs 20 (10 * 2)
    }
}
```
If `this` was inside an **anonymous class**, it would refer to the anonymous class instance, but when inside a lambda, it refers to the **surrounding instance context**.

---

## **Closures**
A **closure** is a function (like a lambda) that "closes over" variables from its outer scope. It captures the environment where it’s defined and can use variables from that environment—even after they go out of scope.

In Java, lambdas are **closures** because they capture effectively final variables from their environment.

### Example of Closure:
```java
int a = 5;
Transformer<Integer, Integer> addA = x -> x + a;  // lambda captures 'a'

System.out.println(addA.transform(10));  // result: 15
```

Here, `a` is captured by the lambda, and even when `a` is no longer in scope, the lambda still retains this value.

**Important Caveat**: Captured variables **must not change** (again, effectively final).

---

## **Currying with Lambdas**
**Currying** is when a function with multiple parameters is transformed into a sequence of functions, each with a single parameter.

In the context of Java's lambdas, we can implement curried functions by nesting lambda expressions.

### Example of Currying:
```java
// Standard function to add two numbers
int add(int a, int b) {
    return a + b;
}

// Curried form using lambdas
Transformer<Integer, Transformer<Integer, Integer>> curriedAdd = a -> b -> a + b;

// Usage:
Transformer<Integer, Integer> addFive = curriedAdd.transform(5);
System.out.println(addFive.transform(10)); // Result: 15
```

**How it works**:
- The outer lambda `a ->` returns another lambda `b -> a + b`.
- You can partially apply the outer function (`addFive = curriedAdd.transform(5)`) and later apply the second part (`addFive.transform(10)`).

**Benefits**:
- Allows **partial application**: applying part of a function and delaying final application.
- Flexibility in composing functions dynamically during runtime.

---

## **Lazy Evaluation with Lambdas**
Lambdas allow deferring function execution, enabling **lazy evaluation**. This means functions can be declared but not executed until explicitly invoked, saving on unnecessary computation until a value is needed.

### Example: Deferring Logging
```java
Logger.lazyLog(Logger.LogLevel.INFO, () -> "Expensive log message: " + calculate());

public class Logger {
    static void lazyLog(LogLevel level, Supplier<String> msgSupplier) {
        if (level.compareTo(currentLogLevel) >= 0) {
            System.out.println(msgSupplier.get());  // Only invoke lambda when needed
        }
    }
}
```

**Memoization**:
Lambdas can also be used with **memoization** to cache the result of a computation and avoid rerunning it:

```java
class Lazy<T> {
    private T value;
    private boolean isComputed = false;
    private Supplier<T> supplier;

    public Lazy(Supplier<T> supplier) {
        this.supplier = supplier;
    }

    public T get() {
        if (!isComputed) {
            this.value = supplier.get();  // Lazy computation
            isComputed = true;
        }
        return value;
    }
}
```

