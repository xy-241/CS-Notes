---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - database
Creation Date: 2023-09-13T11:04:26+08:00
Last Date: 2024-10-15T21:06:59+08:00
References: 
---
## Abstract
---
- [[Database#Transaction]] that is [[#Atomic]], [[#Consistent]], [[#Isolation]] & [[#Durable]]
- Usually achieved with [[Lock]]

>[!attention] Cons
> - Costly
> - Difficult to [[System Design#Scalability (可扩展性)|scale]]

>[!success] Data always consistent
> This ensures [[Data]] never falls into an inconsistent state because of an [[Database#Transaction]] that only **partially completes**.
> 
> Guarantees that a ``READ`` will return the latest successful ``WRITE``.


### Atomic
- A quality that ensures each [[Database#Transaction]] is fully committed or not at all
- It treats each [[Database#Transaction]] as a single unit of change to [[Database]] and can't be partially completed 
- [[Database#Transaction]] is either committed or rolled back
### Consistent
- A quality that ensures the [[Database]] is in a consistent and valid state after a [[Database#Transaction]] is committed
- It prevents the [[Database]] from being corrupted
### Isolation
- Ensures that [[Database#Transaction]] are independent
- Each [[Database#Transaction]] can occur as though they were occurring one by one, even though they're actually occurring simultaneously 
- Ensures that data is managed between database operations so it is not used in [[Database#Transaction]] simultaneously. Instead, the first transaction will complete, and then the next will begin
### Durable
- Permanently preserves all [[Database#Transaction]] by saving to permanent storage, not kept in volatile memory
- Ensures changes to data made by successfully executed [[Database#Transaction]] will be saved, even in the event of system failure (like power loss)

