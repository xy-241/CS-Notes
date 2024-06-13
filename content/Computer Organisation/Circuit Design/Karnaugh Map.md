---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-07-22T17:35:21+08:00
Last Date: 2024-06-13T13:42:08+08:00
References: 
---
## Abstract
---

![[karnaugh_map.svg]]
- Karnaugh Map is a **truth table** arranged in a **grid structure**, providing a **visual way** to **simplify** [[Boolean Function]]. Each **cell** in the grid represents the **truth value** of a specific **combination** of **input variables**. The **rows** and **columns** of the grid are **labeled** with the **input variables** using [[Gray Code]]
- We group the `1` in the Karnaugh Map using  [[#Karnaugh Map Group]] to **find** the **simplified boolean function**


>[!important]
> Good for [[Circuit Design]] up to **4 variables**.

>[!success] Save hardware cost
> Since we can simplify the boolean function, we can reduce the **number of [[Logic Gates]]** needed to implement it by removing those that are **redundant** and **don't affect** the **truth values** of **any rows** in the truth table.



### Karnaugh Map Group
- We group the cells with `1` in a [[Karnaugh Map]] to show us that **some of the inputs** **don't affect** the **output truth value** in certain input combinations.  This allows us to **eliminate those variables** and **simplify** the **Boolean function**.



>[!important] Karnaugh Map Goup requirements
> **Shape**: Rectangles/Square (No diagonals)
> 
> **Size**: Power of 2 & as large as possible
> 
> **Number**: Just enough (No redundant groups and cover all the 1s)
> 
> **Overlap**: ✔️
> 
> **Wrap around the table**: ✔️



## References
---
- [Introduction to Karnaugh Maps - Combinational Logic Circuits, Functions, & Truth Tables](https://youtu.be/RO5alU6PpSU?si=CYKjwSRP__toOpWw "https://youtu.be/RO5alU6PpSU?si=CYKjwSRP__toOpWw")
- [Karnaugh Maps – Introduction - YouTube](https://youtu.be/3vkMgTmieZI?si=9S32eNblFRabofzH)