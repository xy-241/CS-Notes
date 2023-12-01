#computer_organisation 
- Perform [[Instruction-Level Parallelism]] based on the prediction of if [[Branching]] is going out of the loop or going back to the start of the loop
- There are many different [[Branch Prediction Strategies (Heuristics)]]
- [[Computer Organisation/CPU/CPU]] use multiple of the [[Branch Prediction Strategies (Heuristics)]]


>[!example]
>## It makes more sense to predict the branch is going back to the start of the loop
>- Because we can only be wrong one time when the loop is going out of the loop
>- If we predict the loop is going out of the loop, then we will be wrong as many time as the number of loop iterations
>	