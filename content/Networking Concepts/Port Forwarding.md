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
Last Date: 2024-04-02T15:41:59+08:00
References: 
draft: 
---
## Abstract
---
- Allows user to access a remote machine that they don't have access to via a [[Network Port]] on their local machine or [[Routers]]. Port forwarding creates a bi-directional connection between the port on the local machine/router and the port on the remote machine 

## Port Forwarding into Fly.io App
---
```bash
flyctl proxy <local:remote> -a <APP_NAME>
```
## Port Forwarding into EC2 Bastion
---
>[!caution] EC2 Configuration
>Make sure you are using an **Amazon Linux Image**, or you have [setup system manager on EC2](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-setting-up.html)

```bash
aws ssm start-session --target <bastion_instance_id> --region <aws_region> --document-name AWS-StartPortForwardingSession --parameters portNumber=<ec2_port>,localPortNumber=<local_port>
```

- The EC2 Bastion is inside an AWS private subset, blocking all incoming traffic from the internet
- With the help of [[AWS SSM]], we are able to port forwarding a port of the bastion host to a localhost port
- So we are able to access the service running on a particular bastion host port by accessing a localhost port



## Socat Port Forwarding
---
```bash
# -d -d enables debug mode
# TCP-LISTEN:<PORT_NUMBER>,fork forks a new process for each incoming connection
sudo socat -v -d -d TCP-LISTEN:<LOCAL_PORT_NUMBER>,fork TCP4:<REMOTE_ENDPOINT>:<REMOTE_PORT_NUMBER>
```

- Forward traffic from a local machine [[Network Port]] to a remote network port over [[TCP]]
- The command below creates a new [[Process (进程)]] for new connection on `localhost:<LOCAL_PORT_NUMBER>`, incoming requests are all **port forwarded** to the `<REMOTE_ENDPOINT>:<REMOTE_PORT_NUMBER>` over TCP