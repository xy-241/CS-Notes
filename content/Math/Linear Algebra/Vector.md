---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - linear_algebra
Creation Date: 2023-10-14T23:18:10+08:00
Last Date: 2023-10-14T23:18:10+08:00
References:
---
## Abstract
---
- Represents both magnitude(norm) & direction
- Can be added, subtracted, and multiplied by [[Scalar]], requires special rules and operations to account for their direction if we want to perform the same set of [[Operation]] with itself
- Every pair of numbers gives one and only one vector, vice versa 
- Often represented using boldface or arrow notation $$\vec{v}$$
- Or represented using Cartesian coordinate$$(x,y)$$
- With vector, we can transform the problem from numerical representation to geometric representation, **back and forth**
- Can be used to represent in 2D, 3D and nD


## Centered around 2 [[Operation]]
---
1. [[Vector Addition]]
2. [[Scalar Multiplication]]




## 2 different perspective
---
### 1) Model arrow in space to numerical representation 
- A more intuitive way, usually used by Physics students
- A language to describe space & manipulation of space using numbers that can be processed by computer
### 2) Model a list of number to geometric representation
- Usually used by CS students
- Allow to conceptualise many numbers in a visual way which can clarify pattern and data, give a global view of what certain operation do




## Terminologies 
---
### Position
- Vector initiate from [[Origin]]
### Directional
- Vector doesn't initiate from [[Origin]]
### Zero/Null
- Vector tha has zero norm & Zero direction
$$\begin{bmatrix}
0 \\
0
\end{bmatrix}
$$
### Normal
- A vector that perpendicular to a [[Vector Plane]]
### Unit
- A vector with 1 unit of magnitude in all the directions
- ![[unit_vector_x_y_z.png]]
### Parallel
- With `k` [[Scalar]], we can get the same vector
$$
\vec{CD} = k\times\vec{AB}
$$
### Identical
- 2 vectors with the same direction & norm