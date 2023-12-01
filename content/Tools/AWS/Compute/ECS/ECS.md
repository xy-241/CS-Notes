#aws 




## Terminologies 
### Volume
- 2 types - ``Bind Mounts`` & ``EFS Volumes``
- [[ECS Fargate]] can only use ``EFS Volumes``, ``Bind Mounts`` are local file system volumes mounted directly from the host to the container. But [[ECS Fargate]] is [[Serverless]]