---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2024-10-16, 01:21
Last Date: 2024-10-18T22:25:20+08:00
References: 
draft: 
description: 
---

>[!important]
> A combination of [[#Rolling Deployment]], [[#Canary Deployment]], and [[#Feature Toggle]], along with good database design practices, helps maintain high [[System Design#Availability (可用性)|service availability]].
> 
> Use GitOps to manage deployments and Flagger (which can run automated checks) for Kubernetes deployments. Flagger runs checks and automates blue-green deployments.

## Big Bang Deployment
---
- Pushing all changes at once causes downtime because we need to shut down the old system and turn on the new one. This can lead to significant downtime if the new system fails to start. If things go wrong, we need to roll back

>[!important]
> This is the only option when an intricate database upgrade is involved.


>[!question] In what cases is this approach useful?
> - Development environment
> - Crash loop due to a bug in the code
> - Limited resources
## Rolling Deployment
---
- Incrementally upgrade the system over time

 
>[!important]
> Prevent downtime: While deploying to one server, others continue to serve. 
> 
> We can spot and mitigate issues early during the rollout since only a small portion of the system is exposed at any one time.
> 
> This is a popular choice as it balances risk and user impact.

>[!caution]
> - Slow process
> 
> - Reduces system-wide issues but doesn't entirely eliminate them. If an issue slips past the initial checks, it may still propagate as more servers are updated.
>
> - Doesn't support targeted rollouts. We can't control which users receive the new version during the rollout. All users gradually experience the new version as the servers are updated. There is no ability to direct the new version to specific users based on location, device type, etc., so A/B testing is not possible.
>
> - Overloads other instances since a subset of compute resources is taken down to roll out the new changes.
## Blue-Green Deployment
---
- We maintain two identical production systems. Blue serves the current live app, while Green is used to safely deploy and test the new app by the QA team. Once Green is ready, we simply switch the load balancer with **zero downtime**
- Blue now acts as a safety net, allowing us to quickly switch back if Green encounters any issues.

>[!success] High safety
> High level of control and minimized risk, providing a smooth user experience and reliable rollbacks.

>[!caution]
> We can't direct a specific set of users to the new deployment, so no A/B testing is possible.
> 
> Resource-intensive: doubles the infrastructure and costs.
> 
> Data consistency challenges with databases and third-party services.
## Canary Deployment
---
- We deploy a new version to a small set of targeted users, based on factors like geography, device type, etc., allowing us to monitor the performance of the new version under real-world conditions but at a smaller scale. If it performs well, we gradually roll it out to a larger audience.

>[!important]
> Targeted rollouts can enable A/B testing.

>[!important]
> This is usually not a standalone approach but is often combined with [[#Rolling Deployment|rolling deployments]] to leverage the benefits of both methods.

>[!caution]
> Careful monitoring and automated testing of live user activity are crucial to safely increase the rollout percentage, especially when managing database schema changes or API compatibility issues.
## Feature Toggle
---
- Not deploying a new version of the app, but managing new features of an application
- We can turn new features on or off in the current deployment, and we can decide who has access to them
- Typically used alongside other deployment strategies mentioned above, this approach enables effective **A/B testing** for each feature

>[!example]
> When used with [[#Canary Deployment|canary deployment]], we can enable new features only for the canary users.


>[!caution]
> This can add complexity to the codebase and make unit testing more difficult. Obsolete toggles need to be cleaned up to avoid toggle debt.
## References
---
- [Top 5 Most-Used Deployment Strategies - YouTube](https://youtu.be/AWVTKBUnoIg?si=NtjzEeQPjbK1v4Ck)
- [Most Common Kubernetes Deployment Strategies (Examples & Code) - YouTube](https://youtu.be/lxc4EXZOOvE?si=lHcv_4OpUH-VC32z)