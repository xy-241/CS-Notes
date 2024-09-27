---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-09-27, 16:48
Last Date: 2024-09-27T17:00:01+08:00
References: 
draft: 
description: 
---
## Abstract
---
- Repeatedly removes nodes without dependencies (incoming edges) from the graph and adds them to the [[Graph#Topological Sort|topological ordering]]
- As nodes without dependencies are removed from the graph, their outgoing edges are also removed, which may be the incoming edges of other nodes. Those other nodes will have their incoming edges removed and thus become free, becoming nodes without dependencies
- We repeat removing nodes without dependencies from the graph until all nodes are processed, or a [[Graph#Cycle|cycle]] is discovered

>[!question] How do I check for dependencies?
> We check the incoming degree of the node. If it's zero, it means it has no dependencies.



## References
---
- [Topological Sort | Kahn's Algorithm | Graph Theory - YouTube](https://youtu.be/cIBFEhD77b4?si=UHFY_53c-pnEy5Tr)