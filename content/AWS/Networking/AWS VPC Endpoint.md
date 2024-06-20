---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
  - networking
Creation Date: 2024-06-14, 16:56
Last Date: 2024-06-18T10:50:09+08:00
References: 
draft: 
description: 
---
## Abstract
----

![[vpc_endpoint.png|600]]

- An AWS VPC endpoint enables **private communication** between **resources in** your **Virtual Private Cloud (VPC)** and **supported AWS services**, **without** requiring an **internet gateway**, **NAT device**, or **VPN connection**. **Traffic** between your VPC and the AWS service remains **within the secure Amazon network**
</br>

- In the diagram above, we are creating a **VPC endpoint** that **allows access** to the **S3 bucket** **without traversing** the **public internet**. The VPC endpoint has an **associated inbound security group** that **controls** which **resources** can use it to **access** the **S3 bucket**
- For the **EC2 instances** to **access** the **S3 bucket** via the **VPC endpoint**, their **outbound traffic** must be **allowed to reach the VPC endpoint**. This is done by specifying the **destination** as the **VPC endpoint's security group**. Additionally, the **VPC endpoint's security group** needs to **allow inbound traffic** from the **EC2 instances** by specifying the **source** as the **EC2 instances' security group**



>[!important]
> Make sure **DNS resolution** and **DNS hostname** are enabled for the VPC.
> 
> Ensure the **VPC endpoint** is **reachable**. In the above example, place the VPC endpoint in the same private subnet as the EC2 instance. This will help prevent connectivity issues that could arise if the VPC endpoint were in the public subnet but the EC2 instance did not have access to it.



## Gateway VPC Endpoint
---


## Interface VPC Endpoint
---


## References
---
- [Keep Your Network Traffic in AWS with VPC Endpoints | Overview and Tutorial - YouTube](https://youtu.be/jo3X_aay4Vs?si=zWRCTScdGJ6ZSO7w)