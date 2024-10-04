---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2024-10-02, 15:10
Last Date: 2024-10-04T18:17:03+08:00
References: 
draft: 
description: 
---
## Abstract
---
- The [[Linux Kernel]] network packet processing subsystem is called [Netfilter](https://www.netfilter.org/). `iptables` is the command used to configure it

>[!important]
> Since we can use Netfilter for reverse proxy functionality, and load balancing is a type of reverse proxy, we can implement a kernel-level load balancer with Netfilter. This approach can potentially achieve higher speeds compared to load balancers powered by Nginx or similar proxy software, as it operates directly within the kernel.
> 
> Tools like [cilium](https://cilium.io/use-cases/load-balancer) uses eBPF to implement load balancing features with Netfilter to create low overhead load balancer.

## NAT Table
---
![[iptables_nat_table.png|600]]

- PREROUTING: DNAT for incoming packets (change the destination ip and port)
- OUTPUT: DNAT for outgoing local packets (change the destination ip and port, loopback)
- POSTROUTING: SNAT for outgoing local from output/forwarded packets from prerouting (change source ip and port)

- We can modify the prerouting chain, so when packet hitting port `80` can be forwarded to local process running on port `8080`
- format: `srcIP | srcPort | destPort | destIP` 
- The process is running on `10.0.0.2`
- before prerouting: `192.168.1.2 | 1234 | 80 | 10.0.0.2` 
- after prerouting: `192.168.1.2 | 1234 | 8080 | 10.0.0.2` 

To another machine (reverse proxy)
- source ip address: 192.168.1.2, srcPort: 1234, dstPort: 80, going to reverse proxy_ip
- destination ip address(app running on port 80): 192.168.1.3
- reverse proxy(Not running the application, the application is running on dst port 80): 10.0.0.2
	- Need to change the destination ip address from 10.0.0.2 to 192.168.1.3, dstPort unchanged


%% 


- format: `srcIP | srcPort | destPort | destIP` 
- The process is running on `192.168.1.3:80`

On `10.0.0.2`
- before prerouting: `192.168.1.2 | 1234 | 80 | 10.0.0.2` 
- after prerouting: `192.168.1.2 | 1234 | 80 | 192.168.1.3` (this sends the packet to a different machine)

On `192.168.1.3`
- before prerouting: `192.168.1.2 | 1234 | 80 | 192.168.1.3` (big issue, because `192.168.1.3` will reply to `192.168.1.2`, but `192.168.1.2` expects response from `10.0.0.2` since it is the one that sent the request)



- SNAT(Static NAT) deals more with inbound traffic, the router has a bunch of ip address, each ip address is mapped to each internal private ip address
- DNAT(Dynamic Nat) deals more with outbound traffic, the mapping between internal ip address and router's public ip address is dynamic 
- Port address translation(outbound): the most common form of NAT, router only one public ip address, each private ip address with a application port is mapped to a port number of the router
- port forwarding (inbound) %%



