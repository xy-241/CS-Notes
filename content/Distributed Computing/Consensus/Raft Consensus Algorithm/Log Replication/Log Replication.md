#distributed_computing 
>[!note] Log Replication is how a change is made using [[Append Entries]]
>1. Each change is added as a entry in the [[Leader Nodes]]'s log
>2. Log entry is currently uncommitted, so it doesn't update the [[Leader Nodes]]'s state
>3. To commit the entry, the [[Leader Nodes]] first replicates it to the [[Follower Nodes]] via [[Append Entries]]
>4. [[Leader Nodes]] waits until a majority of nodes have written the entry
>6. Entry then committed on [[Leader Nodes]], state updated
>7. A response sent back to [[Clients]]
>8. Leader then notifies the [[Follower Nodes]] that the entry is committed
>9. The [[Follower Nodes]] committed the entries, state updated
>10. Cluster now come to [[(Distributed) Consensus]] about the system state

