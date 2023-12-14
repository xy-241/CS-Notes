---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - aws
Creation Date: 2023-08-15T18:46:33+08:00
Last Date: 2023-08-15T18:46:33+08:00
References:
---

>[!caution] When [[EC2]] is stopped or terminated. ASG will launch new [[EC2]] to fulfil the desired & minimum active [[EC2]]

>[!caution] What cases we will trigger the minimum capacity if the desired capacity is always larger?
>1. **Failures and Recovery**
>	-  Auto Scaling group will replace the failed instances with new instances. If your desired capacity is set to a higher value than the minimum capacity, the Auto Scaling group will ensure that it maintains the minimum capacity by launching new instances to replace the failed ones
>2. **Scale-In Events**
>	- There might be situations where you want to reduce the number of instances below your desired capacity. For example, during maintenance windows or planned downtimes, you might temporarily reduce the number of instances to perform updates or other activities. In these cases, the Auto Scaling group will scale in the number of instances until it reaches the minimum capacity, ensuring that you maintain a certain level of availability even during these events.