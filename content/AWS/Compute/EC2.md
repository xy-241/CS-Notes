---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-08-10T13:12:02+08:00
Last Date: 2024-01-16T21:07:49+08:00
References: 
---
## Abstract
---
- Basically a virtual machine 


## EC2 Secure Access
---
### Accessing Running Service on Private EC2
- Refer to [[Port Forwarding#Port Forwarding into EC2 Bastion]]


## EC2 Debugging
---
### Obtain User Data in EC2
```bash
sudo cat /var/lib/cloud/instance/user-data.txt
```

### Obtain the outputs of system outputs
- Including outputs of [[User Data]]
```bash
cat /var/log/syslog
```

### Obtain EC2 Metadata
- With the new [MDSV](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html), we need to perform [[Token-Based Authentication]] to access EC2 Metadata. Below is a short bash function to does it easily
```bash
get_mdsv2 () {
	echo $(TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600" 2>/dev/null` \
&& curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/${1} 2>/dev/null)
}
```
