---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-12-07, 11:17
Last Date: 2023-12-07T11:54:41+08:00
References: 
---
## Abstract
---
- A central place to store the **parameters** used by others *AWS Services*


## Update Programmatically
---
- One common use case of this service is to **add/delete/access/modify** the parameters
- Doing these operations programmatically is **less error prone** & **faster**
### 1) Install `aws-parameter-bulk`
```bash
brew tap gork74/gork7
brew install aws-parameter-bulk
```
### 2) Carry out the operation
```bash
# Grab all the parameters from <YOUR_AWS_PROFILE> from the <YOUR_AWS_REGION>, and save them to your current directory in a file called `.env`
AWS_PROFILE=<YOUR_AWS_PROFILE> AWS_REGION=<YOUR_AWS_REGION> aws-parameter-bulk get / --prefixpath > .env

# Go into the file to add/delete/access/modify the parameters

# Sync your local changes back to AWS parameter store
AWS_PROFILE=<YOUR_AWS_PROFILE> AWS_REGION=<YOUR_AWS_REGION> aws-parameter-bulk save .env
```