---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-08-10T13:12:02+08:00
Last Date: 2023-08-10T13:12:02+08:00
References:
---
>[!note] 2 ways to create
>1. Using the EC2 page
>2. Create [[Target Group]] & ([[Launch Templates]],  [[Auto Scaling Group]])


>[!tip] Obtain [[User Data]] in EC2
>```bash
>sudo cat /var/lib/cloud/instance/user-data.txt
>```

>[!tip] Obtain the outputs of system outputs (including outputs of [[User Data]])
>```bash
>cat /var/log/syslog
>```

>[!tip] [[Bash Function]] to obtain a temp [[Token-Based Authentication]] & reretrieve instance metadata, [MDSV](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configuring-instance-metadata-service.html)
>```bash
>get_mdsv2 () {
>	echo $(TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600" 2>/dev/null` \
>&& curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/${1} 2>/dev/null)
>}
>```
>