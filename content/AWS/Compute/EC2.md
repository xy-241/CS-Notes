---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-08-10T13:12:02+08:00
Last Date: 2024-01-22T16:46:03+08:00
References: 
---
## Abstract
---
- Basically a virtual machine 


```bash title="Cheatsheet"
# Obtain the tags and id of all EC2
aws ec2 describe-instances | jq '.Reservations[].Instances[] | {Tags: .Tags, InstanceId: .InstanceId}'

# Start a particular EC2 instance
aws ec2 start-instances --instance-ids
```
- [[Port Forwarding#Port Forwarding into EC2 Bastion|SSH into Private EC2]]

## Debugging inside EC2
---
```bash title="Cheatsheet"
# Obtain User Data in EC2
sudo cat /var/lib/cloud/instance/user-data.txt

# Obtain the outputs of system outputs, including outputs of user data
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
