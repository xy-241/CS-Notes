---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-08-01T16:41:00
Last Date: 2023-12-18T13:39:09+08:00
---
## Abstract
---
- A tool to remove *all resources* in an AWS Account automatically without manually clicking countless buttons 
>[!CAUTION] Always double check what resources that AWS Nuke aren't able to remove
>- There are a few resources that require manual removal like *AWS Network Firewall*


## AWS Account Setting
---
- We need to create **Account Alias** in order to start using `aws-nuke`
![[account_alias.png]]
- Refer to [Github Repo](https://github.com/rebuy-de/aws-nuke) for more details


## config.yml (Configuration File)
---
### Example 1: Remove all
```yaml
regions:
  - "ap-southeast-1"
account-blocklist:
  - 1234567890
accounts:
  "<YOUR_ACCOUNT_NUMBER>": {}
```

>[!caution] Yaml Syntax
>Make sure there is a **space** between `:` and `{}`
### Example 2: Filter resources (Prevent some resources from be removed)
```yaml
# Achieve this:  ap-southeast-1 - ACMCertificate - arn:aws:acm:ap-southeast-1:106330972965:certificate/5212c31a-94f1-4dc9-80a8-b72d8d6b2054 - [DomainName: "vault.yxy.ninja"] - filtered by config

regions:
  - "ap-southeast-1"
account-blocklist:
  - 1234567890
accounts:
  "<YOUR_ACCOUNT_NUMBER>":
    filters:
      ACMCertificate:
        - "arn:aws:acm:ap-southeast-1:106330972965:certificate/5212c31a-94f1-4dc9-80a8-b72d8d6b2054"
```

## Run in [[Docker]]
---
- Pass in the [[#config.yml (Configuration File)]] & AWS Profile to the container using [[Docker Volume]]
```bash
docker run \
   --rm -it \
   -v <ABSOLUTE_PATH_TO_CONFIG.YAML>:/home/aws-nuke/config.yml \
   -v <ABSOLUTE_PATH_TO_.aws>:/home/aws-nuke/.aws \
   rebuy/aws-nuke:latest \
   --profile <YOUR_AWS_PROFILE> \
   --config /home/aws-nuke/config.yml
```