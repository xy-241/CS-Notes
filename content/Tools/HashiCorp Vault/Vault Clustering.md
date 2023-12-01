#vault 
>[!abstract]
>- Provide [[High Availability]]
>- Multiple [[Vault Nodes]] sharing the same [[Storage Backend, Vault]] without extra configuration, and the [[Storage Backend, Vault]] must be [[High Availability]]
>- Available in open source
>- Consist of [[Vault Nodes|Active Node]] and [[Vault Nodes|Standby Node]]

>[!note] Leader /[[Vault Nodes|Active Node]] Selection
>- The first [[Vault Nodes]] that grab a lock in the [[Storage Backend, Vault]] becomes the [[Vault Nodes|Active Node]] 