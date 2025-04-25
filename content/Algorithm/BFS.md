---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - dsa
Creation Date: 2024-03-31, 18:16
Last Date: 2025-04-25T14:59:36+08:00
References: 
draft: 
description: 
---
## Abstract
---
>[!info] Use Cases
> - When you want to find the **shortest path (in an unweighted graph)**
> - When you prefer level-by-level expansion
> - When you want to **avoid deep recursion**

>[!note] Complexity Analysis
> - Time Complexity: $O(V + E)$
> - Space Complexity: $O(n)$ for the queue and visited

>[!success] Pros
> - Guaranteed to find the shortest path
> - Handles cycles easily with visited
> - Safer for large/deep graphs (no stack overflow)

>[!warning] Cons
> - Slightly more verbose (requires queue)
> - Can use more memory than [[DFS]]


## Code Example
---

<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/428vwn2fu?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

