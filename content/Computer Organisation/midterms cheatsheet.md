
## Computer Data Representation
---
- Provides standardised way to express measurements, allowing for easy comparison of values

## Bit
---
- Holds a value of `0` or `1`
</br>

- Let `n` be the number of bits we have, where `n>=1`
- With `n` bits, we can represent $2^{n}$ values
$$
2^{n}= 2^{n-1} + 2^{n-2} + \cdots + 2^{0}
$$

>[!example] Given 2 bits
>When `n` is $2$, `2^n = 4`, 4 values: `00`, `01`, `10`, `11` which are corresponding to 0,1,2,3.

### Maximum value of n bits
**Approach 1:** $2^{n} -1$

**Approach 2:** $2^{n-1} + \ldots + 2^0$


>[!example] Given 2 bit
>`n` is $2$
>- **Approach 1:** `2^2 - 1 = 3`
>- **Approach 2:** `2^1 + 2^0 = 3`

>[!question] How many bits are required to represent a decimal number?
> Given $M$ is a decimal number, the number of bits required to represent it is the ceiling of log₂ M, which is represented with $\lceil \log_2 M \rceil$.

### Bit String
- A collection of 0s & 1s

## Byte
---
- A group of 8 [[#Bit]]
- The smallest unit a programming language uses to store the data and instruction

>[!question] KB vs KiB?
> `B` refers to **Byte**, the `K` refers to $10^3$ and `Ki` refers to $2^{10}$. So `1KB` is **$1000$  bytes** and `1KiB` is **$1024$ bytes**.
To find the number of bits needed to represent a decimal number \( N \):

### Calculating the Number of Bits to Represent a Decimal Number

To find the number of bits needed to represent a decimal number $N$:

1. **Use the formula**: 
   $$
   \text{Number of bits} = \lceil \log_2(N + 1) \rceil
   $$
   
2. **Example**: For $N = 150$:
   - Add 1: $150 + 1 = 151$
   - Calculate: $\log_2(151) \approx 7.238$
   - Round up: $\lceil 7.238 \rceil = 8$

Therefore, you need 8 bits to represent 150.



## Word
---
- The size of a word can vary depending on the [[Instruction Set Architecture (ISA)]]
- A single unit of transfer from the [[Main Memory]] to the [[CPU]] and within the CPU
- Common word sizes are 16 bits, 32 bits, or 64 bits
- typically a word in mips is 32 bits made up of $4 * 8 bytes$ which corresponds to the size of the register 

>[!question] How do we check if a given memory address is word-aligned?
> It should divisible by the word size.


## Abstract
---

| Decimal | Binary | Hexadecimal |
| ------- | ------ | ----------- |
| $0$     | $0000$ | $0$         |
| $1$     | $0001$ | $1$         |
| $2$     | $0010$ | $2$         |
| $3$     | $0011$ | $3$         |
| $4$     | $0100$ | $4$         |
| $5$     | $0101$ | $5$         |
| $6$     | $0110$ | $6$         |
| $7$     | $0111$ | $7$         |
| $8$     | $1000$ | $8$         |
| $9$     | $1001$ | $9$         |
| $10$    | $1010$ | $A$         |
| $11$    | $1011$ | $B$         |
| $12$    | $1100$ | $C$         |
| $13$    | $1101$ | $D$         |
| $14$    | $1110$ | $E$         |
| $15$    | $1111$ | $F$         |
>[!important] Conversion between bases
> ![[base_conversion_quiz.png|400]]
>
> We convert from one base to decimal base with the help of the [[#Radix|radix]], then from decimal base convert to the desired base by either **division** with that particular base for the whole number or **multiplication** with that particular base for the fraction.

>[!tip] Practice conversion
> You can use [this](https://lukerissacher.com/hexquiz) to practice hex to decimal conversion.
> 
> You can use [this](https://www.webcalculate.com/games/binary-to-hexadecimal-game/index.html) to practice binary to hex conversion.
> 
> You can use [this](https://www.purposegames.com/game/powers-of-two-quiz) to practice decimal to power of 2 conversion.
> 
> You can use [this](https://www.jetpunk.com/user-quizzes/91108/fast-typing-powers-of-2) to practice power of 2 to decimal conversion.
### Whole Number Decimal to Binary
![[decimal_to_binary_1.png|300]]

- Keep diving by 2 until we get 0
- Then the binary form counts from **bottom to top**

>[!important]
> The idea applies to other bases; replace 2 with the corresponding [[#Radix|radix]].

### Fraction Decimal to Binary
![[decimal_to_binary_2.png]]

- Keep multiple by 2 until we get **1** or **infinite loop**
- Then the binary form counts from **top to bottom**

>[!important]
> The idea applies to other bases; replace 2 with the corresponding [[#Radix|radix]].

## Radix
---
$$
(a_k a_{k-1} ... a_1 a_0 . a_{-1} a_{-2} ... a_{-m})_n = 
a_k \cdot n^k + a_{k-1} \cdot n^{k-1} + ... + a_1 \cdot n^1 + a_0 \cdot n^0 
+ a_{-1} \cdot n^{-1} + a_{-2} \cdot n^{-2} + ... + a_{-m} \cdot n^{-m}
$$

- Also known as **Base**
- The **number of unique digits**, including zero, used to **represent numbers** within that system
- The formula above can be used to convert any base-R to a  decimal number

>[!important]
> Weights are represented in powers of the radix (R). In base-2, weights are expressed in terms of powers of 2, and in base-10, they are expressed in terms of powers of 10.

>[!important] Radix representation in C
> In C, by default, all numbers are interpreted as base-10 (decimal). To represent numbers in other bases, you can use specific prefixes:
> - Prefix `0` for octal (base-8) representation
> - Prefix `0x` or `0X` for hexadecimal (base-16) representation


## Abstract
---
- Represent different characters in terms of [[Computer Data Representation#Bit String]]
- There are many different character encoding standards like [ASCII](https://en.wikipedia.org/wiki/ASCII), [GBK (character encoding)](https://en.wikipedia.org/wiki/GBK_(character_encoding)#:~:text=GBK%20is%20an%20extension%20of,%3A1993%2C%20or%20Unicode%201.1.) and [[#UTF-8]] etc

>[!caution] Incompatible Encoding Standard
> Characters encoded in one standard may be displayed differently in another standard.
> 
> We should always use the same character encoding standard, UTF-8 is recommended. And if we see characters that are not displayed correctly, we shouldn't save the file, because saving will overwrite the file with placeholders for those wrongly displayed characters.

>[!important]
> Programming languages like **Python** use the number of [code point](utf_8_code_point.png) of the string as the length of the string, not the number of characters. One example is 👍🏻 which is represented with two code points, you will get two instead of one as the length of the string.
> 
> System programming languages more likely to use [[#Unicode Unaware String Function]] which counts the number of [[Computer Data Representation#Byte]] used to store a string.

## UTF-8
---
![[utf-8_space_saving.png|500]]
- [UTF-8](https://en.wikipedia.org/wiki/UTF-8) allows **variable-length encoding** which means [code point](utf_8_code_point.png) is variable-length, this brings a great amount of space saving to store different characters. As shown above, we use 1 [[Computer Data Representation#Byte]] to store **a**, 4 bytes to store 😊, and 3 bytes to store **家**. Without variable-length encoding, we need to use 4 bytes to store each character.



## Unicode Unaware String Function
---
- Unicode Unaware String Function counts the **numbers of [[Computer Data Representation#Byte]]** used by the string, and **not the number of characters** inside the string
- String in [[Go]] is encoded with [[#UTF-8]] and is treated as an [[Array]] of [[Computer Data Representation#Byte]]. This explains why the index is off and `len(myString)` returns $8$, instead of $6$

![[utf-8_string_go.png|500]]
- This behaviour applies to other languages like [[C]], you get $7$ when you run `printf("%d", strlen("😊家"));`, instead of $2$


>[!tip] Abstract away this weird behavior 
> We can cast the string to an array of `rune` to have an intuitive interface to the string in Go as shown below. But `rune` as you can see below is `int32`, this approach comes with some space sacrifices.
> 
> ![[cast_string_to_rune_array_go.png|500]]
## References 
---
- [锟斤拷�⊠是怎样炼成的——中文显示「⼊」门指南【柴知道】 - YouTube](https://youtu.be/zSstXi-j7Qc?si=Xx_PqdiLIvZuHQMH)
- [Unicode, in friendly terms: ASCII, UTF-8, code points, character encodings, and more - YouTube](https://youtu.be/ut74oHojxqo?si=aeYNpySAgKZTlOI0)


   ## Abstract
---

![[IEEE 754 Floating-Point Rep.png|500]]

- Based on the [IEEE 754 Standard](https://en.wikipedia.org/wiki/IEEE_754)
- 32 bits in total 
- **Sign:** $0$ indicates a positive number, $1$ indicates a negative number
- **Exponent:** Comes with a bias of $- 127$, represented by all exponent bits set to 0. To obtain a positive exponent, set the 8th (most significant) bit to `1`, resulting in a value of `128`
- **Mantissa:** This represents the **fractional part of the number** after [[#Normalised Number|normalisation]]. The binary digits following the decimal point are included in the mantissa.

>[!question] Why make it so complicated?
> A more intuitive way to represent numbers with decimal points is to use **fixed-point**, where we allocate a certain number of bits for the whole number part and a certain number of bits for the fractional part. However, floating-point encoding allows us to use the same number of bits to represent **both very large and very small numbers, with high precision** thanks to the use of **exponent**.

>[!important] How Mantissa Precision Varies with Exponent
> ![[floating_point_as_an_approximation.png]]
> 
> The **mantissa** in IEEE 754 floating-point representation **determines the precision** of a number. Let's analyze how precision changes across different ranges:
> - **Range 1 to 2 ($2^0$ to $2^1$):** All 23 bits of the mantissa contribute to the precision after the decimal point.
> - **Range 2 to 4 ($2^1$ to $2^2$):** One bit is used to represent the whole number (2) before the decimal point, leaving 22 bits for precision after the decimal.
> - **Generalisation:** For every increase in the exponent by 1 (doubling the range), the precision after the decimal point decreases by a factor of 2. This is because one more bit is allocated to representing the whole number part.


>[!tip]
> To store large whole numbers, use the `long` data type. Floating-point options like `double` may introduce precision loss.
> 
> For improved readability, convert binary representations to hexadecimal. 
> 
> Here is an [Online Converter](https://www.h-schmidt.net/FloatConverter/IEEE754.html) to help visualising the floating-point encoding better.

>[!question] Why 0.1 + 0.2 = 0.30000000000000004?
> For numbers whose binary representation requires **infinite precision**, like the decimal number $0.1$, the binary equivalent is analogous to representing $\frac{1}{3}$ in decimal form. 
> 
> With limited precision (e.g., 32 bits), we inevitably lose some accuracy. This is why 0.1 + 0.2 in binary floating-point arithmetic does not strictly equal 0.3.

>[!important] Approximation destroys associativity
> Given 3 floating points number $A$, $B$ and $C$, $(A ~op~ B) ~op~ C \neq A ~op~ (B ~op~ C)$, which is same as $D ~op~ C \neq A ~op~ E$.
> 
> [[Properties of Integer#Associativity (结合律)|Associativity]] is not guaranteed with floating-point numbers because each operation may produce an approximated value.

>[!tip] Converting from Decimal to Float (IEEE 754 Single Precision)
> ![[decimal_to_float.png|300]]
> 
> 1. Convert [[Number System#Decimal to Binary|Decimal to Binary]]
> 2. Convert the binary form to [[#Normalised Number|normalised form]]
> 3. Calculate the Exponent Field by adding the bias $127$ to the exponent & convert the sum to binary (8 bits)
> 4. Determine the Sign Bit, $0$ for positive, $1$ for negative
> 5. Assemble the Float remember 1 bit for sign , 8 bit for exponent and 23 bits for mantisa 
> 6. Convert to Hexadecimal by grouping the 32 bits into groups of 4, and convert each group to its hexadecimal equivalent

## Normalised Number
---

![[implicit_1.png|500]]

- In the context of [[Floating-Point Encoding (浮点数编码)]], a normalised number is one where the **leading digit** (the digit to the left of the decimal point) is **always** $1$. This $1$ is not explicitly stored **but is implicit**, thus one more bit for the mantissa for a **higher accuracy**


>[!important]
> ![[normal_number_range.png|500]]
>
> The range of real numbers between $0$ and the [[#Smallest Positive Normalised Number]] is not covered by normalised numbers, but by [[#Subnormal Number|subnormal numbers]]. 
> 
> The leading 1 is implicit in **normalised numbers when the exponent is not zero**. When the exponent is zero, we have a subnormal number, and the implicit leading 1 is no longer assumed.

### Smallest Positive Normalised Number
![[smallest_normalized_number.png]]

- One bit for *exponent* to differentiate from [[#Subnormal Number]]

### Biggest Positive Normalised Number
![[biggest_normalised_number.png]]

- All 1s for *exponent* means [[#Infinity]]



## Subnormal Number
---
- Also known as **Denormalised Number**
- Fill up the gap between 0 and the smallest [[#Normalised Number]]
- Without, we will get a 0 if the difference between 2 numbers is smaller than the smallest normalised number

 ![[importance_of_subnormal.png|500]]
 >[!caution] 
 > In non-debug mode, subnormal number maybe turned off for performance reasons, and this may lead to unexpected errors.
 
 
### Smallest Positive Subnormal Number
- The exponent bias is fixed at -126 when denormalised, and 0 is implicit instead of 1
![[smallest_denormalized_exponent.png]] 

### Biggest Positive Subnormal Number
- [[#0]] when Mantissa bits are all 0
![[biggest_denormalized.png]]




## 3 Special Cases
---
### 0
- Both Exponent & Mantissa is 0
![[float_0.png]]

### Infinity
- Exponent is 255, but Mantissa is 0
![[float_inf.png]]

### NaN
- Exponent is 255 & Mantissa isn't 0
![[float_NaA.png]]


## C programming
---

>[!important] Entry point function
> A C program must **have** a [[Function|function]] with the [[Function#Function Signature|function signature]] `int main()`. It is **the** standardised entry point, **ensuring** proper interaction with the operating system.


>[!question] What does `a = b = c = 3 + 6` mean?
> `9` assigned to variables `c`, `b` and `a`.
> 
> `c = 3 + 6` returns `9` which is assigned to `b`, then `b = 9` returns `9` which is assigned to `a`. `c = 3 + 6` returns `9` is known as **side effect**.

>[!attention] Remainder operation in C
> `10 % 4` gives `2`, `-10 % 4` gives `-2`. The **sign of the dividend is preserved**.

## C Terminology
---

| Terminology | Meaning                             |
| ----------- | ----------------------------------- |
| C Vector    | Basically [[Array#Dynamic Array]]   |
| C Structs   | Allow grouping of heterogenous data |

## C Operator Precedence
---
 ![[c_operator_precedence.png|500]]

- If we want operators with **lower precedence** to **execute first**, we need to **use parentheses**

## Abstract
---
- Tools that translates programming languages down the layers of [[Abstraction#Programming Abstraction]]



## Compiler
---
- Translate Programming Language codes to [[Instruction]] or an intermediate code like [[Assembly language]] in [[C]] and **Bytecode** in [[Java]]
- 

### Variable Mapping
- [[Language Processors#Compiler|Compiler]] associates variables in program with [[Register]]


### Preprocessor
- Text substitution tool
- It instructs the [[#Compiler]] to do required pre-processing like [[Macro Expansion]] before the actual **compilation**

### Preprocessor Directives
- Instructions to tell the [[#Preprocessor]] what kind of library headers it needs to bring in header files, define constants, and create [[Macro Expansion]]

>[!example]
>Bring header files
>- `#include <stdio.h>`
>
> Define constants
> - `#define KMS_PER_MILE 1.609`

>[!question] `#include <stdio.h>` vs `#include "stdio.h"`
> `#include <stdio.h>` instructs the preprocessor to search for the header file `stdio.h` in the standard include directories, typically where system libraries reside. In contrast, `#include "stdio.h"` directs the preprocessor to search for the header file in the current directory first, and if not found, then in the standard include directories.

## Assembler
---
- Translates [[Assembly language]] to [[Instruction]]

## Abstract
---
- [[Language Processors#Preprocessor]] replaces the [[Macro]] with the value before passing to the [[Language Processors#Compiler]]

```c {2} {11}
#include <stdio.h>
#define PI 3.1415 // Macro Expansion!

int main()
{
    float radius, area;
    printf("Enter the radius: ");
    scanf("%f", &radius);

    // Notice, the use of PI
    area = PI*radius*radius;

    printf("Area=%.2f",area);
    return 0;
}
```

>[!success] Memory efficiency
> This avoids the use of variables which saves memory.

>[!important]
> Not to put `;` at the end, or it will be considered as part of the macro value!

## Function-like Macro
---
Not same as [[Function]], doesn't have [[Type Safety]]

```c {3} {10}
#include <stdio.h>
#define PI 3.1415
#define circleArea(r) (PI*r*r)

int main() {
    float radius, area;

    printf("Enter the radius: ");
    scanf("%f", &radius);
    area = circleArea(radius);
    printf("Area = %.2f", area);

    return 0;
}
```



## Abstract
---
>[!important] Uninitialised variables
> Uninitialised variables in C contain **unknown values**, unlike [[Java]] which sets $0$ for uninitialised [[Datatype#Primitive Datatype]]!

>[!question] How to find the spaces used by a datatype?
> `sizeof(int)` returns the size of `int` in the current machine.

>[!important] Importance of explicit datatype
> C uses the [[Datatype|data type]] to determine the underlying [[Instruction|instruction]] to be generated. Different instructions are used to handle [[Floating-Point Encoding (浮点数编码)|floating-point numbers]] and [[Integer Encoding (数字编码)|integers]].


>[!question] What is char in C?
> Char is basically a 8-bit integer, but usually used to hold a [[Character Encoding (字符编码）|character]] using [ascii table](https://www.ascii-code.com/).
> 
> **Everything in C is an number!**


>[!important] No boolean type in ANSI C!
> `0` is used to represent `false`, any other value is used to represent `true`.


## C Mixed-type Arithmetic Operation
---
1. `10/4.0` will give us float `2.0`, but if we `int p = 10/4.0`, `p` will have a value of `2` which converts from float `2.0` to int `2`
2. `10 / 4.0` involves a float operand, so the result is the floating-point value `2.5`. If you assign this to an `int` variable like `int p = 10 / 4.0`, the fractional part is truncated, and `p` will store the integer value `2`.

### Type Casting in C
1. `float p = (float) 6 / 4` will result in `p = 1.5`. The `(float)` explicitly converts the integer `6` to a float before the division occurs. This ensures that floating-point division is performed, yielding a floating-point result
2. `float p = (float) (6 / 4)` will result in `p = 1.0`. The expression within the parentheses `(6 / 4)` is evaluated first. Since both operands are integers, integer division is performed, resulting in `1`. This integer value is then converted to a float using the `(float)` cast.

## Pointer
---
- A [[Datatype]] whose value is [[Memory Address]], and itself is located at a memory address too
- In the diagram below shows some [[Go]] codes, we create a pointer `var p *int32 = new(int32)` and perform [[#Pointer Dereference]] with `*p`

![[pointer_example.png|600]]

>[!success] Memory efficiency
> Pass data to functions by pointer is **memory-efficient**. The data we pass into a function is basically a [[Memory Address]] to access that block of data. If we pass data into functions without pointer. We need to create an entire duplicate of data and pass it to the functions. 
> 
> In [[Java]], data is passed to functions by pointer by default. However in [[Go]], we need to explicity specify the pointer datatype for the function input, then we can pass data by point!
> 
> Pointer is the usual way of accessing hardware.

>[!important] More power!
> [[Function#Function Scope Rule|Function scope rules]] prevent a [[Function#Function Call|function call]] from directly modifying variables outside its own scope. However, using pointers allows you to pass [[Memory Address|memory addresses]] to a function, **enabling changes made within the function to affect variables outside its scope**.


### Pointee
- The **actual data** that a [[Pointer]] points-to inside the [[Address Space#Heap Segment]]

### Pointer Dereference
- The process of accessing [[#Pointee]] of a [[Pointer]]



>[!important] Segmentation fault
> ```c
> int *n;
> 
> *n = 123;
> ```
> 
> When `*n` is uninitialised, `*n = 123;` will attempt to write the value `123` into a random [[Memory Address|memory address]] that `*n` might be pointing to. This memory address may not be accessible to your program, which will trigger a [[Segmentation Fault|segmentation fault]].
 

## C Pointer
---
>[!code] Printing pointer in C
> Use `%p` as the [[C String#C IO|format string]].

>[!code] Obtaining variable memory address in C
> Prefix the variable with the address operator `&`. The address is in [[Number System|hex format]]

>[!code] Declaring a Pointer
> `int *a_ptr;` `a_ptr` is a [[Pointer|pointer]] to a variable with [[Datatype|type]] `int`.

>[!code] Accessing the variable holding the actual data using pointer
> Prefix the variable with the **indirection operator** `*` which is also a [[#Pointer Dereference|dereferencing operator]].
## Null Pointer
---
- [[Pointer]] that doesn't point to any memory location, basically contains a invalid [[Memory Address]]
- In [[C]], it is represented by `0` or `nullptr`
- In [[Java]], it is represented by `null`, [[Datatype#Custom Datatype]] can be `null`
- In [[Go]], it is represented with `nil`

## Void Pointer
---
- A [[Pointer]] without [[Datatype]] aka a pre-defined size
- Used when we aren't sure what the exact size of a variable like the return type of [[malloc]]

>[!important]
> We should always try to cast it to a specific type whenever it is possible.

## Dangling Pointer
---
```c
int *ptr = (int *)malloc(sizeof(int));
*ptr = 1;

func(ptr); // func() carelessly does "free(ptr);"

*ptr = 2; // ptr is now a dangling pointer
```

- A [[Pointer|pointer]] that has been freed, but the program logic still assumes it's valid.

>[!important]
> The program may still run without a crash, this will lead to bug that very hard to trace back to.

## Pointer Arithmetic
---
![[pointer_arithmetic_c.png|500]]

- When we increment or decrement a [[Pointer|pointer]], we are doing it in **units of its corresponding data type**. So, for the above example, the data type takes **4 bytes**. Therefore, when we increment or decrement by one, we are actually adding or subtracting 4 bytes


## C Function
---


### Function Prototype
- In [[C]], a function prototype consists of the **return type**, **name of the function**, and the **list of parameter [[Datatype|datatypes]]** (names of parameters are **optional**)

>[!important] Placement of function prototype
> It's good practice to put function prototypes at the top of the program, before the `main()` function. This informs the [[Language Processors#Compiler|compiler]] of the functions your program may use, along with their return types and parameter types.
>  
> Without function prototypes , you'll receive error or warning messages from the compiler like `implicit declaration of function`.

>[!important] Function definition
> [[#Function Definition|Function definitions]] should follow after the `main()` function. So `main()` stays at the top of the program which makes it easier to analyse.

>[!important]
> Without function prototype, C assumes the default(implicit) return type of the custom functions is `int`.
> 

>[!important]
> Always end the function prototype with `;`!


### Function Definition
- The actual code implementation of the the [[#Function Prototype]]

## c string 
---
- Basically an [[Array|array]] of characters that ends with the null terminator `\0`

>[!important] String termination
>![[c_string_termination.png|500]]
>
> Always ensure strings end with an **null terminator** `\0`, or you will encounter unexpected behaviour when using string methods.
> 
> In many cases, a string that is not properly terminated with `\0` will result in **illegal access of memory** like [[Address Space#Stack Overflow]].
> 
> The issue shown in the picture can be resolved by assigning the string using double quotation marks - `"apple"`, or, less preferably, by using `str[5] = '\0';`.

>[!important] Boolean value of null terminator
> The null terminator `\0` has a boolean value of `false` which is equivalent to the integer `0`!

>[!code] Return length of string
> Use `strlen(s)`, `\n` is considered as a character.

>[!code] String comparison
> `strcmp(s1, s2)`, it returns negative if `s1` is lexicographically less than `s2`, positive if bigger, else both are equal. 
> 
> We should use `strncmp(s1, s2, n)`, because it safer, it will compare the first `n` characters if a null termination `\0` is missing.

>[!code] Assign string value in C
> When we want to re-assign string value in C, we need to use `strcpy(s1, s2)` which assigns `s2` to `s1`.
> 
> We should use `strncpy(s1, s2, n)`, because it safer, it will only copy the first `n` characters if a null termination `\0` is missing.

### scanf()
- The syntax is `int scanf("%d", &a);`

>[!important] May have runtime crash
> `scanf()` **reads until the first whitespace**, so the input may be too large and causes the program to crash.
> 
> The whitespace isn't being read in.

### fgets()
- The syntax is `char *fgets(char *str, int size, FILE *stream);`

>[!important] More reliable
> `fgets()` reads until the first newline character or the specified `size`(`size-1` chars) is reached, whichever comes first. So we can control how large the input will be; any excess will simply be ignored.
> 
> The `\n` is read in as one character.


>[!important] 
> When we want to read in a string that should be null-terminated, but the string contains `\n` which prematurely terminates the `fgets()` function, we can use the following code snippet to ensure it is still null-terminated.
> 
> ```c
> // Read a line of input from standard input (stdin) into the 'str' buffer, 
> // with a maximum size of 'size' bytes.
> fgets(str, size, stdin);
> 
> // Calculate the length of the string stored in 'str'.
> len = strlen (str);
> 
> // Check if the last character in the string is a newline character ('\n'). 
> // If so, replace it with a null terminator ('\0') to ensure proper null-termination.
> if (str[len-1] == '\n') str[len-1] = '\0';
> ```

### puts()
- Print a string to the console with newline included


## C IO
---
>[!important] Read float
> `scanf("%f", &miles);` reads in a [[Floating-Point Encoding (浮点数编码)|float number]]. The value it returns is the total number of successfully matched and assigned input items.
> 
> `"%f"` is known as a [[c_format_string.png|format string]], `&miles` is known as a input list.

>[!important] Print float
> `printf("That equals %9.3f km.\n", kms);` prints a floating-point number to the screen, formatted to occupy a **minimal width** of 9 characters (including the decimal point and any padding spaces if the number is shorter). The number will be displayed with 3 decimal places of precision.
> 
> `"That equals %9.3f km.\n"` is known as a format string, `kms` is known as print list. `\n` is known as [[escape_sequence.png|escape sequence]] to format the string.


## C Struct
---
```c
typedef struct {
  int acctNum;
  float balance;
} account_t;
```

- C structures allow us to define custom [[Datatype|data types]], enabling us to group variables of different types under a single name
- This above code snippet defines a **structure type** named `account_t`

>[!code] Structure variables
> Structure variables have [[Main Memory|memory]] allocated to them. Using the code snippet above, we can create structure variables using `account_t a_1, a_2;` which creates two structure variables `a_1` and `a_2`.

>[!code] Initialising structure variables
> Using the code snippet above, we can initialise the structure variable with `account_t a_1 = {1, 955.9};`

>[!code] Accessing members of structure variables
> Using the code snippet above, we can access and modify the `balance` using `a_1.balance;`

>[!important] Dereferencing a pointer to a structure and accessing its attributes
> We need to make sure we use parentheses like `(*player_ptr).name`, because `.` has a higher [[C#C Operator Precedence|operator precedence]].
> 
> Or we can simply use `player_ptr->name` to achieve the same, this is a syntactic sugar.


## C Union
---
```c
union _union_name_ {
    _datatype member1_;
    _datatype member2_;
    ...
};
```

- The Union is a user-defined data type in C language that can contain elements of the different [[Datatype|data types]] just like [[C Structure|structure]]. But unlike structures, all the members in the C union are stored in the same [[Memory Address|memory location]]. Due to this, **only one member can store data at the given instance**

>[!question] What can we do with this?
> We can efficiently obtain the representation of the same element in different data type encodings.


## Enum
---
```c
enum Heat {
  LOW,
  MEDIUM,
  HIGH
}
```

- A C type that represents a group integer constants that can't be changed

>[!success] Benefits
> This improves code readability and prevents bugs.

## References
---
- [C Unions - GeeksforGeeks](https://www.geeksforgeeks.org/c-unions/)

## C array
---
```c
#define N 10

int source[N] = {10, 20, 30, 40, 50}; // The rest of the elements are initialised to 0
int dest;

dest = source; // illegal!
```

- An array name is a **fixed** [[Pointer|pointer]]; it points to the first element of the array and thus **cannot be altered**, `source` is same as `&source[0]`. The code above attempts to alter `dest`, making it point elsewhere

>[!question] What if I want to make a copy to another array?
> Use a for-loop, `for (int i=0; i<N; i++) dest[i] = source[i];`.

>[!important]
> Using the code snippet example above, `source[2]` represents the value `30` itself, not a pointer or reference to the value `30`.


##  C complilation 
---

![[c_compilation.png|500]]

- Convert from C program to [[Instruction]], then execute it as a [[Process (进程)]]

>[!important]
> We usually use [`gcc`](https://gcc.gnu.org/) which stands for GNU Compiler Collection, a program that handles the [[C Program Compilation|5 steps program compilation]] for us.
> 
> `gcc -Wall program.c` tells the C compilers to give all possible warnings.

### Stage 1
```bash
gcc -E hello_world.c
```

- [[Language Processors#Preprocessor]] generates expanded `.I` file
- Process [[#Pre-processor Directives]]
- Replace all the [[Macro Expansion]] in the [[Header File]] & program files
- Would't complain about missing [[Header File]]
- Is done by a program called [`cpp`](https://en.wikipedia.org/wiki/C_preprocessor)
- ~~Remove spaces, new lines & comments~~



### Stage 2
```bash
gcc -S hello_world.c
```

- [[Language Processors#Compiler]] generates codes in [[Assembly language]] in `.s` format
- Returns error & warnings if the [[Header File]] isn't defined
- Is done by a program called [`cc1`](https://unix.stackexchange.com/questions/77779/relationship-between-cc1-and-gcc)


### Stage 3
```bash
gcc -c hello_world.c
```

- [[Language Processors#Assembler]] generate [[Instruction]] in `.o` format
- Essential for code sharing and dynamic linking in software development
- Is done by a program called `as`

### Stage 4
- **Linker** Link up with other [[Instruction]] which are dependencies of the program we wrote
- Sometimes we will break the program into many different `c` files, then run **compiler** on each, and link up all. This is for easier management & debugging 
- Output executable format or library file
- We can use `ldd` to show the dependencies 
- Will return error if unable to link up some of the required `.o` files
- Is done by a program called [`ld`](https://stackoverflow.com/questions/34117924/how-to-link-the-c-runtime-library-with-ld)
### Stage 5
- **Loader** loads the executable from [[Disk]] to [[Main Memory]] to create a [[Process (进程)]]. This part is handled by the [[OS]]


## References
---
- [C Language Source Code to EXE](https://youtu.be/gSackZtqlUI?si=FXfUYg19cdPkvyRr)
- [Modern OS - 1.8.3 Large Programming Projects](https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf#Large Programming Projects)



## ISA
---
- **A set of [[Instruction]]** which contains [[ISA Instruction Format#Opcode]] & **parameters** that tells [[CPU]] what to do in the form of **0s and 1s**. You can check the ISA of a machine using `uname -mp`

>[!success] Portability
> The **exact hardware implementation** of **different CPU** can **vary** but app written for a particular ISA like X86 can be run on all the CPU that implements the X86. The ISA functions like a **standard** that different hardware implementations need to follow, so software has a **common interface** to work with different CPUs.
> 
> Think of the **CPU implementation** as the **logic inside a function**, and the **ISA** specifies the **inputs and outputs** of the function.

>[!important]
> There are two types of ISA, [[#RISC]] and [[CISC]]. Both don't decide the performance of [[CPU]]. [[CPU Cache]] and [[Branch Prediction]] are two main factors that determine the CPU performance.
> 
> "**What limits computer performance is predictability**" - [Jim Keller](https://www.youtube.com/watch?v=yTMRGERZrQE)


## Abstract
---
![[instruction.gif|500]]

- Also known as **Machine Codes**
- [[Computer Data Representation#Bit String]], which is passed to [[CPU]], gets translated to carry out [[Operation]]
- Doesn't specify which [[CPU Datapath]] does what, just specify what outputs are expected with a given input
- The instruction lifecycle can be broken down into [[Instruction Stages]]

### Pseudo Instruction
- Syntactic sugar for a set of [[Instruction]], so it is easier for programmers to use

>[!example] Assigning value from one variable to another in MIPS
> Instead of `add $s0, $s1, $zero`, we have pseudo-instruction `move $s0, $s1`.




## Branch Instruction
---
![[branch_instruction.gif|500]]

- An [[Instruction]] that causes [[CPU]] to jump to a different location in the codes of  [[Process (进程)]], instead of executing instruction sequentially 


## Terminologies
---
### Single Instruction Multiple Data
- This allows one [[Instruction]] to operate on multiple data at once and have multiple outputs essentially
- This can reduce the number of instructions in a program significantly, and have more data processed without the involvement of the inefficient [[Main Memory]]



## MIPS
---
- [[Instruction Set Architecture (ISA)#Load-Store ISA]]


- Use 32 [[Register]]
- Uses [[Memory Address#Word Addressing]], each [[Computer Data Representation#Word]] is 4 [[Computer Data Representation#Byte]] 
 ![[mips stages.png]]


### simplified mips flow 
![[9BF8D94D-157B-453F-9BA1-B432397FC0A1_1_201_a.jpeg]]

>[!important]
> We use temporary registers `$t0` to `$t7` for intermediate results.

### MIPS General Syntax
![[mips_general_syntax.png|500]]

- MIPS [[Instruction]] has at most 3 operands
- [[Instruction Set Architecture (ISA)#Load-Store ISA]]


## MIPS Register 
---
![[MIPS_Register.png|500]]

>[!question] What is the purpose of register zero?
> We can use it to assign the value of one variable to another, like `add $s0, $s1, $zero`, which is equivalent to `$s0 = $s1`.

>[!important] 
> `$v0` and `$v1` are used by functions to return values.
> 
> `$a0`, `$a1`, `$a2`, and `$a3` are used to pass arguments to functions.
> 
> `$at` is used by the [[Language Processors#Assembler|assembler]] to store temporary values for [[Instruction#Pseudo Instruction|pseudo-instructions]].
> 
> `$t0` through `$t9` are not preserved across [[Function|function calls]]. If a function calls another function, the values in `$t0` through `$t9` may be overwritten when the called function returns. We can push the values in `$t0` through `$t9` onto the [[Address Space#Stack Frame|stack]] before calling the function and restore the values back to the registers when the called function returns.
> 
> `$s0` through `$s7` are preserved across functions calls!
> 
> `$v0` is same as `$2`!

## MIPS memory access
---
- Each word in [[MIPS]] is 4 [[Computer Data Representation#Byte|bytes]], and MIPS uses [[Memory Address#Byte Addressing|byte addressing]], so **consecutive words' addresses differ** by $4$. Thus, the offset to the next word is always a multiple of 4

>[!question] Can I load or store one byte?
> Yes, we can use `lb` and `sb`. The consecutive byte's addresses differ by $1$.

>[!important]
> MIPS disallows loading/storing unaligned word using [[#lw]] and [[#sw]].

>[!important]
>Using [[Pointer|pointers]] will often result in less MIPS code when looping through array elements. This is because we can use the memory address directly as the loop termination condition, rather than having to **calculate the offset**.
### lw
![[mips_lw.png|500]]

### sw
![[mips_sw.png|500]]


## MIPS control flow 
---
- [[MIPS]] executes [[Instruction|instructions]] in a **sequential manner**. It follows the instructions one by one in order. If we want to have loops, we need the **ability to change the order of executing instructions**

>[!important] Labels are not instructions
> Labels usually point to the target of branching or jumping. They aren't stored in the generated machine codes!

>[!important]
> Any form of loop can be written in [[Assembly language]] with the help of [[#Conditional Branch]] and [[#Unconditional Jump]].
> 
> For `for`, we convert it to a `while` loop first.
> For `while` loop, we can rewrite it with `if` statements and `goto`.
> 
> For `if` statements, we can rewrite it with conditional branch.
> For `goto`, we can rewrite it with unconditional jump.
## Conditional Branch
---
- `bne $t0, $t1, label` branches to `label` when `$t0 != $t1`. This is similar to `if ($t0 != $t1) goto label`
- `beq $t0, $t1, label` branches to `label` when `$t0 == $t1`. This is similar to `if ($t0 == $t1) goto label`

>[!tip] Translating from C to MIPS
> To optimise the number of MIPS instructions, consider inverting the condition. For example, use `bne` (branch if not equal) for `if ($t0 == $t1) goto label` and `beq` (branch if equal) for `if ($t0 != $t1) goto label`.

>[!important] New address
> When branch is taken, [[Register#Program Counter]] PC = (PC + 4) + ([[MIPS I-Type Instruction#Immediate Value]] * 4).
## Unconditional Jump
---
```asm
j label
j label
```
- `j label` branches to `label`. This is similar to `goto label`

## MIPS Inequality
---
- `slt $t0, $s1, $s2` is same as `$t0 = $s1 < $s2 ? 1 : 0`

>[!important]
> `blt $s1, $s2, L` is a [[Instruction#Pseudo Instruction]] which gets translated to `slt $t0, $s1, $s2`, followed by `bne $t0, $zero, L` by the [[Language Processors#Assembler]].


## NOR
---
![[NOR.png|700]]

- Only true when both inputs are false. Basically the negation of [[OR]]
- Made of 1 [[OR]] and 1 [[NOT]]

## Abstract
---
$$
B - A = \{x \in U: x \in B \land x \notin A\}
$$
- **Exclusive OR**, **not equal**
- Returns true only when 2 inputs aren't the same



## Abstract
---
- Moving the bits to the left side or right side, by a specified number of bits


## MIPS Bit Shifting
---
- `sll` is **multiplication** with $2^n$, where $n$ is the number of bits we shift
- `srl` is **division** with $2^n$, where $n$ is the number of bits we shift

>[!important] Maximum number of bits we can shift
> $31$, because the [[Register]] is 32 bits


## MIPS bit shifting 
---
- A technique used in programming to **manipulate individual bits within binary data**


## AND Bitmasking
---

```
     1 1 1 0 1 1 0 1     input
(&)  0 0 0 0 1 1 1 1      mask
------------------------------
     0 0 0 0 1 1 0 1    output
```

- The mask position set to `1` extracts the [[Computer Data Representation#Bit|bits]] of the given input, thus extracting a subnet of bits from the input. In the example above, we are extracting the last 4 bits of the input.

>[!code] MIPS `andi`
> Perform an AND bitmasking operation between a register and an immediate value.
> 
> Given `andi $t0, $s0 , 0xF`, the mask is `0xF` which `1111`, so we are getting the last 4 significant bits of `$s0`.


## OR Bitmasking
---
```
     1 1 1 0 1 1 0 1     input
(|)  0 0 0 0 1 1 1 1      mask
------------------------------
     1 1 1 0 1 1 1 1    output
```

- The mask position set to `1` turns the [[Computer Data Representation#Bit|bits]] of the given input to `1`. In the example above, we are turning the last 4 bits of the input to `1`

>[!code] MIPS `ori`
> Perform an OR bitmasking operation between a register and an immediate value.
> 
> Given `ori $t0, $s0 , 0xF`, the mask is `0xF` which `1111`, so we are turning the last 4 significant bits of `$s0` to `1`.

>[!code] MIPS loading 32-bit constant
> ![[mips_load_32_bits_constant.png|500]]
> 
> Why not just use `lw` to load the 32-bit constant from memory? Because `lw` requires us to access memory to fetch data, which is slow.
> 
> Why not just use `li`? It is a [[Instruction#Pseudo Instruction|pseudo-instruction]] that gets translated to something similar to what's shown above.


## NOR Bitmasking
---
```
       1 1 1 0 1 1 0 1     input
(nor)  0 0 0 0 0 0 0 0      mask
--------------------------------
       0 0 0 1 0 0 1 0    output
```

- With `0` mask we are able to use [[NOR]] as an [[NOT]] to invert the given input

>[!code] MIPS NOR bitmasking
> `nor $t0, $t0, $zero` is used to to perform NOT operation. MIPS doesn't have a dedicated NOT instruction to keep the instruction set small.


## XOR Bitmasking
---
```
     1 1 1 0 1 1 0 1     input
(^)  0 0 0 0 1 1 1 1      mask
------------------------------
     1 1 1 0 0 0 1 0    output
```

- Flip a subset of [[Computer Data Representation#Bit|bits]] in the given input. The positions in the mask that are set to `1` determine which bits in the input are flipped. The positions in the mask that are set to `0` will not make any changes to the given input


>[!important] Using XOR as NOT
> We can use XOR as [[NOT]] by setting the mask to `1`.


## Abstract
---

### mips comes in 3 instruction types 
![[mips instruct types.jpeg]]

>[!question] why is the source ,target and destination field 5 bits 
>$2^5 = 32bits$
>it is because we do operations on the data stored on the register and each register address is 32 bits 



**32 bits**, the **first 6 bits** are [[Instruction#Opcode]]

- **32 bits**, the **first 6 bits** are [[ISA Instruction Format#Opcode]]
- There are 3 different format types - [[MIPS R-Type Instruction]], [[MIPS I-Type Instruction]] and [[MIPS J-Type Instruction]]

>[!important]
> Every MIPS instruction that is stored in [[Main Memory|memory]] must be [[Computer Data Representation#Word|word aligned]]!

>[!tip]
> Here is an [online calculator](http://mipsconverter.com/instruction.html) that translates a MIPS instruction to hex, and vice versa.


## Terminologies
---
### Op register 
- 6bits 
- labeled as op
- used to specify to the control what operation to perform 

### Source Register 
- 5bits
- Labeled `rs`, mapped to `RR1`
- [[Register|Register]] with value stored that we want to use to carry out [[Operation]]
### Target Register
- 5 bits
- Labeled `rt`, mapped to `RR2`
- [[Register|Register]] with value stored we want to use in [[MIPS R-Type Instruction]]
- [[Register|Register]] that gets the result of [[Operation]] in [[MIPS I-Type Instruction]]



## MIPS R instruction
---
```
+--------+------+------+------+------+------+
| Opcode |  Rs  |  Rt  |  Rd  | Shamt| Funct|
| 6 bits |5 bits|5 bits|5 bits|5 bits|6 bits|
+--------+------+------+------+------+------+
```

- [[ISA Instruction Format#Opcode|Opcode]] is always `000000`
- `funct` combined with opcode exactly specifies the [[Instruction|instruction]]
- `rs` specifies register containing first operand
- `rt` specifies register containing second operand. Set to `0` for shift instructions
- `rd` specifies register which will receive result of computation
- `shamt` for `sll` and `srl`. Set to `0` for non-shift instructions


>[!important] 2 types of instructions
> 1. `arith $rd, $rs, $rt`
> 2. `shift $rd, $rt, shamt`

>[!important]
> R format instructions has only [[Register|registers]] as [[ISA Instruction Format#Instruction Operand]] except the **shift instructions**.
### Function Code
- 6 bits 
- Give [[MIPS]] (2^6-1) + 2^6 = 127 instead of 2^6=64 [[Instruction]]
- Dedicated for [[MIPS R-Type Instruction]] 


## MIPS R instruction types 
--- 


| Instruction | opcode | rs    | rt    | rd    | shamt | funct  | Explanation                                |
| ----------- | ------ | ----- | ----- | ----- | ----- | ------ | ------------------------------------------ |
| add         | 000000 | 00001 | 00010 | 00011 | 00000 | 100000 | Adds the values in $1 and $2, stores in $3 |
| sub         | 000000 | 00001 | 00010 | 00011 | 00000 | 100010 | Subtracts $2 from $1, stores in $3         |
| sll         | 000000 | 00000 | 00010 | 00011 | 00001 | 000000 | Shift $2 left by 1, stores in $3           |
| srl         | 000000 | 00000 | 00010 | 00011 | 00001 | 000010 | Shift $2 right by 1, stores in $3          |
| and         | 000000 | 00001 | 00010 | 00011 | 00000 | 100100 | Bitwise AND of $1 and $2, stores in $3     |
| or          | 000000 | 00001 | 00010 | 00011 | 00000 | 100101 | Bitwise OR of $1 and $2, stores in $3      |
| xor         | 000000 | 00001 | 00010 | 00011 | 00000 | 100110 | Bitwise XOR of $1 and $2, stores in $3     |
| nor         | 000000 | 00001 | 00010 | 00011 | 00000 | 100111 | Bitwise NOR of $1 and $2, stores in $3     |
**note $ sign denotes a register**
###  Breakdown

1. **add**: 
   - **Binary**: `000000 00001 00010 00011 00000 100000`
   - **Assembly**: `add $3, $1, $2`
   - **Explanation**: This instruction adds the values stored in registers $1 and $2. The result of this addition is then stored in register $3. For example, if $1 contains the value 5 and $2 contains the value 10, after executing this instruction, $3 will contain the value 15.

2. **sub**: 
   - **Binary**: `000000 00001 00010 00011 00000 100010`
   - **Assembly**: `sub $3, $1, $2`
   - **Explanation**: This instruction subtracts the value in register $2 from the value in register $1. The result is stored in register $3. For instance, if $1 contains 10 and $2 contains 4, after executing this instruction, $3 will contain the value 6 (10 - 4).

3. **sll**: 
   - **Binary**: `000000 00000 00010 00011 00001 000000`
   - **Assembly**: `sll $3, $2, 1`
   - **Explanation**: This instruction performs a logical left shift on the value in register $2 by 1 bit. The result is stored in register $3. For example, if $2 contains the binary value `00000010` (which is 2 in decimal), after the shift, $3 will contain `00000100` (which is 4 in decimal).

4. **srl**: 
   - **Binary**: `000000 00000 00010 00011 00001 000010`
   - **Assembly**: `srl $3, $2, 1`
   - **Explanation**: This instruction performs a logical right shift on the value in register $2 by 1 bit. The result is stored in register $3. For instance, if $2 contains the binary value `00000100` (which is 4 in decimal), after the shift, $3 will contain `00000010` (which is 2 in decimal). 
   

>[!important]
>    
>sll and srl only need 5 bits (i.e., C5) because
shifting by 32-bits empties the register (i.e., set to 0)
>    

>[!important] multiplication and division
> can be done with sll and slr because in mips there exist no multiplication or division instruction 
>
>- example of sll multiplication, `a = a * 8` the instruction will be `sll $a $a 3` 3 denotes the number of bits to move to the left
>- example of slr division , `a = a / 4` the instruction will be `slr $a $a 2` 2 denotes the number of bits to move to the right 



5. **and**: 
   - **Binary**: `000000 00001 00010 00011 00000 100100`
   - **Assembly**: `and $3, $1, $2`
   - **Explanation**: This instruction performs a bitwise [[AND]] operation between the values in registers $1 and $2. The result is stored in register $3. For example, if $1 contains `00001111` (15 in decimal) and $2 contains `00000011` (3 in decimal), the result in $3 will be `00000011` (3 in decimal).typically it’s used for masking operations 

6. **or**: 
   - **Binary**: `000000 00001 00010 00011 00000 100101`
   - **Assembly**: `or $3, $1, $2`
   - **Explanation**: This instruction performs a bitwise [[OR]] operation between the values in registers $1 and $2. The result is stored in register $3. For instance, if $1 contains `00001111` (15 in decimal) and $2 contains `00000011` (3 in decimal), the result in $3 will be `00001111` (15 in decimal).

7. **xor**: 
   - **Binary**: `000000 00001 00010 00011 00000 100110`
   - **Assembly**: `xor $3, $1, $2`
   - **Explanation**: This instruction performs a bitwise [[XOR]] operation between the values in registers $1 and $2. The result is stored in register $3. For example, if $1 contains `00001111` (15 in decimal) and $2 contains `00000011` (3 in decimal), the result in $3 will be `00001100` (12 in decimal).

8. **nor**: 
   - **Binary**: `000000 00001 00010 00011 00000 100111`
   - **Assembly**: `nor $3, $1, $2`
   - **Explanation**: This instruction performs a bitwise [[NOR]] operation between the values in registers $1 and $2. The result is stored in register $3. For instance, if $1 contains `00001111` (15 in decimal) and $2 contains `00000011` (3 in decimal), the result in $3 will be `11110000` (240 in decimal, which is the bitwise negation of the OR result).
=======
### Destination Register 
- 5bits
- Labeled `rd`, mapped to `WR`
- [[Register]] that gets the result of [[Operation]] in [[MIPS R-Type Instruction]] [[Instruction]]


## MIPS I-Type Instruction
---
#### MIPS I-Type Instruction Format

| Field     | Number of Bits | Description                                                                              |
| --------- | -------------- | ---------------------------------------------------------------------------------------- |
| opcode    | 6 bits         | Specifies the operation (e.g., load, store, branch)                                      |
| rs        | 5 bits         | Source register (the register containing the first operand)                              |
| rt        | 5 bits         | Target register (the register where the result is stored or the immediate value is used) |
| immediate | 16 bits        | Immediate value or address offset used in the instruction                                |

### Explanation of Each Field

1. **opcode**: 
   - The first 6 bits indicate the type of operation to be performed.

2. **rs**: 
   - The next 5 bits specify the source register.

3. **rt**: 
   - The following 5 bits specify the target register.

4. **immediate**: 
   - The last 16 bits represent an immediate value or an address offset.


### Types of Operations for MIPS I-Type Instructions

1. **Data Transfer Operations**:
    
    - **Load Word (lw)**: Loads a word from memory into a register.
    - **Store Word (sw)**: Stores a word from a register into memory.
    - **Load Byte (lb)**: Loads a byte from memory into a register.
    - **Store Byte (sb)**: Stores a byte from a register into memory.
2. **Arithmetic Operations**:
    
    - **Add Immediate (addi)**: Adds a constant (immediate value) to a register and stores the result in another register.
    - **Add Immediate Unsigned (addiu)**: Similar to `addi`, but does not check for overflow.
    - **Subtract Immediate (subi)**: Subtracts an immediate value from a register (not a standard MIPS instruction but can be implemented using `addi` with a negative immediate).
3. **Logical Operations**:
    
    - **AND Immediate (andi)**: Performs a bitwise AND operation between a register and an immediate value.
    - **OR Immediate (ori)**: Performs a bitwise OR operation between a register and an immediate value.
    - **XOR Immediate (xori)**: Performs a bitwise XOR operation between a register and an immediate value.
4. **Comparison Operations**:

    - **Set on Less Than Immediate (slti)**: Sets a register to 1 if the value in another register is less than the immediate value; otherwise, it sets the register to 0.
    - **Set on Less Than Immediate Unsigned (sltiu)**: Similar to `slti`, but treats the values as unsigned.
5. **Branch Operations**:
    
    - **Branch on Equal (beq)**: Compares two registers and branches to a specified label if they are equal.
    - **Branch on Not Equal (bne)**: Compares two registers and branches to a specified label if they are not equal.
    - **Branch on Less Than (blt)**: Branches to a specified label if the first register is less than the second register.
    - **Branch on Greater Than (bgt)**: Branches to a specified label if the first register is greater than the second register.



### MIPS I instruction types 

| Instruction                       | opcode(6 bits) | rs (5 bits) | rt (5 bits) | immediate (16 bits) | Explanation                                                                   |
| --------------------------------- | -------------- | ----------- | ----------- | ------------------- | ----------------------------------------------------------------------------- |
| lw (Load Word)                    | 100011         | 00001       | 00010       | 0000000001100100    | Loads a word from memory into register rt.                                    |
| sw (Store Word)                   | 101011         | 00001       | 00010       | 0000000001100100    | Stores a word from register rt into memory.                                   |
| addi (Add Immediate)              | 001000         | 00001       | 00010       | 0000000000001010    | Adds an immediate value to register rs and stores in rt.                      |
| andi (AND Immediate)              | 001100         | 00001       | 00010       | 0000000000001111    | Performs a bitwise AND between register rs and an immediate value.            |
| ori (OR Immediate)                | 001101         | 00001       | 00010       | 0000000000001111    | Performs a bitwise OR between register rs and an immediate value.             |
| xori (XOR Immediate)              | 001110         | 00001       | 00010       | 0000000000001111    | Performs a bitwise XOR between register rs and an immediate value.            |
| slti (Set on Less Than Immediate) | 001010         | 00001       | 00010       | 0000000000001010    | Sets rt to 1 if rs is less than the immediate value; otherwise, sets rt to 0. |
| beq (Branch on Equal)             | 000100         | 00001       | 00010       | 0000000000000001    | Branches to a label if the values in registers rs and rt are equal.           |
| bne (Branch on Not Equal)         | 000101         | 00001       | 00010       | 0000000000000001    | Branches to a label if the values in registers rs and rt are not equal.       |


## Examples
---
### `lw`

- Load Word
- Loads a word from memory into a register. The address is calculated by adding the immediate value to the value in the source register.
- The MIPS code: `lw $t2, 100($t1)`
- The equivalent high-level code: `R[rt] = Memory[R[rs] + SignExtImm]`

### `sw`

- Store Word
- Stores a word from a register into memory. The address is calculated by adding the immediate value to the value in the source register.
- The MIPS code: `sw $t2, 100($t1)`
- The equivalent high-level code: `Memory[R[rs] + SignExtImm] = R[rt]`

### `addi`

- Add Immediate
- Adds an immediate value to a register and stores the result in another register.
- The MIPS code: `addi $t2, $t1, 10`
- The equivalent high-level code: `R[rt] = R[rs] + SignExtImm`

### `andi`

- AND Immediate
- Performs a bitwise AND operation between a register and an immediate value.
- The MIPS code: `andi $t2, $t1, 0xFF`
- The equivalent high-level code: `R[rt] = R[rs] & SignExtImm`

### `ori`

- OR Immediate
- Performs a bitwise OR operation between a register and an immediate value.
- The MIPS code: `ori $t2, $t1, 0x0F`
- The equivalent high-level code: `R[rt] = R[rs] | SignExtImm`

### `xori`

- XOR Immediate
- Performs a bitwise XOR operation between a register and an immediate value.
- The MIPS code: `xori $t2, $t1, 0x0F`
- The equivalent high-level code: `R[rt] = R[rs] ^ SignExtImm`

### `slti`

- Set Less Than Immediate
- Sets the target register to 1 if the value in the source register is less than the immediate value; otherwise, it sets the target register to 0.
- The MIPS code: `slti $t2, $t1, 100`
- The equivalent high-level code: `R[rt] = (R[rs] < SignExtImm) ? 1 : 0`

### `beq`

- Branch on Equal
- Branches to a specified label if the values in the two registers are equal.
- The MIPS code: `beq $t1, $t2, label`
- The equivalent high-level code: `if (R[rs] == R[rt]) PC = PC + SignExtImm`

### `bne`

- Branch on Not Equal
- Branches to a specified label if the values in the two registers are not equal.
- The MIPS code: `bne $t1, $t2, label`
- The equivalent high-level code: `if (R[rs] != R[rt]) PC = PC + SignExtImm`
=======
```
+--------+-----+-------+-----------------+
| Opcode |  Rs  |  Rt  |    Immediate    |
| 6 bits |5 bits|5 bits|     16 bits     |
+--------+-----+-------+-----------------+
```

- [[ISA Instruction Format#Opcode|Opcode]] is used to uniquely specify an [[Instruction]]
- `rs` specifies [[Register|register]] containing first operand
- `rt` specifies register to **receive result**
- `immediate`: see [[#Immediate Value]] for more info

- `I` because it is [[Instruction]] that contains immediate value
- Meaning:  Add the **Source Register** with the **Immediate Value**, and store the result to the  **Target Register**

>[!important] 4 types of instructions
> 1. `arith $rt, $rs, 16_2s`
> 2. `lw/sw $rt, 16_2s($rs)`
> 3. `logic $rt, $rs, 16`
> 4. `branch $rs, $rt, label`, label in branch instruction refers to the **number of instructions** from the next instruction address.

>[!code] `slti`
> - Set Less Than Immediate
> - If value in [[MIPS Instruction#Source Register]] is smaller than [[#Immediate Value]], then [[MIPS Instruction#Target Register]] is set to *1* else *0*
> - The mips code - `slti $t0, $t0, 100`
> - The equivalent more high-level code - ``R[rt] = (R[rs]<SignExtImm) ? 1 : 0``

### Immediate Value 
- Value is  [[Integer Encoding (数字编码)#2's Complement (补码)]]
- 16-bits, can represent up to +-2^15 [[Computer Data Representation#Word]], 2^17 [[Memory Address]] because 4-bytes [[Memory Address#Word Addressing]]
- to represent longer values can use [[Integer Encoding (数字编码)#sign extension]]
-  Used for **PC-Relative Addressing**
- Used for [[ISA Addressing Mode#PC-relative Addressing Mode]]


## MIPS J-Type Instruction
---
```
+--------+---------------------------+
| Opcode |         Address           |
| 6 bits |         26 bits           |
+--------+---------------------------+
```

 - [[Instruction]] that tells [[CPU]] jump to [[Memory Address]] & execute [[Instruction]] starting from that point
 - 2 sections - [[Instruction#Opcode]], [[Memory Address]]
 - Supports `if-else` and loops 

##  MIPS J-Type Instructions

|Instruction|Opcode|Address|Explanation|
|---|---|---|---|
|j|000011|26 bits|Jumps to the specified address.|
|jal|000011|26 bits|Jumps to the specified address and saves the return address in `$ra`.|


>[!important] Jump to any address within the same 256 MB region as the current PC
> Since the MIPS j-type instruction can only store a **26-bit address**, we construct the full 32-bit target address by taking the upper 4 bits from the current [[Register#Program Counter|program counter]], appending the 26-bit immediate from the instruction, and adding **two `0` bits** at the end. We ignore the last 2 bits because MIPS instructions are word-aligned, allowing us to address `256 MB` within the same region of the PC.


## Abstract
---
- It specifies how different parts of an [[Instruction|instruction]] are organised within a **binary code word**

### Fixed-length Instruction
- Simplifies [[Pipeline]] & [[Instruction-Level Parallelism]]

### Variable-length Instruction
- More flexible but more complicated [[Pipeline]] & [[Instruction-Level Parallelism]]
- Requires multi-step [[Instruction Stages#Fetch]] and [[Instruction Stages#Decode]]


## Opcode
---
- Configuration for the [[Control Unit#Control Signal|Control Unit's Control Signals]] to specify the desired operation to be carried out

>[!example]
> In [[MIPS]], it is 6-bits, so total $2^{6} = 64$ different arrangements.

>[!important] Benefits of fixed-size opcode
> - [[Instruction Stages#Decode|Instruction decode]] is more efficient
> - Easier to design hardware
> - Does NOT guarantee a smaller set of assembly code, actually bigger
> - Does NOT guarantee faster processing time (this depends on the cpu implementation)  
### Expanding Opcode 
- The [[ISA Instruction Format#Opcode]] has **variable lengths** for different [[Instruction]]. This is a good way to maximise instruction bits

>[!example]
> ![[expanding_opcode.png|400]]

## Instruction Operand
---
- Can be [[Register]] Address, [[Memory Address]] or Immediate Value


## Datapath
---
- The **path** that **data** takes to flow through the [[CPU]]. The path consists of the following **CPU components**


| CPU Component                             | Description                                                                                                                                                                                                 |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[Multiplexer]]                           | Consolidate **multiple inputs(多路)** into one **single output（复用)**.<br><br>Gives the flexibility of picking **one of the inputs** based on the [[Instruction]]'s [[ISA Instruction Format#Opcode\|opcode]]. |
| [[ALU]]                                   | Performs **arithmetic** and **logic** operations on the data.                                                                                                                                               |
| [[Register#Register File\|Register File]] | Provides the **fastest reading** and **writing** of data.                                                                                                                                                   |
| [[Adder]]                                 | Often used for **incrementing** [[Register#Program Counter\|program counter]] or **calculating** [[Memory Address]].                                                                                        |
| [[Clock Oscillator\|Clock]]               | **Synchronises** the operations of the CPU by providing a [[Clock Oscillator#Clock Signal\|timing signal]].                                                                                                 |
| Instruction Memory                        | [[Main Memory]] that **stores the instructions** that are fetched and executed by the CPU.                                                                                                                  |
| [[MIPS Data Memory\|Data Memory]]         | Main memory that stores **data** that can be read from or written to by the CPU during program execution.                                                                                                   |

## MIPS Datapath
---

![[mips_datapath.png|600]]


## Datapath stages
---

![[pipeline_stages.gif|600]]

- 3 main stages, [[#Fetch]], [[#Decode]] & [[#Execute]]
- Thew 2 main [[Register]] involved are the [[Register#Instruction Register]] and the **address register** ([[Register#Program Counter]])

>[!caution] Wasted computation
> Each pipeline stage is **isolated** and **independent from each other**. When one stage is running, the other stages will be idle. You can see from the animation above, when the [[Instruction]] is decoded, the instruction register is actually ready to take in the next instruction. 
> 
> This can be optimised with [[Instruction-Level Parallelism]].


## Fetch
---
- Retrieve [[Instruction]] from [[Main Memory]] using [[Register#Program Counter]] and [[Register#Instruction Register]]

>[!example] MIPS fetch stage
> ![[mips_fetch_stage.png|500]]
> 
> The instruction memory in MIPS is a [[Sequential Circuit|sequential circuit]] that only gets updated with the next instruction at the next [[Sequential Circuit#Edge-triggered|rising clock edge]].

## Decode
---
- Fetch the [[ISA Instruction Format#Opcode|opcode]] which is used by the [[Control Unit]] to configure the [[CPU]] and send the [[Instruction|instruction]] to the [[ALU]]. Obtain the operands, which can be either [[Register|register]] values or immediate values within the instruction, and send the data to the ALU

>[!example] MIPS decode stage
> ![[mips_decode_stage.png|500]]
> 
> Two [[Multiplexer|multiplexers]] are used to perform the correct [[#Operand Fetch|operand fetch]] for [[MIPS R-Type Instruction|R-type]] and [[MIPS I-Type Instruction|I-type]] instructions. The bit signal sent to `RegDst` is `1` for R-type and `0` for I-type. The bit signal sent to `ALUSrc` is `0` for R-type and `1` for I-type.

### Operand Fetch
- Fetching [[ISA Instruction Format#Instruction Operand|instruction operand]] using the corresponding [[ISA Addressing Mode|addressing mode]]

## Execute
---
- Where the execution of [[Instruction]] is performed. See [[ALU#MIPS ALU]] for more information

### Memory Access
- Retrieve required data from [[Main Memory]] for [[ISA Addressing Mode#Displacement Addressing Mode|displacement addressing mode]]
- See [[MIPS Data Memory#Read Data|MIPS read data]] for more information

## Write Back
---
- Result is stored back into [[Main Memory]] or [[Register]] 
- See [[MIPS Data Memory#Write Data]] for more information


>[!example] MIPS register write back
> ![[mips_register_write_back.png|500]]
> 
> `RegWrite` is set to `1`, so data sent to `WD` is written to the register at `WR`. `MemToReg` is set to `1`, so the `ALU result` is sent to `WD`, instead of the `Read Data` from the [[MIPS Data Memory|MIPS data memory]].


## MUX
---
- Short form `Mux`
- A multiplexer is a [[Combination Circuit]] that selects **one** of **several input signals** and forwards the selected input **into a single line**. It uses **selection lines**(**control signals**) to **choose** which input to send to the output
- uses $\log_2(2) = 1 bits$ to represent the number of instructions 

### Example of How It mux Works

Let's consider a simple 4-to-1 multiplexer (4 inputs, 1 output):

- **Inputs**: \( I_0, I_1, I_2, I_3 \)
- **Select Lines**: \( S_1, S_0 \)
- **Output**: \( Y \)

| \( S_1 \) | \( S_0 \) | Output \( Y \)  |
|-----------|-----------|-----------------|
| 0         | 0         | \( I_0 \)       |
| 0         | 1         | \( I_1 \)       |
| 1         | 0         | \( I_2 \)       |
| 1         | 1         | \( I_3 \)       |

In this 4-to-1 MUX:
- If \( S_1 = 0 \) and \( S_0 = 0 \), the output \( Y \) is \( I_0 \)
- If \( S_1 = 0 \) and \( S_0 = 1 \), the output \( Y \) is \( I_1 \)
- If \( S_1 = 1 \) and \( S_0 = 0 \), the output \( Y \) is \( I_2 \)
- If \( S_1 = 1 \) and \( S_0 = 1 \), the output \( Y \) is \( I_3 \)

---


>[!example] General example
> An **8-to-1 multiplexer** has **8 input lines**, **3 selection lines** (to choose between the 8 inputs), and **1 output line**. Depending on the combination of the selection lines, one of the 8 inputs is connected to the output.

### De-multiplexer
- Short form `Demux`
- A demultiplexer is the reverse of a [[Multiplexer]]. It takes a **single input** and channels it to **one of several output lines**, determined by the **selection lines**(**control signals**)

>[!example] General example
> A **1-to-4 demultiplexer** has **1 input line**, **2 selection lines** (to choose between the 4 outputs), and **4 output lines**. The input signal is routed to one of the 4 output lines based on the selection line combination.

## Datapath write 
---

![[mips_data_memory.png|250]]

- Accepts a memory address with `Address`
- Both `MemWrite` and `MemRead` cannot be `1` at the same time. When `MemWrite` is `1`, `Write Data` is active and data is written to the `Address`. When `MemRead` is `1`, `Read Data` is active and data is read from the `Address`

>[!important]
> ![[mips_memory_or_register.png|500]]
> 
> The result from the [[ALU]] is connected to `Address`. However, some instructions, like the `add` instruction, don't involve the data element and would like the ALU result to be written back to a [[Register|register]]. That is why we add a [[Multiplexer|multiplexer]] `MemToReg` after the `Read Data` and the `ALU result`.

## Read Data 
---


![[mips_memory_load_data.png|500]]

- `RegDst` is set to `0`, so the `WR` is [[Register|register]] `rt`
- `ALUSrc` is set to `1`, so the `Immediate` value is sent to [[ALU]], instead of `RD2`
- `MemWrite` is set to `0`, and `MemRead` is set to `1`, so the [[Main Memory|memory]] is read-only

## Write Data
---

![[mips_memory_write_data.png|500]]

- `RegDst` is set to `0`, so the `WR` is [[Register|register]] `rt`
- `ALUSrc` is set to `1`, so the `Immediate` value is sent to [[ALU]], instead of `RD2`
- `MemWrite` is set to `1`, and `MemRead` is set to `0`, so the [[Main Memory|memory]] is write-only

>[!important]
> There is a wire between the `RD2` and `Write Data`, so the data inside register `rt` can be written back to the memory.