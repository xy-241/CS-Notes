#computer_organisation 
![[pipeline_flush.png]]
- We have remove all the [[Computer Organisation/Instruction Set Architecture (ISA)/Instruction]] we loaded in (In this case, statement 1-4), because we need to execute statement A-D after the [[Branching]]

>[!warning] [[Instruction-Level Parallelism]] Wasted!
>![[parallism wasted.png]]
>- In this case, when there is a [[Branching]] happening, we need to discard all [[Computer Organisation/Instruction Set Architecture (ISA)/Instruction]] running in [[parallel]]
>- This can be optimized by using [[Branch Prediction]]

