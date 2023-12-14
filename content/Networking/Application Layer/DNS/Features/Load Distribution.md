---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-12-12T11:49:00+08:00
Last Date: 2023-12-12T11:49:00+08:00
References:
---
> [!example] Replicated [[Web Server]]
> 1. A set of  [[IP Address]] is associated with one [[Alias Hostname]] 
> 2. When clients make [[DNS]] query for a [[Alias Hostname]] mapped to a set of [[IP Address]]
> 3. [[Host]] responds the entire set of [[IP Address]] with the use of [[DNS Rotation]]
> 4. A [[Host]] typically sends its [[HTTP]] request message to the [[IP Address]] that is listed first in the set. Thus, distributing load among replicated server

>[!info]
>[[DNS Rotation]] is also used on [[E-mail servers]], so multiple of the servers can share the same [[Alias Hostname]]