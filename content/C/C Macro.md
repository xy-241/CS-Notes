#c 
## Abstract
- [[Preprocessor]] replaces the [[Macro]] with the value before passing to the [[Compiler]]


## Benefits
- Saving memory of using variables to store the values


## Example
```c
#include <stdio.h>
#define PI 3.1415

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