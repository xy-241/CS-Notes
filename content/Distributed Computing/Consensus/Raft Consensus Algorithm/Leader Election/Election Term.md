---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - distributed_computing
Creation Date: 2023-08-03T14:32:43+08:00
Last Date: 2023-08-03T14:32:43+08:00
References:
---
>[!note] What the [[Candidate Nodes]] will do in a [[Election Term]]
>1. Vote for itself
>2. Sends out [[Request Votes]] messages to other nodes
>3. If the receiving node hasn't voted yet in this [[Election Term]] then it votes for the new [[Candidate Nodes]] & reset its [[Election Timeout]]
>4. Once a [[Candidate Nodes]] has a majority of votes, it becomes [[Leader Nodes]] -> guarantees only one leader can be elected per term (Exception: [[Split Vote]])
>5. The new [[Leader Nodes]] sending out [[Append Entries]] messages to its [[Follower Nodes]]
>6. [[Follower Nodes]] then respond to each [[Append Entries]] messages
>7. The [[Election Term]] will continue until a [[Follower Nodes]] stops receiving [[Append Entries]] & becoming a new [[Candidate Nodes]] ([[Election Timeout]])