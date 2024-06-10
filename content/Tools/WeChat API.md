---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - wechat
Creation Date: 2024-06-09, 13:48
Last Date: 2024-06-09T14:08:58+08:00
References: 
draft: 
description:
---

## Abstract
---
- This note documents some of the common hiccups of using WeChat API

>[!important] Common terminologies 
> **WeChat Offical Account** is **微信公众号**.


## WeChat Official Account API Verification
---
- When your account verifies the signature sent from the WeChat API server, you need to return the `echostr` value. Make sure the return value has a [[Datatype]] of **integer**, or the verification will fail!


## References 
---
- [微信公众号 原样返回echostr 仍然验证失败的坑](https://blog.csdn.net/newhand110/article/details/121520328)

