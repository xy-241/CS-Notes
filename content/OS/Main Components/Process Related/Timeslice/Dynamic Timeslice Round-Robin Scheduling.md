#OS 
>[!abstract]
>- [[Timeslice (Quantums)]] = [[Target Latency]] / (total [[Process]] - 1), where total process is >1
>![[Dynamic_timeslice_round-robin_scheduling.png]]
>- Used in modern [[Process Scheduler]]

>[!success] Helps to make each [[Process]] be more responsive
>- Ensures each [[Process]] will get to run again before it seems laggy to the user

>[!success] [[Process]] gets to run faster when there is less [[Process]]
>- The [[Timeslice (Quantums)]] is a ratio of [[Target Latency]] and total [[Process]]