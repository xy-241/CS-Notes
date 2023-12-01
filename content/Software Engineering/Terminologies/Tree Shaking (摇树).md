---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-11-15T11:10:00
Last Date: 
References:
---
## Abstract
>[!sidenote]
>- 你可以把你的应用想象成一棵树。您实际使用的源代码和库代表了树的绿色、有生命的叶子。死代码代表秋天消耗的树的棕色枯叶。为了摆脱枯叶，你必须摇晃树，让它们倒下。
- 指在打包过程中删除未使用的代码的技术。这种技术通常用于 [[Node.js#Module]]
- 树震动通常通过分析模块的依赖关系来实现。例如，如果一个模块导出了一个函数，但从未在其他模块中使用过，那么该函数就可以被删除。


## Benefits
### Reduced Package Size
- 这可以使应用程序的加载速度更快，并减少内存使用量
