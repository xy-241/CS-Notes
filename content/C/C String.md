---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
  - computer_organisation
Creation Date: 2024-08-21, 14:42
Last Date: 2024-08-21T16:06:49+08:00
References: 
draft: 
description: 
---
## Abstract
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

>[!code] Return length of string
> Use `strlen(s)`, `\n` is considered as a character.

>[!code] String comparison
> `strcmp(s1, s2)`, it returns negative if `s1` is lexicographically less than `s2`, positive if bigger, else both are equal. 
> 
> We should use `strncmp(s1, s2, n)`, because it safer, it will compare the first `n` characters if a null termination `\0` is missing.

>[!code] Assign string value in C
> When we want to re-assign string value in C, we need to use `strcpy(s1, s2` which assigns `s2` to `s1`.
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

