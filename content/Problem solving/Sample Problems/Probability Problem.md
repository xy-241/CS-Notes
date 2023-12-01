#problem_solving 
![[probability_problem.png]]

>[!note] With [[5. Draw a picture]]
>We can associate the 2 numbers with a point on the x-y axis. 0<=x<=1, 0<=y<=1

>[!note] With [[6. Ask a simpler version of the problem]]
>### What is the region on the graph that x/y will round down to 0?
>![[xy round down to 0.png]]
>- Answer: y needs to be bigger than x, so it is the area above the y=x
>
>### What is the region on the graph that x/y will round down to 2?
>![[xy round down to 2.png]]
>- Answer: x needs to be equal or greater than y twice && x needs to be smaller than y 3 times. Thus it is the area below y=x/2, above y=x/3x

>[!success] Answer is basically sum of the triangles on the graph

## Take advantage of Python codes to obtain an answer
^6263ac
```python
!pip3 install numpy

import numpy as np

data_size = 10**6

x = np.random.random(data_size)
y = np.random.random(data_size)
ratios = x / y
round_down_ratio = np.floor(ratios)
even_ratio_res = (round_down_ratio % 2 == 0).mean()
```

^26a4af
