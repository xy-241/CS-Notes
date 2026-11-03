
In Java, **wildcards** are used in **generics** to represent unknown types. Wildcards allow you to make your methods and classes more flexible by letting them work with a range of types. There are three types of wildcards:

1. **Unbounded Wildcard (`?`)**
2. **Upper-Bounded Wildcard (`? extends T`)**
3. **Lower-Bounded Wildcard (`? super T`)**


---

### **1. Unbounded Wildcard (`?`)**

- Represents **any type**. Use when the specific type doesn't matter.
  
**Example**:
```java
public void printList(List<?> list) {
    for (Object obj : list) {
        System.out.println(obj);  // Safe to print as Object
    }
}
```

- **You can read** elements as `Object`.
- **You cannot add** specific types to the list because the compiler doesn't know the exact type of elements.

**Compile Warning/Error**:
```java
List<?> list = new ArrayList<>();
list.add("Hello");  // Compile-time error: Cannot add elements to a wildcard list
```

**Practical Use**: Use when reading values from a collection but you don't need to modify or know the exact type.

---

### **2. Upper-Bounded Wildcard (`? extends T`)**

- Specifies that the unknown type is a **subtype of `T`** (i.e., `T` or any class that extends `T`).
  
**Example**:
```java
public void printNumbers(List<? extends Number> list) {
    for (Number num : list) {
        System.out.println(num);
    }
}
```

- **You can read** elements as `T` (`Number` in this case).
- **You cannot add** elements because the compiler doesn't know the specific subtype.

**Compile Warning/Error**:
```java
List<? extends Number> numList = new ArrayList<>();
numList.add(42);  // Compile-time error: Cannot add elements to a list with upper-bound wildcard
```

**Covariance**: they are covariant which allows you to assign more specific types to a general type example you can assign `arr1` into `arr2` as `Shape` is a subtype of `Circle` :
```java
Seq<? extends Circle> arr1 = ..; // run-time type omitted 
Seq<? extends Shape> arr2 = arr1;
```

**Practical Use**: Use to **read** values when you're not modifying the collection. It's safe because the elements can always be cast to the upper bound type.

---

### **3. Lower-Bounded Wildcard (`? super T`)**

- Specifies that the unknown type is a **supertype of `T`** (i.e., `T` or any class that is a superclass of `T`).
  
**Example**:
```java
public void addNumbers(List<? super Integer> list) {
    list.add(5);
    list.add(10);
}
```

- **You can add** elements of type `T` or any subtype.
- **You cannot read** elements as `T` because the list could contain any supertype of `T`, so elements can only be read as `Object`.

**Compile Warning/Error**:
```java
List<? super Integer> numList = new ArrayList<>();
Integer num = numList.get(0);  // Compile-time error: Can't read elements as Integer, only Object
```

**Contravariance**: Allows you to assign more general types to a specific one example you can substitute `?` with any type that's the supertype of `Integer` :
```java
List<Object> objList = new ArrayList<>();
List<? super Integer> intList = objList;  // Allowed (Object is a supertype of Integer)
```

**Practical Use**: Use when you want to **add** elements to a collection, and you don't care about reading specific types.

---

