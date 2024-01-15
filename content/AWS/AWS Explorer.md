---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2024-01-08, 14:07
Last Date: 2024-01-08T14:21:32+08:00
References: 
draft: 
title: Manage Your AWS from Code Editor without Console Hassles
---
## Abstract
---
- Solves the pain of going into the AWS Console or copy-paste commands to access the resources created
- Instead, do it inside your code editor!

## Features I Like
---
- Read and edit [[File]] in S3 buckets (file size need to be `<=50MB`)
- Live monitoring of Cloudwatch logs (we can limit the time range)
- SSH into [[ECS]] without manually copy-paste the command (Make sure [[ECS Exec]] is enabled first)
- Access Lambda functions locally (update, download & trigger)

## Setup
---
**1. Download The AWS Toolkit Extension**
![[aws_explorer_1.png]]

**2. Connect to the your AWS Account** 
![[aws_explorer_2.png]]