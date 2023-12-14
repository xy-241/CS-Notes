---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-08-28T22:25:00+08:00
Last Date: 2023-08-28T22:25:00+08:00
References:
---
>[!abstract] Cache each [[Dockerfile Instruction]] for faster [[Docker Build]]

>[!caution] We can build the app dependencies first, before the main application
>- For example, we can copy & build the ``package.json`` first. Since dependencies usually don't really change
>- If we include the dependencies installation with the main application. We need to re-install the dependencies whenever there is a change to the application
>```Dockerfile
># Example can be found at `Dropbox/NUS/Tools/Docker/Basics/Docker Volume`
>FROM node:18-alpine3.15
>WORKDIR /xy241
>
># Install dependencies first to take advantage of Docker's caching
>COPY package.json .
>RUN npm install 
>
>COPY . .
>EXPOSE 3000
>CMD ["npm", "npm.js"]
>```