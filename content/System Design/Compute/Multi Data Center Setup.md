---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2024-01-01, 23:05
Last Date: 2024-01-01T23:45:58+08:00
References: 
draft: 
---
## Abstract
---
<img src="https://proxy-prod.omnivore-image-cache.app/0x0,sZnq-rEF6wLeSezJawOGOJBmSh1vQzgGFD8SXsnSK5wM/https://bytebytego.com/_next/image?url=%2Fimages%2Fcourses%2Fsystem-design-interview%2Fscale-from-zero-to-millions-of-users%2Ffigure-1-15-GICUI26J.png&w=1200&q=75" width=500 \>

- System workload is shared by different data centers to stay [[System Design#Availability (可用性)]] and [[System Design#Fault Tolerance (容错性)]]

## Things to Note
---
### Traffic Redirection
- Effective tools are needed to direct traffic to the correct data center
- [[DNS#geoDNS]] can be used to direct traffic to the nearest data center depending on where a user is located

### Data Synchronization
 - Users from different regions could use different local [[Database]] or [[Cache Server]]
 - In failover cases, traffic might be routed to a data center where data is unavailable
 - A common strategy is to replicate data across multiple data centers. Like the asynchronous multi-data center replication by Netflix

### Test and Deployment
- Automated deployment tools like [[Terraform]] are vital to keep services consistent through all the data centers