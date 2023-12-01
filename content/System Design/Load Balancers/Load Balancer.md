#system_design 
## Abstract

## Benefits
### [[High Availability]] & [[Fault-tolerant]]
- For example, in [[HashiCorp Vault]], there is only one server which is an active node that talks to the database. The rest is standby nodes
- When the active node is down, one of standby nodes can quickly take over the traffic without the **downtime occured by spinning up a new active node**


## Types
>[!example] [[Application Load Balancer (Layer 7)]]