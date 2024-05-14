---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - functional
Creation Date: 2023-09-03T10:45:58+08:00
Last Date: 2024-05-15T00:28:05+08:00
References: 
---
## Abstract
---
- Closure is a [[Function]] **inside a function** that **remembers** and has **access to variables** that are **outside of itself,** even after the **outer function finishes executing**. The code editor below shows a simple example


<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42d7hupj7?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>

>[!question] Where is `inner_func()` when `outer_func()` finishes executing
> The `inner_func()` closure is stored in the [[Address Space#Heap Segment]] when it is created inside `outer_func()`.


>[!question] Since closure depends on external variables, so it isn't pure function?
> Closure is [[Pure Function]] if the external variables it depends on is [[Immutability|immutable]] and it maintains [[Pure Function#Referential Transparency]].