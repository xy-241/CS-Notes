---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - c
Creation Date: 2023-09-08T18:14:42+08:00
Last Date: 2023-09-08T18:14:42+08:00
References:
---
## Abstract
---
* Not same as [[Functions]], doesn't have [[Type Safety]]


## Example
---
```c
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