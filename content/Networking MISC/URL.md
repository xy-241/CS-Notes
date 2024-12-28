---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - js
Creation Date: 2023-10-04T11:22:56+08:00
Last Date: 2024-12-28T14:55:18+08:00
References: 
description: A URL specifies a resource's location and access method via protocols like http. Key parts include Path (resource location), Path Parameters (dynamic segments), Query (customisation via key-value pairs), and Slug (human-readable, simplified resource identifiers).
---
## Abstract
---
![[url.png|400]]

- Stands for **Uniform Resource Locator**
- Specifies the **location** of a resource and **how to access it** using a [[Network Protocol]] such as `http`, `https`, or `ftp`

### URL Path
- Specific part of the [[URL]] that identifies the location of a resource on the server
- For example, in `https://blog.yxy.ninja/resume.pdf`, the URL Path is `/resume.pdf`. Note: This is not the same as a [[#URL Path Parameter]]!

### URL Path Parameter
- Path parameters are **dynamic segments in a URL path** used to identify resources or pass information to the server


>[!code]
> Given `http://localhost:3000/users/123/posts/456`
> - `123` is the value for the path parameter `userId`
> - `456` is the value for the path parameter `postId`
> 
>In **Express.js**, path parameters are accessed through the `req.params` object. For the given URL, `req.params` would look like: `{ userId: '123', postId: '456' }`.

### URL Query
- A **URL Query** allows the [[Host#Client|client]] to **customise the resource** it is trying to obtain from a particular [[#URL Path]]
- The query string is appended **after** the URL path, starting with a `?` and followed by **key-value pairs**

>[!important] Format
> Single query parameter: `?KEY=VALUE`
> 
> Multiple query parameters: `?KEY=VALUE&KEY=VALUE`

>[!code]
> Given `http://localhost:3000/users/123/posts?sort=asc&limit=10`
> - `sort=asc` is a query parameter specifying the sort order
> - `limit=10` is a query parameter specifying the number of results to return
>   
> In **Express.js**, query parameters are accessed through the `req.query` object. For the given URL, `req.query` would look like: `{ sort: 'asc', limit: '10' }`.


### Slug
- A **human-readable**, **simplified** part of a URL used to identify a specific page or resource on a website (The URL Path)
- A normal URL can be something like `https://notes.yxy.ninja/article.php?id=123&title=Interesting%20Facts%20About%20Coding`. A Slug-based URL is something like `https://notes.yxy.ninja/interesting-facts-about-coding`

>[!info]- The Origin of the term Slug
> The origin of the term "slug" in the context of URLs has its roots in the traditional newspaper publishing industry.
> 
> In the days of typesetting and physical layouts, a "slug" was a short, often single-word headline or identifier used to label a story as it moved through the editing and printing process.
> 
> Similar to a newspaper slug briefly summarizing a story, a URL slug acts as a condensed, descriptive identifier for a specific web page. This analogy led to the adoption of the term in web development.
