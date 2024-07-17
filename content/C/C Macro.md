---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
Creation Date: 2023-09-08T18:14:42+08:00
Last Date: 2023-12-22T23:48:29+08:00
References: 
---
## Abstract
---
- [[Language Processors#Preprocessor]] replaces the [[Macro]] with the value before passing to the [[Language Processors#Compiler]]

```c {2} {11}
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

## Benefits
---
- Saving memory of using variables to store the values



