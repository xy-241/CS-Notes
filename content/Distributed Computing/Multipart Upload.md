---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - OS
  - system_design
  - distributed_computing
Creation Date: 2025-01-29, 16:25
Last Date: 2025-01-29T17:44:42+08:00
References: 
draft: 
description: "Multipart upload increases throughput by uploading in parallel but requires more operations. Part size impacts cost: too small increases API calls, too large raises retry costs. Multipart download splits files, using separate threads for efficiency."
---
## Abstract
---
- At a high level, multipart upload allows us to **upload in parallel**, **increasing overall throughput**. However, it **incurs more operations** since we need to use `CreateMultipartUpload`, `UploadPart`, and `CompleteMultipartUpload` instead of `PutObject` in the case of S3

>[!important] Size of each part is important for cost savings
> if it's **too small**, **more API calls** are needed to initiate the upload.
> 
> If it's **too large**, retries become **more expensive** if the upload fails and may lead to **higher data usage**.




## multipart download
---
```http
GET /my-bucket/my-large-file HTTP/1.1  
Host: s3.amazonaws.com  
Range: bytes=0-999999  
```

- The above retrieves the first **1,000,000 bytes of the file**
- Multipart download can be achieved by **issuing multiple requests**, each using a [[Thread|separate thread]] with a **different byte range**, and **merge the parts after downloading**


