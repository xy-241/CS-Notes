#computer_organisation 
![[Pipeline Stall.png]] 
- Pause the instruction before the previous [[Computer Organisation/Instruction Set Architecture (ISA)/Instruction]] has [[Write back]] the data it needs

> [!warning] Attention
> - Too much stall in the [[Pipeline]] will reduce the benefits of [[Pipelining]]
> - When one [[Computer Organisation/Instruction Set Architecture (ISA)/Instruction]] stalls, the other [[Computer Organisation/Instruction Set Architecture (ISA)/Instruction]] running will have to stall too. We can minimize such situation by using [[Out-of-Order Execution]]
