# Detailed Notes on Side Effect-Free Programming, Pure Functions, and Lambdas

### Concepts to Understand:
- **Pure Functions (Side-Effect-Free Programming)**
- **Functions as First-Class Citizens**
- **Lambda Expressions and Method References**
- **Currying and Higher-Order Functions**
- **Closures**

---

## 1. **Functions and Side Effects**
### Mathematical Functions:
- A **mathematical function** is a mapping from inputs (_domain_) to outputs (_codomain_): 
  - `f: X → Y`, meaning every input in `X` maps to exactly one output in `Y`. 
  - Example: `abs` function from `int` to `int`. `abs(-3) = 3`, `abs(3) = 3`. It has no "side effects".

**Side Effects**:
- Anything apart from returning the function’s result is a side effect. Examples:
  - **Printing to console** (`System.out.println()`)
  - **Modifying an object field** (`this.count++`)
  - **Mutating input arguments**
  - **Invoking other side-effect-heavy functions**
  - **Throwing exceptions**

```java
int square(int x) {
    return x * x; // pure function: no other interactions with outside world
}
```

### Why Avoid Side Effects?
Avoiding side effects allows:
- **Predictability**: Function always behaves the same, no matter the context (important for debugging and unit testing).
- **Referential Transparency**: You should be able to replace calls to the function with their output without changing the program’s behavior. E.g., replacing `f(x)` with `5` if `f(x) == 5`.

#### Referential Transparency Example:
```java
// Referential Transparency broken
seq.get(0); // returns 5
seq.set(0, 10);
seq.get(0); // returns 10 (not expected; same function call)
```

---

## 2. **Pure Functions**
- **Pure functions** are side-effect-free and **deterministic**.
- Always produce the same result for the same inputs.

#### Pure Function Examples:
```java
// Pure Functions
int square(int x) { return x * x; }
int add(int a, int b) { return a + b; }
```

#### Non-Pure Functions:
```java
// Non-pure Functions: Side Effects or Exceptions
int div(int a, int b) { return a / b; }  // can throw an exception
void setCount(int i) { this.count = i; } // modifies an object's field (side effect)
```

---

## 3. **Functions as First-Class Citizens** (For Java)
- In languages like Java, **functions** can be passed around like variables, treated like any other object.
- Java does this via **functional interfaces**—interfaces with just **one method**. These allow you to treat methods as parameters, return values, and objects.

### `Comparator` Interface Example:
```java
Comparator<String> cmp = new Comparator<String>() {
    public int compare(String s1, String s2) {
        return s1.length() - s2.length(); // Comparison logic (anonymous class)
    }
};
```
```java
List<String> names = List.of("Alice", "Bob", "Charlie");
names.sort(cmp);  // sort by length using cmp
```

### Higher-Order Functions:
- Functions that accept or return other functions. Allows more flexible, reusable code.

```java
// Higher-Order Function
<T, R, S> Transformer<T, R> chain(Transformer<T, S> t1, Transformer<S, R> t2) {
    return new Transformer<T, R>() {
        public R transform(T value) {
            return t2.transform(t1.transform(value));  // chaining two transformations
        }
    };
}
```


