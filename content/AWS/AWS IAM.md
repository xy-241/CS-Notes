---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
  - security
Creation Date: 2025-11-10, 00:55
Last Date: 2025-11-10T01:06:28+08:00
References:
draft:
description: Learn AWS Identity and Access Management (IAM)  - understand policies, roles, users, and trust relationships. Covers key concepts like least privilege, resource policies, and STS temporary credentials with clear examples and best practices.
---
## Abstract
---
- **Purpose:** Controls **who can do what on which resource** in AWS.
- **Core unit:** A **policy** — defines _authorization_ rules.


>[!important] Security best practices
> - Never use the **root account** except for initial setup.
> - Follow the **least privilege principle** (grant only what’s necessary).
> - Use **explicit denies** for strong guardrails.
> - Test with the **IAM Policy Simulator** before deploying.


## IAM Policy
---
- `Effect`: `Allow` or `Deny` (explicit `Deny` always wins)
- `Action`: what API calls are allowed (`s3:GetObject`, `ec2:StartInstances`, etc.)
- `Resource`: which resources those actions apply to
- `Condition`: optional filters (IP, MFA, time, tag, etc.)

### Trust Policy
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::111122223333:root"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

- Defines _who_ can assume the role (e.g., a user, service, or another account).
- Used for **cross-account access** instead of sharing keys.

### Resource Policy
- A **resource-based policy** attached directly to the S3 bucket (or other resource).
- Includes a `Principal` field,  specifies **who** (which user, account, or role) can access it.
- Works _together_ with IAM identity policies:
	- IAM policies grant _broad permissions_ to a user.
	- Bucket policy _restricts or enables_ access for specific resources or cross-account use.
- Great for **cross-account sharing**, you can simply allow another AWS account ID in the bucket policy, avoiding extra role setup.

## IAM User
---
- Permanent credentials (Access Key ID + Secret Access Key) for IAM users (best avoided for apps, use [[#IAM Role]] instead).

## IAM Role
---
- A **temporary identity** assumed by: AWS services (EC2, Lambda, ECS tasks, etc) or external users/accounts via [[#Trust Relationship|trust policies]].
- Roles have **no static credentials**, they rely on **STS** to issue temporary ones.
- IAM roles have **two policies** attached:
	- A [[#Trust Policy|trust policy]] (who can assume it)
	- A [[#IAM Policy|permissions policy]] (what actions it can perform once assumed)
