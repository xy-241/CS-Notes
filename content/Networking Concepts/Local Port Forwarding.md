---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - aws
  - fly_io
Creation Date: 2024-01-16, 20:50
Last Date: 2024-05-04T23:15:23+08:00
References: 
draft: 
description: Accessing private services as if they are running on your local machine!
---
## Abstract
---
- A technique used to access a service running on a **destination machine** via an **intermediate server** as if it is local to the **client machine**. The **intermediate server** functions like a [[Forward Proxy (正向代理)]], the [[Host#Server]] doesn't know the actual identity of the client

>[!important] Main purpose: accessing private services
> The main purpose of local port forwarding is accessing **private services** running on a **destination machine** as if they are running on the **client machine** locally. 
> 
> **Client machine** can be devices like our laptops that don't have access to the **destination machine**, but have access to the **intermediate server**.
> 
> **Intermediate server** can [Bastion host - Wikipedia](https://en.wikipedia.org/wiki/Bastion_host) that has direct access to the **destination machine**. The intermediate server **will only relay traffic** from the **client machine** only if the **client machine** passes the [[Authentication]] (using API key or [[SSH]] etc).
> 
> **Destination machine** can be your [[Database]] that blocks all access from the Internet and only allows connections from the **Intermediate server** to minimise the attack surface.
> 
> Refer to [[#SSH Local Port Forwarding]] for a more visual and concrete explanation.


## SSH Local Port Forwarding
---
- Using [[SSH]] to build up a secure connection between the client machine and the intermediate server, this prevents man-in-the-middle attack. The data is transferred in the [[SSH#SSH Channel]]
</br>

- The diagram below shows the SSH commands used to create a [[Local Port Forwarding]] to access private service that is running on the **Intermediate server**

![[ssh_local_port_forwarding_1.png|500]]

- The diagram below shows the SSH commands used to create a Local Port Forwarding to access private service that is running on the **destination machine** via an **Intermediate server (Bastion server)**

![[ssh_local_port_forwarding_2.png|500]]


>[!bigbrain] Share private service access to other devices on the same network as the client machine
> If your client machine is connected to a [[Computer Network#Local Area Network (LAN)]] and has a [[IP Address#Private IP Address]] `192.168.31.3` for example. When you run the SSH command, instead putting `localhost:8080` as shown above, you can replace it with `192.168.31.3:8080`. This allows all other devices connected to the same LAN to access the private service running on the **destination server** side!


## Fly.io App Port Forwarding
---
- [[Local Port Forwarding]] a local machine [[Network Port]] to a fly.io app container port

```bash
flyctl proxy <local_port>:<remote_port> -a <app_name>
```
## EC2 Port Forwarding
---
>[!caution] EC2 Configuration
>Make sure you are using an **Amazon Linux Image**, or you have [setup system manager on EC2](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html)


>[!important] Use case
> The **EC2 Bastion** is **inside an AWS private subset**, blocking all incoming traffic from the internet. With the help of [[AWS SSM]], we are able to carry out [[Local Port Forwarding]], so we are able to **access the private service** running on the **bastion host** or private services the **bastion host has access to** by **accessing a localhost port**.




- Port forward a local machine [[Network Port]] to a EC2 instance port

![[ec2_local_port_forwarding.png|600]]

```bash
aws ssm start-session \
--target <ssm-managed-instance-id> \
--region <aws_region> \
--document-name AWS-StartPortForwardingSession \
--parameters portNumber=<ec2_port>,localPortNumber=<local_port>
```

- Port forward a local machine [[Network Port]] to a **private service** the EC2 instance has access to

![[ec2_local_port_forwarding_2.png|600]]

```bash
aws ssm start-session \
--target <ssm-managed-instance-id> \
--region <aws_region> \
--document-name AWS-StartPortForwardingSessionToRemoteHost \
--parameters '{"portNumber":["<3306>"],"localPortNumber":["<1053>"],"host":["<remote-database-host-name>"]}'
```


## References
---
- [SSH Tunneling - Local & Remote Port Forwarding (by Example) - YouTube](https://www.youtube.com/watch?v=N8f5zv9UUMI)
- [A Visual Guide to SSH Tunnels: Local and Remote Port Forwarding](https://iximiuz.com/en/posts/ssh-tunnels/)
- [New – Port Forwarding Using AWS System Manager Session Manager | AWS News Blog](https://aws.amazon.com/blogs/aws/new-port-forwarding-using-aws-system-manager-sessions-manager/)
- [Use port forwarding in AWS Systems Manager Session Manager to connect to remote hosts | AWS Cloud Operations & Migrations Blog](https://aws.amazon.com/blogs/mt/use-port-forwarding-in-aws-systems-manager-session-manager-to-connect-to-remote-hosts/)
- [Start a session - AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-sessions-start.html)