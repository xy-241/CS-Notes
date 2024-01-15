---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-09-30T19:24:00
Last Date: 2023-12-30T00:34:21+08:00
---
## Abstract
---
- AWS's offering of [[Network Load Balancer]]
- Uses [[NAT]] to [[Proxy]] the incoming/outgoing traffic
- Listener can only be either `TCP`, `TCP_UDP`, `TLS` or `UDP`
- [[Target Group]] can only use [[Network Protocol]] `TCP`, `TCP_UDP`, `TLS` or `UDP` (Based on AWS experience)
- [[Health Check]] can use Network Protocol `TCP`, `HTTP` or `HTTPS` 

## Tips
---
### Obtain Private IPs dynamically using Terraform
```hcl
data "aws_network_interface" "nlb_private_ip" {
	for_each = toset(var.private_subnet_ids)
	
	filter {
		name = "description"
		values = ["ELB ${aws_lb.network.arn_suffix}"]
	}
	
	filter {
		name = "subnet-id"
		values = [each.value]
	}
}

resource "aws_lb_target_group_attachment" "nlb" {
	for_each = toset(var.private_subnet_ids)
	
	target_group_arn = aws_lb_target_group.nlb.arn
	
	target_id = data.aws_network_interface.nlb_private_ip[each.key].private_ip
	
	port = 443
}
```
>[!caution]
>- We are creating the resources based on `var.private_subnet_ids`. Thus we need to [[Terraform#Dependencies]]