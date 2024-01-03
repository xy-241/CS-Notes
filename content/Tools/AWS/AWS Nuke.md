---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-08-01T16:41:00
Last Date: 2023-12-21T10:35:12+08:00
---
## Abstract
---
A tool to remove *all resources* in an AWS Account automatically without manually clicking countless buttons 

Refer to [Github Repo](https://github.com/rebuy-de/aws-nuke#caution) for more details

>[!CAUTION] Always double check what resources that AWS Nuke aren't able to remove
>- There are a few resources that require manual removal like *AWS Network Firewall*

Setup Checklist:
- [ ] [[#AWS Account Setting]]
- [ ] [[#AWS Nuke Configuration File]]
- [ ] [[#Run in Docker]]
## AWS Account Setting
---
We need to create **Account Alias** in order to start using `aws-nuke`
![[account_alias.png]]



## AWS Nuke Configuration File
---
We are using a `.yml` to configure the behaviour of `aws-nuke`
### Example 1: Remove all
```yaml /<YOUR_ACCOUNT_NUMBER>/
regions:
  - "ap-southeast-1"
account-blocklist:
  - 1234567890
accounts:
  "<YOUR_ACCOUNT_NUMBER>": {}
```

>[!caution] Yaml Syntax
>Make sure there is a **space** between `:` and `{}`
### Example 2: Filter resources
Prevent some resources from be removed
```yaml /<YOUR_ACCOUNT_NUMBER>/ {9-11}
# Achieve this:  ap-southeast-1 - ACMCertificate - arn:aws:acm:ap-southeast-1:106330972960:certificate/5212c31a-94f1-4dc9-80a8-b72d8d6b2054 - [DomainName: "vault.yxy.ninja"] - filtered by config

regions:
  - "ap-southeast-1"
account-blocklist:
  - 1234567890
accounts:
  "<YOUR_ACCOUNT_NUMBER>":
    filters:
      ACMCertificate:
        - "arn:aws:acm:ap-southeast-1:106330972960:certificate/5212c31a-94f1-4dc9-80a8-b72d8d6b2054"
```

## Run in [[Docker]]
---
Pass in the [[#AWS Nuke Configuration File]] & **AWS Credentials** to the container using [[Docker Volume]]
```bash /<ABSOLUTE_PATH_TO_CONFIG.YAML>/ /<ABSOLUTE_PATH_TO_.aws>/ /<YOUR_AWS_PROFILE>/
docker run \
   --rm -it \
   -v <ABSOLUTE_PATH_TO_CONFIG.YAML>:/home/aws-nuke/config.yml \
   -v <ABSOLUTE_PATH_TO_.aws>:/home/aws-nuke/.aws \
   rebuy/aws-nuke:latest \
   --profile <YOUR_AWS_PROFILE> \
   --config /home/aws-nuke/config.yml
```