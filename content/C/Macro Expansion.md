---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
  - computer_organisation
Creation Date: 2023-09-08T18:14:42+08:00
Last Date: 2024-08-15T22:45:49+08:00
References: 
---
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



