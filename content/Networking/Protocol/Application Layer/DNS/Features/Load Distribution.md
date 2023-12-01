#networking 
> [!example] Replicated [[Web Server]]
> 1. A set of  [[IP Address]] is associated with one [[Alias Hostname]] 
> 2. When clients make [[Networking/Protocol/Application Layer/DNS/DNS]] query for a [[Alias Hostname]] mapped to a set of [[IP Address]]
> 3. [[servers]] responds the entire set of [[IP Address]] with the use of [[DNS Rotation]]
> 4. A [[Clients]] typically sends its [[Networking/Protocol/Application Layer/HTTP/HTTP]] request message to the [[IP Address]] that is listed first in the set. Thus, distributing load among replicated server

>[!info]
>[[DNS Rotation]] is also used on [[E-mail servers]], so multiple of the servers can share the same [[Alias Hostname]]