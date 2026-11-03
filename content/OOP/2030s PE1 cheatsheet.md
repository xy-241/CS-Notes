

### Implementing `equals`
- It is reflexive: `x.equals(x)` should return true.
- It is symmetric: `x.equals(y)` should return true if and only if `y.equals(x)` returns true.
- It is transitive: if `x.equals(y)` returns true and `y.equals(z)` returns true, then `x.equals(z)` should return true.
- It is consistent: multiple invocations of `x.equals(y)` consistently return true or false.
- For any non-null reference value `x`, `x.equals(null)` should return false.

```java
@Override
public boolean equals(Object other) {
    if (this == other) {
        return true;
    }
    if (!(other instanceof Class)) {
        return false;
    }
    Class c = (Class) other;
    // comparisons
    return ...;
}
```

### Implementing `compareTo`
Compares this object with the specified object for order.

```java
public class Car implements Comparable<Car> {
    @Override
    public int compareTo(Car other) {
        return this.speed - other.speed;
    }
}
```

## Custom Exceptions
```java
public class CustomException extends Exception {
    public CustomException() {
        super("message");
    }
}

CustomException e = new CustomException();
e.getMessage(); // "message"
```


Sure! Here's an updated addition to your cheat sheet that also includes how to implement the Factory Method Pattern using an **abstract class**.

---

### Factory Method Pattern with Abstract Class

```java
abstract class Vehicle {
    protected String model;
    protected int speed;

    // Abstract method to be implemented by subclasses
    public abstract String getDetails();

    // Factory method - implemented in subclasses
    public static Vehicle createVehicle(String type, String model, int speed) {
        if (type.equals("Car")) {
            return new Car(model, speed);
        } else if (type.equals("Bike")) {
            return new Bike(model, speed);
        }
        throw new IllegalArgumentException("Unknown vehicle type");
    }
}

class Car extends Vehicle {
    public Car(String model, int speed) {
        this.model = model;
        this.speed = speed;
    }

    @Override
    public String getDetails() {
        return "Car(model: " + model + ", speed: " + speed + ")";
    }
}

class Bike extends Vehicle {
    public Bike(String model, int speed) {
        this.model = model;
        this.speed = speed;
    }

    @Override
    public String getDetails() {
        return "Bike(model: " + model + ", speed: " + speed + ")";
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle car = Vehicle.createVehicle("Car", "Toyota", 150);
        Vehicle bike = Vehicle.createVehicle("Bike", "Yamaha", 100);

        System.out.println(car.getDetails());  // Outputs: Car(model: Toyota, speed: 150)
        System.out.println(bike.getDetails()); // Outputs: Bike(model: Yamaha, speed: 100)
    }
}
```

#### Key Concepts:
1. **Abstract Class**: `Vehicle` defines a factory method `createVehicle()` that delegates instantiation to the appropriate subclass (`Car` or `Bike`).
2. **Factory Method**: Concrete subclasses (`Car`, `Bike`) are responsible for object creation, providing specific implementations of the product (`getDetails()` method in this case).

This approach helps centralize the object creation logic while allowing flexibility through subclassing.

---

Now your cheat sheet is equipped with both a basic implementation and an abstract class-based version of the **Factory Method Pattern**!

## Take Note
- All methods defined in an interface are `public abstract` by default.
- Use private fields and getters where necessary instead of `public final` fields.
- Ternary operators are allowed.
- Prioritize using `equals` and `toString` over `instanceof` for type comparison.
- Add supported type instances for comparison in the class.

```java
boolean canProvideService(Service service) {
    for (Service supportedService : supportedServices) {
        if (service.equals(supportedService)) {
            return true;
        }
    }
    return false;
}
```

- Override `toString()` when a string representation of an object is needed.
- Access exception messages with `getMessage()`.

## Connecting to NUS SoC Server
```bash
ssh ljunchen@stu.comp.nus.edu.sg
```

SSH into the PLAB server on the day itself:
- Hostname: `peXXX`
- UserID: `plab0XXX`
- Password: `YYYYYYYY`

```bash
ssh plab0XXX@peXXX.comp.nus.edu.sg
```

