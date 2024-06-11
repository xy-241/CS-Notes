---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - wechat
Creation Date: 2024-06-09, 13:48
Last Date: 2024-06-11T18:58:55+08:00
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

## WeChat 5s Timeout
---
- WeChat expects a response in `5s` or it will timeout, and retries 3 times
- One way to handle it is to send a response before timeout, asking WeChat user to try again later, more details can be found [here](https://juejin.cn/post/7217714396591652923)
- Another way to handle it is to use [message push](https://developer.work.weixin.qq.com/document/path/94700), so first send a response telling the user to wait patiently before the `5s` timeout, then uses message push to push down the desired response to the user, more information on message push can be found [here](https://blog.csdn.net/qq_41214969/article/details/127301653)


## References 
---
- [微信公众号 原样返回echostr 仍然验证失败的坑](https://blog.csdn.net/newhand110/article/details/121520328)

