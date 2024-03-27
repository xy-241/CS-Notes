---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - js
Creation Date: 2023-10-04T11:22:56+08:00
Last Date: 2024-03-26T01:11:35+08:00
References: 
---
## Abstract
---
![[url.png|400]]

- Stands for **Uniform Resource Locator**

### URL Path
- The exact place to find the resource 
- Given `blog.yxy.ninja/resume.pdf`, the URL Path is `resume.pdf`, it is also known as **Path Parameter**
- In Express.js, path parameters are accessed through `req.params`

### URL Query
- A way for [[Host#Client]] to customise the resources it is trying to obtain from a particular [[#URL Path]]. Thus URL Query should be placed after all URL Path
- Key-value pair
	- Single URL Query:  `?KEY=VALUE`
	- Multiple URL Query: `?KEY=VALUE&KEY=VALUE`
- In Express.js, query parameters are accessed through `req.query`

### Slug
- A **human-readable**, **simplified** part of a URL used to identify a specific page or resource on a website (The URL Path)
- A normal URL can be something like `https://notes.yxy.ninja/article.php?id=123&title=Interesting%20Facts%20About%20Coding`. A Slug-based URL is something like `https://notes.yxy.ninja/interesting-facts-about-coding`

>[!info]- The Origin of the term Slug
> The origin of the term "slug" in the context of URLs has its roots in the traditional newspaper publishing industry.
> 
> In the days of typesetting and physical layouts, a "slug" was a short, often single-word headline or identifier used to label a story as it moved through the editing and printing process.
> 
> Similar to a newspaper slug briefly summarizing a story, a URL slug acts as a condensed, descriptive identifier for a specific web page. This analogy led to the adoption of the term in web development.