## Setup
### General
```bash
mkdir .backup/
```

## Vim Shortcuts
- `<ctrl>+w v` - split vertically
- `<ctrl>+w s` - split horizontally
- `:wqa` - write and quit all
- `:term` - launch terminal
- `:resize <number>` - resize windows
- `<ctrl>+n` - autocomplete
- `vsp` - open split screen
- 

## Code Snippets

### ArrayStack
```java
public interface Stack<T> {
    T pop();
    void push(T t);
    int getStackSize();
}

public class ArrayStack<T> implements Stack<T> {
    private T[] arr;
    private final int maxDepth;
    private int index;

    public ArrayStack(int maxDepth) {
        @SuppressWarnings("unchecked")
        T[] temp = (T[]) new Object[maxDepth];
        this.arr = temp;
        this.maxDepth = maxDepth;
    }

    public static <T> ArrayStack<T> of(T[] arr, int maxDepth) {
        ArrayStack<T> arrStack = new ArrayStack<>(maxDepth);
        for (int i = 0; i < maxDepth; i++) {
            arrStack.push(arr[i]);
        }
        return arrStack;
    }

    @Override
    public void push(T t) {
        if (this.index < this.maxDepth) {
            this.arr[this.index] = t;
            this.index++;
        }
    }

    @Override
    public T pop() {
        if (this.index == 0) return null;
        this.index--;
        T t = this.arr[this.index];
        this.arr[this.index] = null;
        return t;
    }

    @Override
    public int getStackSize() {
        return this.index;
    }

    @Override
    public String toString() {
        StringBuilder contents = new StringBuilder();
        for (T item : this.arr) {
            if (item != null) {
                contents.append(item.toString()).append(" ");
            }
        }
        return String.format("Stack: %s", contents);
    }
}
```

### Generic Array
```java
public class Array<T extends Comparable<T>> {
    private T[] array;

    public Array(int size) {
        @SuppressWarnings("unchecked")
        T[] temp = (T[]) new Comparable<?>[size];
        this.array = temp;
    }

    public void set(int index, T item) {
        this.array[index] = item;
    }

    public T get(int index) {
        return this.array[index];
    }

    public int length() {
        return this.array.length;
    }

    public T min() {
        if (this.array.length == 0) return null;
        T smallest = this.array[0];
        for (int i = 1; i < this.array.length; i++) {
            T current = this.get(i);
            if (current.compareTo(smallest) < 0) smallest = current;
        }
        return smallest;
    }

    @Override
    public String toString() {
        StringBuilder s = new StringBuilder("[ ");
        for (int i = 0; i < this.array.length; i++) {
            s.append(i).append(":").append(this.array[i]);
            if (i != this.array.length - 1) {
                s.append(", ");
            }
        }
        return s.append(" ]").toString();
    }
}
```

### Queue
```java
public class Queue<T> {
    private T[] items;
    private int first;
    private int last;
    private int maxSize;
    private int len;

    public Queue(int size) {
        this.maxSize = size;
        @SuppressWarnings("unchecked")
        T[] temp = (T[]) new Object[size];
        this.items = temp;
        this.first = -1;
        this.last = -1;
        this.len = 0;
    }

    public boolean enq(T e) {
        if (this.isFull()) return false;
        if (this.isEmpty()) {
            this.first = 0;
            this.last = 0;
        } else {
            this.last = (this.last + 1) % this.maxSize;
        }
        this.items[this.last] = e;
        this.len++;
        return true;
    }

    public T deq() {
        if (this.isEmpty()) return null;
        T item = this.items[this.first];
        this.first = (this.first + 1) % this.maxSize;
        this.len--;
        return item;
    }

    public boolean isFull() {
        return this.len == this.maxSize;
    }

    public boolean isEmpty() {
        return this.len == 0;
    }

    public int length() {
        return this.len;
    }

    @Override
    public String toString() {
        StringBuilder str = new StringBuilder("[ ");
        int i = this.first;
        int count = 0;
        while (count < this.len) {
            str.append(this.items[i]).append(" ");
            i = (i + 1) % this.maxSize;
            count++;
        }
        return str.append("]").toString();
    }
}
```

