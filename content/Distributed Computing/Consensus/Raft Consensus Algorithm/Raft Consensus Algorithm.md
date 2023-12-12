#distributed_computing
>[!note] A [[Network Protocol]] for implementing [[(Distributed) Consensus]]

>[!note] 3 states for a node
>1. [[Follower Nodes]]
>2. [[Candidate Nodes]]
>3. [[Leader Nodes]]

>[!note] 2 Main Concepts
>1. [[Leader Election]]
>2. [[Log Replication]]

>[!note] Can stay consistent in the face of [[Network Partitions]] (Detailed can be found at [Secrete lives of data](https://thesecretlivesofdata.com/raft/#replication))

>[!note] Equivalent to [[Paxos Consensus Algorithm]] in [[Fault-tolerance]] and performance, but simpler 

>[!note] References
>- [The Secret Lives of Data](https://thesecretlivesofdata.com/raft)
>- [Raft IO Page](https://raft.github.io/)
>- [Raft Research Paper](https://raft.github.io/raft.pdf)