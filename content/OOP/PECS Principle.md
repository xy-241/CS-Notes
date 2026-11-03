
The **PECS principle** is a guideline to help you decide which type of wildcard to use when working with generics it helps maintain **type safety** in generic code, ensuring that the correct types are used without causing runtime errors.:


The **PECS principle** guides the use of wildcards in generics:

- **Producer Extends (`? extends T`)**: Use when you're **reading** values from a structure (it "produces" values).
- **Consumer Super (`? super T`)**: Use when you're **adding** values to a structure (it "consumes" values).

---

### **Producer Extends (`? extends T`)**

- **Purpose**: Use when you want to **read** elements.
- **`? extends T`**: Accepts `T` and any of its **subtypes**.
- **You can read** elements as `T`. 
- **You cannot add** elements.

**Example**:
```java
public void printAnimals(List<? extends Animal> animals) {
    for (Animal animal : animals) {
        animal.makeSound();  // Safe to read as Animal
    }
}
```
- **Cannot add** new elements:
```java
animals.add(new Dog());  // Compile-time error: Cannot add to ? extends T
```



---

### **Consumer Super (`? super T`)**

- **Purpose**: Use when you want to **add** elements.
- **`? super T`**: Accepts `T` and any of its **supertypes**.
- **You can add** elements.
- **You cannot read** elements as `T` (only as `Object`).

**Example**:
```java
public void addDogs(List<? super Dog> animals) {
    animals.add(new Dog());  // Safe to add
}
```
- **Cannot read** as `Dog`:
```java
Dog dog = animals.get(0);  // Compile-time error: Cannot read as Dog, only Object
```


---

### **Combining PECS: Copying Data**

**Example**: 
```java
public static <T> void copy(List<? extends T> source, List<? super T> destination) {
    for (T item : source) {
        destination.add(item);
    }
}
```
- **Producer** (`? extends T`): You can read from `source`.
- **Consumer** (`? super T`): You can add to `destination`.

---

### **PECS in Common Java APIs**

1. **`Collections.copy()`**:
   - `List<? super T> dest`, `List<? extends T> src`: Source produces, destination consumes.
   
2. **`Stream.forEach()`**:
   - `forEach(Consumer<? super T> action)`: Consumes stream elements.

---

### **Common Compile-Time Errors**

1. **Adding to a Producer (`? extends T`)**:
   ```java
   List<? extends Number> numbers = new ArrayList<>();
   numbers.add(10);  // Compile-time error: Cannot add to ? extends T
   ```

2. **Reading from a Consumer (`? super T`)**:
   ```java
   List<? super Integer> integers = new ArrayList<>();
   Integer num = integers.get(0);  // Compile-time error: Cannot read as Integer
   ```

---

### **Summary**

- **Producer Extends (`? extends T`)**: Use for **reading**; can't add elements.
- **Consumer Super (`? super T`)**: Use for **adding**; can't read specific types.

**PECS** helps ensure type safety in generic code, making it flexible yet strongly typed.