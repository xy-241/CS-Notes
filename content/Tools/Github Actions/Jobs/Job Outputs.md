---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - cicd_tools
Creation Date: 2023-12-09T19:44:57+08:00
Last Date: 2023-12-09T19:44:57+08:00
References:
---
>[!note]
>Share simple values among jobs

>[!note] Achieved with
>- ``outputs`` keyword
>- [[Github Action Environment Variables]]
>- [[Github Action Contexts]]

>[!example] Syntax
>```bash
>echo '{OUTPUT_NAME}={OUTPUT_VALUE}' >> $GITHUB_OUTPUT
>```

>[!example]
>- Filename

>[!note] Reference
>[Github Output Official Docs](https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs)