---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - distributed_computing
Creation Date: 2023-12-12T11:41:14+08:00
Last Date: 2023-12-23T19:48:46+08:00
References: 
---
## Abstract
---
- A [[Network Protocol]] for implementing [[Distributed Consensus]]
- Can stay consistent in the face of **Network Partitions** (Detailed can be found at [Secrete lives of data](https://thesecretlivesofdata.com/raft/#replication))
- Equivalent to [Paxos Consensus Algorithm](https://www.scylladb.com/glossary/paxos-consensus-algorithm/) in  terms of Fault-tolerance  and performance, but simpler 

## 3 States for a Node
---
### Follower Node

### Candidate Node

### Leader Node


## 2 Main Concepts
---
### Leader Election
### Log Replication
Log Replication is how a change is made using [[Append Entries]]

1. Each change is added as a entry in the [[#Leader Node]]'s log
2. Log entry is currently uncommitted, so it doesn't update the Leader Nodes's state
3. To commit the entry, the Leader Nodes first replicates it to the [[#Follower Node]] via Append Entries
4. Leader Nodes waits until a majority of nodes have written the entry
6. Entry then committed on Leader Nodes, state updated
7. A response then sent back to [[Host#Client]]
8. Leader then notifies the Follower Nodes that the entry is committed
9. The Follower Nodes committed the entries, state updated
10. Cluster now come to [[Distributed Consensus]] about the system state

>[!note] 3 states for a node
>1. [[Follower Nodes]]
>2. [[Candidate Nodes]]
>3. [[Leader Nodes]]




## References
---
- [The Secret Lives of Data](https://thesecretlivesofdata.com/raft)
- [Raft IO Page](https://raft.github.io/)
- [Raft Research Paper](https://raft.github.io/raft.pdf)