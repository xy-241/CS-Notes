---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - NodeJS
Creation Date: 2023-11-12T18:42:00
Last Date: 2023-12-12T21:28:56+08:00
References: 
---
## Abstract
---
- Not a [[Programming Language]] or [[Host#Server]]
- Is a [[#JavaScript Runtime Environment]]



## Terminologies
---
### JavaScript Runtime Environment
- A environment to run Javascript, independent of [[Browser]]
### Module
- Basically *JavaScript Module*
- The methods to be explicitly exposed, there are mainly 3 ways
	1) `module.exports.<METHOD_NAME> = <METHOD_NAME>`
	2) `exports.<METHOD_NAME> = <METHOD_NAME>` (Syntactic Sugar)
	3) `exports.<METHOD_NAME> = <FUNCTION_DEFINITION>`
### CommonJS
- Use the keyword `const {...} = require()`
- Loads the entire [[#Module]]
### ES modules
- Use the keyword `import {...} from ...`
- Loads only the parts of a [[#Module]] that are needed with the help of [[Tree Shaking (摇树)]]