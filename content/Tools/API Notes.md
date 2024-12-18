---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - programming
  - networking
Creation Date: 2024-12-17, 16:01
Last Date: 2024-12-17T16:09:41+08:00
References: 
draft: 
description: 
---

## Google API
---
- We can use a **service account** to access Google APIs programmatically. To grant permissions to files for the service account, we can simply add the service account email to the file's sharing settings

>[!tool] Google Sheets API
> To interact with the Google Sheets API, we need to provide the **spreadsheet ID** and the **range**. The range consists of the **sheet name** and the desired cell range. For example, `Sheet1!A1:Z10000` refers to the range of cells from `A1` to `Z10000` in `Sheet1`.


## Confluence API
---
- To retrieve a specific Confluence page, we first need to obtain its **page ID**. The process involves fetching the page's metadata and then using it to retrieve the page content