---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - js
Creation Date: 2024-01-05, 19:42
Last Date: 2024-01-08T01:46:58+08:00
References: 
draft: 
---
## Abstract
---
- Just a list of weird syntax I faced when I was playing with JS

## Logic
---
- `!undefined` is `true`, but `undefined` isn't rended as `false`
```js
if (undefined == false) {
	console.log("undefined == false")
} else console.log("undefined != false")

if (!undefined == true) {
	console.log("!undefined == true")
} else console.log("!undefined != true")
```
- Same applied to `null`
```js
if (null == false) {
	console.log("null == false")
} else console.log("null != false")

if (!null == true) {
	console.log("!null == true")
} else console.log("!null != true")
```
- `null` vs `undefined`
	- `null` is often used explicitly to indicate this absence
	- `undefined` is usually a default state for variables that have not been assigned a value