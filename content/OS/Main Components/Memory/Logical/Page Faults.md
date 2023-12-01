#OS 
## Abstract
- Usually happens when not all [[Process]] has its whole program codes in the [[Main Memory]], and the [[Instruction]] needed isn't in Main Memory. [[OS]] will go and get the missing instruction from disk

>[!caution] The process is blocked while the necessary instruction is being located and read in


## 3 Possible Causes
### 1. No Access Rights (doubt )
- Accessing [[Main Memory]] that isn't assigned to the requesting [[Process]]. Resulting in [[Segmentation Fault]]

### 2.[[#Lazy Allocation]]
- Actual [[Main Memory]] is only allocated when it is needed

### 3. Required [[Main Memory]] in [[Swap]]
- We need to retrieve the [[Data]] from [[Swap]] & place it inside [[Main Memory]]


## Terminologies
### Lazy Allocation
- Not allocating [[Main Memory]] until it is actually needed
- By delaying the actual allocation, we speed up startup time & eliminate allocation entirely if it isn't used 
- But this means slower execution speed because [[Main Memory]] is only allocated when needed & we are risky to run-time allocation errors aka more likely to crash when running the app halfway 