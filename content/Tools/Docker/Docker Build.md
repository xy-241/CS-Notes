---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-12-07, 16:09
Last Date: 2024-03-06T15:02:23+08:00
References: 
aliases:
  - ../../Tools/Docker/Docker-Build-Cache
---
## Abstract
---
- Convert [[Dockerfile]] to [[Docker Container]]
- The docker command starts with `docker build`

>[!caution] `--build-arg`
> Allows us to pass dynamic values to [[Docker#Docker Engine]] for the **building process**. Not Environment Variable, that is set with  [[Dockerfile#ENV]]!
> 
> Great for **frontend build** which only needs inputs at **container build stage**, not when container is running

## Docker Build Cache
---
- Each instructions inside [[Dockerfile]] is cached for faster [[Docker Build]]

>[!tip] Build app dependencies before app
> For example, we can copy & build the ``package.json`` first. Since dependencies usually don't really change. If we include the dependencies installation with the main application. We need to re-install the dependencies whenever there is a change to the application
> 
> ```dockerfile
> FROM node:18-alpine3.15
> WORKDIR /xy241
>
> # Install dependencies first to take advantage of Docker's caching
> COPY package.json .
> RUN npm install 
>
> COPY . .
> EXPOSE 3000
> CMD ["npm", "npm.js"]
> ```