---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - tool
Creation Date: 2023-08-01T16:41:00
Last Date: 2023-09-30T22:24:00
---
## Abstract
- We need to create [[Account Alias]] in order to start using `aws-nuke`
![[account_alias.png]]
- Refer to [Github Repo](https://github.com/rebuy-de/aws-nuke) for more details

## Run in [[Docker]]
- Pass in the [[#config.yml (Configuration File)]] & AWS Profile to the container using [[Docker Volume]]
```bash
docker run \
   --rm -it \
   -v <HOST_PATH>/config.yml:/home/aws-nuke/config.yml \
   -v <HOST_PATH>/.aws:/home/aws-nuke/.aws \
   rebuy/aws-nuke:latest \
   --profile swift \
   --config /home/aws-nuke/config.yml
```

## config.yml (Configuration File)
### Example 1: Remove all
```yaml
regions:
  - "ap-southeast-1"
account-blocklist:
  - 1234567890
accounts:
  "106330972965":{}
```

### Example 2: Filter resources (Prevent some resources from be removed)
```yaml
# Achieve this:  ap-southeast-1 - ACMCertificate - arn:aws:acm:ap-southeast-1:106330972965:certificate/5212c31a-94f1-4dc9-80a8-b72d8d6b2054 - [DomainName: "vault.yxy.ninja"] - filtered by config

regions:
  - "ap-southeast-1"
account-blocklist:
  - 1234567890
accounts:
  "106330972965":
    filters:
      ACMCertificate:
        - "arn:aws:acm:ap-southeast-1:106330972965:certificate/5212c31a-94f1-4dc9-80a8-b72d8d6b2054"
```



