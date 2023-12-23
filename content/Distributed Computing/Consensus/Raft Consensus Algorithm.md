---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - distributed_computing
Creation Date: 2023-08-03T15:11:14
Last Date: 2023-12-24T02:47:22+08:00
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
- All Nodes start in the *Follower Nodes* state

### Leader Node
- All changes from [[Host#Client]] to the **raft cluster** go through the Leader Node
### Candidate Node
- If [[#Follower Node]] doesn't hear from [[#Leader Node]], then it becomes a **Candidate Node**




## 2 Main Concepts
---
### Leader Election
- [[#Candidate Node]] requests votes from other nodes, becomes a [[#Leader Node]] if it gets votes from a majority of nodes
- 2 timeout settings that control elections - [[#Election Timeout]] & [[#Heartbeat Timeout]]


### Log Replication
Log Replication is how a change is made using [[#Append Entries]]

1. Each change is added as a entry in the [[#Leader Node]]'s log
2. Log entry is currently uncommitted, so it doesn't update the Leader Nodes's state
3. To commit the entry, the Leader Nodes first replicates it to the [[#Follower Node]] via Append Entries
4. Leader Nodes waits until a majority of nodes have written the entry
6. Entry then committed on Leader Nodes, state updated
7. A response then sent back to [[Host#Client]]
8. Leader then notifies the Follower Nodes that the entry is committed
9. The Follower Nodes committed the entries, state updated
10. Cluster now come to [[Distributed Consensus]] about the system state




## Terminologies
---
### Heartbeat Timeout
- WIP

### Election Timeout
- The amount of time a [[#Follower Node]] waits until becoming a [[#Candidate Node]]
- Randomized to be between 150ms and 300ms
- After the Election Timeout, a new [[#Election Term]] starts

### Append Entries
- Heartbeat sent in intervals specified by the [[#Heartbeat Timeout]]
- When a [[#Follower Node]] receives append entries, it resets [[#Election Timeout]]

### Split Vote
- Occurs when 2 [[#Candidate Node]] get the same number of votes
- Countered by starting a new [[#Election Term]]

### Election Term
Actions taken by [[#Candidate Node]]
1. Vote for itself
2. Sends out Request Votes messages to other nodes
3. If the receiving node hasn't voted yet in this Election Term then it votes for the new Candidate Nodes & reset its [[#Election Timeout]]
4. Once a Candidate Nodes has a majority of votes, it becomes [[#Leader Node]] -> guarantees only one leader can be elected per term (Exception: [[#Split Vote]])
5. The new Leader Nodes sending out [[#Append Entries]] messages to its [[#Follower Node]]
6. Follower Nodes then respond to each Append Entries messages
7. The Election Term will continue until a Follower Nodes stops receiving Append Entries & becoming a new Candidate Nodes ([[#Election Timeout]])



## References
---
- [The Secret Lives of Data](https://thesecretlivesofdata.com/raft)
- [Raft IO Page](https://raft.github.io/)
- [Raft Research Paper](https://raft.github.io/raft.pdf)