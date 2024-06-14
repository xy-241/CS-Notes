---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-07-22T17:35:21+08:00
Last Date: 2024-06-14T10:09:20+08:00
References: 
---
## Abstract
---
![[karnaugh_map.svg]]


- Karnaugh Map is a **truth table** arranged in a **grid structure**, providing a **visual way** to **simplify** [[Boolean Function]]. The **rows** and **columns** of the grid are **labeled** with the **input variables** using [[Gray Code]]. Each **cell** in the grid represents the **truth value** of a specific **combination** of **input variables**.
- We group the `1` in the Karnaugh Map using  [[#Karnaugh Map Group]] to **find** the **simplified boolean function**


>[!important]
> Good for [[Circuit Design]] up to **4 variables**.

>[!success] Save hardware cost
> Since we can simplify the boolean function, we can reduce the **number of [[Logic Gates]]** needed to implement it by removing those that are **redundant** and **don't affect** the **truth values** of **any rows** in the truth table.



### Karnaugh Map Group

![[karnaugh_map_group.svg|500]]

- **Group Shape**: rectangles or squares that are either horizontal or vertical (no diagonals)
- **Group Size**: $2^n$ `1s`, where the value of $2^n$ should be as large as possible
- **Number of Groups**: as few groups as possible (covering all 1s with no redundancy)
- **Can Overlap**: Yes
- **Can wrap around the table**: Yes


>[!success] Simplify Boolean function
> We group the cells with `1` in a [[Karnaugh Map]] to show us that **some of the inputs** **don't affect** the **output truth value** in certain **input combinations**.  This allows us to **eliminate those variables** and **simplify** the **Boolean function**.






## References
---
- [Introduction to Karnaugh Maps - Combinational Logic Circuits, Functions, & Truth Tables](https://youtu.be/RO5alU6PpSU?si=CYKjwSRP__toOpWw "https://youtu.be/RO5alU6PpSU?si=CYKjwSRP__toOpWw")
- [Karnaugh Maps – Introduction - YouTube](https://youtu.be/3vkMgTmieZI?si=9S32eNblFRabofzH)