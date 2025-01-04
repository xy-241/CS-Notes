---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - java
  - programming
  - binance
Creation Date: 2025-01-04, 13:42
Last Date: 2025-01-04T13:42:46+08:00
References: 
draft: 
description:
---
## Extracting HTML Content with Retained Line Break Formatting for Text Conversion
---
>[!important]
> We don’t want to extract the content as a single string because this would result in losing all the formatting information provided by the HTML tags. Reformatting the content based on the document structure afterward is tedious, error-prone, and not scalable. 
> 
> Instead, the idea is to retain the formatting information we need before removing all the HTML tags. Then, we can use this retained formatting information to generate a text file with the desired formatting.


```java title="Java"
// Generate a placeholder string using UUID to avoid conflicts with the HTML content
String uniquePlaceholder = UUID.randomUUID().toString();

// This step retains line break information, which we will later replace with actual line breaks (\n)
String htmlContent = rawHtml.replace("<br />", "<span>" + uniquePlaceholder + "</span>");

// Parse the modified HTML content using Jsoup to extract plain text
// Replace the placeholder with actual line breaks (\n) to simulate the original formatting
String txtContent = Jsoup.parse(htmlContent).text().replace(uniquePlaceholder, "\n");

// Create a FileWriter to write the plain text content to a file
FileWriter writer = new FileWriter("output.txt");

// Write the plain text content into the file
writer.write(txtContent);

writer.close();

```

>[!code]
> This above code example assumes that `<br />` is the only tag used to denote line breaks in the given HTML string. If other tags or methods are used for formatting, additional handling may be required.
> 
>  Also note that, The `FileWriter writer` formats and writes the content into a text file, ensuring that line breaks are correctly represented using `\n`.