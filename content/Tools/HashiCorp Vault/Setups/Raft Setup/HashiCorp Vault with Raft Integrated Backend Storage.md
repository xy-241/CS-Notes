#vault #distributed_computing 
[Vault Integrated Storage Concepts](https://developer.hashicorp.com/vault/docs/concepts/integrated-storage)

## 1) Intro
>[!info] HashiCorp Cloud Platform (HCP) Vault clusters use Integrated Storage, see [here](https://developer.hashicorp.com/vault/docs/configuration/storage#integrated-storage-vs-external-storage)

>[!note] Uses [[Raft Consensus Algorithm]] to replicate data across cluster nodes

>[!caution] Add more nodes[ doesn't increase the performance of the cluster](https://developer.hashicorp.com/vault/tutorials/day-one-raft/raft-reference-architecture#scaling-considerations), the extra nodes are for higher durability & availability


## 2) Node Management
>[!note] Automatic node discovery is achieved with [``auto_join``](https://developer.hashicorp.com/vault/docs/configuration/storage/raft#auto_join)
>- [Demo](https://nlbsg.udemy.com/course/integrating-hashicorp-vault-with-aws/learn/lecture/23687750#overview)



## 3) Integrated Storage
>[!note] Technical Details
>- [Integrated Storage Concepts 1](https://developer.hashicorp.com/vault/docs/concepts/integrated-storage#integrated-storage)
>- [Integrated Storage Concepts 2](https://developer.hashicorp.com/vault/docs/internals/integrated-storage)
>- [Raft Reference Architecture](https://developer.hashicorp.com/vault/tutorials/day-one-raft/raft-reference-architecture)
>- [HashiCorp Tutorials](https://developer.hashicorp.com/vault/tutorials/raft)


## 4) [[Raft Quorum]] Management
>[!caution] When we lost more than half of the total nodes. Vault is unable to elect a new leader (For more details, click [here](https://developer.hashicorp.com/vault/docs/internals/integrated-storage#quorum)). Thus, unable to serve requests from clients

>[!note] Technical Details
>- [Raft Quorum Outage Recovery Concepts](https://developer.hashicorp.com/vault/docs/concepts/integrated-storage#outage-recovery)
>- [Raft Quorum Outage Recovery Configuration](https://developer.hashicorp.com/vault/tutorials/raft/raft-lost-quorum)


## 5) [Vault Autopilot](https://developer.hashicorp.com/vault/docs/internals/integrated-storage#autopilot)
>[!note] Features
>- Unhealthy nodes are automatically removed from the Raft cluster without manual operator intervention

>[!note] Technical details
>- [Vault Autopilot Concepts](https://developer.hashicorp.com/vault/docs/concepts/integrated-storage/autopilot)
>- [Vault Autopilot Configuration](https://developer.hashicorp.com/vault/tutorials/raft/raft-autopilot#autopilot-configuration)


## 6) [Vault Health Checks](https://developer.hashicorp.com/vault/api-docs/system/health)


## 7) Optimisation
- [Production Security Hardening](https://developer.hashicorp.com/vault/tutorials/day-one-raft/production-hardening)
- [System Requirement](https://developer.hashicorp.com/vault/tutorials/day-one-raft/raft-reference-architecture#system-requirements)


## 8) Useful Commands
>[!note] List peers in the cluster
>```bash
>vault operator raft list-peers
>```

>[!note] Obtain the current Vault Autopilot Config
>```bash
>vault operator raft autopilot get-config
>```

>[!note] Initialise the Vault Autopilot
>```bash
>vault operator raft autopilot set-config \
>    -dead-server-last-contact-threshold=10 \
>    -server-stabilization-time=30 \
>    -cleanup-dead-servers=true \
>    -min-quorum=3
>```

>[!note] Get the current autopilot state
>```bash
>watch -n 1 vault operator raft autopilot state
>```

## 9) Sample Setup References
- [HashiCorp Sample Setup Tutorial](https://developer.hashicorp.com/vault/tutorials/raft/raft-storage-aws)
- [AWS Sample Setup Tutorial](https://aws.amazon.com/solutions/partners/vault/)