---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2025-08-16, 18:13
Last Date: 2025-08-29T11:20:22+08:00
References:
draft:
description: "Step-by-step guide to check server connectivity: DNS, ports, services, firewall, SSH configs, and logs."
---
## Is it Reachable?
---

```sh
dig <hostname> # for detailed debugging

nslookup <hostname> # for quick info check
```
- Check if [[DNS|DNS resolution]] is working 
- If not, we can proceed if we know the [[IP Address]] of the [[Host|host]]

```sh
nc -vz <hostname> <port>

# example
# nc -vz notes.yxy.ninja 443
# Connection to notes.yxy.ninja port 443 [tcp/https] succeeded!
```
- Check if [[Network Port|port]] is open

```sh
ping <hostname>

# example
# ping notes.yxy.ninja 
# PING notes.yxy.ninja (104.21.96.1): 56 data bytes

traceroute <hostname> # to see which part of the path broken
```
- Check if the destination is reachable and path stable


## Is Service Up?
---

```sh
nmap -sV -p <port> <hostname>

# example
# nmap -sV -p 443 notes.yxy.ninja
# PORT    STATE SERVICE  VERSION
# 443/tcp open  ssl/http Cloudflare http proxy
```
- Check if the service is available at the expected port 

## Is It Blocked?
---
- We may have [[Access Control List|firewall rules]] that block certain type of traffic or certain ports
- It is important to check firewall rules on both client and server side


## Is Authentication Okay?
---
- You can use `-v` flag in a lot of commands to inspect for authentication issues 

>[!tool] SSH keys and permissions
> Ensure we have `rwx` access to the `.ssh` folder with `chmod 700 ~/.ssh/` and `rw` access to the items inside the `.ssh` folder with `chmod 600 ~/.ssh/*`.

## Are Configs Correct?
---
- The configs on both the client and server may define how they should communicate with each other

>[!tool] SSH config
> There are 3 popular config phases that define the way and who can access on the server side which can be found in `/etc/ssh/sshd_config`:
> 1. `PasswordAuthentication yes/no`
> 2. `PubkeyAuthentication yes`
> 3. `PermitRootLogin no`
>    
> The client-side config file can be found here`~/.ssh/config`.


## Check The Logs
---
- We should push all [[Observability#Log|logs]] to a central place where we can have visibility into the server
- If we didn't push logs to a central place, we can check the logs using `systemctl status <service>` or `journalctl -u <service>`