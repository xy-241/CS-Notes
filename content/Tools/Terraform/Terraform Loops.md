---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - terraform
Creation Date: 2023-09-29T16:09:00
Last Date: 2023-09-29T16:10:49+08:00
---
## Abstract
---


### Use Array elements as map keys
```hcl
output "aws_lb_target_group_attachment" {
	value = {
		for subnet_id in toset(module.networking.private_subnet_ids) :
		subnet_id => module.alb.network_ip[subnet_id].private_ip
	}

}
```