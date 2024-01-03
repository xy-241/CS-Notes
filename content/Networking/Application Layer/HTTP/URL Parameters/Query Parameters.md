---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-07-30T18:33:24+08:00
Last Date: 2023-07-30T18:33:24+08:00
References:
---
>[!note] Syntax
>## Single parameter
>``?KEY=VALUE``
>## Multiple parameters
>``?KEY=VALUE&KEY=VALUE``


>[!caution] Misspelled key
>- API will **ignore the parameters**, and process the URL without it -> this may lead to unexpected response
>- Case-sensitive 

>[!caution] Should be placed after all the [[Path Variables]]

>[!note] Compared to [[Path Variables]]
>- Key-value pair
>- Mandatory or Optional