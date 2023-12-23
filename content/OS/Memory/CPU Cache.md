---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - OS
Creation Date: 2023-07-14T20:41:40+08:00
Last Date: 2023-12-20T16:29:25+08:00
References: 
---
## Abstract
---
- A *small-sized* type of volatile computer memory that provides *high-speed data access* to a [[CPU]]



## Terminologies
---
### Cache Line
* Ranging from 32 to 128 [[Computer Data Representation#Byte]]
* When the CPU fetches data into the cache, it brings in entire cache lines rather than individual bytes

### Cache Hit
- When [[CPU Cache]]needed is in [[CPU Cache]]
- Takes about 2 [[Latency Number |clock cycles]]

### Cache Miss
- When the [[CPU]] requests data that is not found in the [[CPU Cache]]
- It requires fetching the data from the slower [[Main Memory]], incurring a higher access time compared to a [[#Cache Hit]]

### Cache Locality
- Also known as *Locality of Reference*
- [[#Cache Line]] is transferred into [[CPU Cache]] when we obtain [[Instruction]] or [[Data]] from [[Main Memory]]
- If we are retrieving the same data or surrounding data. For the [[CPU]], it instead of going to Main Memory to retrieve. We can obtain directly from the [[CPU Cache]] which is much faster