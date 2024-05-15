---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - functional
Creation Date: 2023-09-03T10:45:58+08:00
Last Date: 2024-05-15T19:25:09+08:00
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

>[!question] Where is `inner_func` when `outer_func()` finishes executing?
> The `inner_func` closure is stored in the [[Address Space#Heap Segment]] when it is created inside `outer_func()`. This also means that closure takes up [[Main Memory]] resources!!!


>[!question] Since closure depends on external variables, so it isn't pure function?
> Closure is [[Pure Function]] if the external variables it depends on is [[Immutability|immutable]] and it maintains [[Pure Function#Referential Transparency]].


## Data Encapsulation with Closure
---
- Data encapsulation with closure means **creating private variables** **within a function scope** that **cannot be accessed directly** from the **outside**. These private variables can **only be accessed** and **modified** through the **functions defined within the same scope**
- In the code example below, `createBankAccount()` is the **function scope**, `balance` is the **private variable**. `deposit()`, `withdraw()` & `getBalance()` are **functions defined within the same scope**. We are **unable to access** `balance` directly from outside of the `createBankAccount` as shown with `console.log(myAccount.balance);` at the last line of the program. We can only access it with `deposit()`, `withdraw()` & `getBalance()`


<div class="onecompilerCode-wrapper">
<iframe
 class="onecompilerCode"
 frameBorder="0" 
 src="https://onecompiler.com/embed/java/42d9xhjgm?codeChangeEvent=true&theme=dark&hideLanguageSelection=true&hideNew=true&hideNewFileOption=true&availableLanguages=true&hideTitle=true&hideStdin=true" 
 ></iframe>
 </div>
 

>[!success] Better codes!
> Data Encapsulation with Closure **prevents exposing important data** when it isn't needed, accessing and modifying important data can only be done **via a set functions** which can **enforce some checks**!

## References
---
- [Programming Terms: Closures - How to Use Them and Why They Are Useful - YouTube](https://www.youtube.com/watch?v=swU3c34d2NQ)
- [Closures Explained in 100 Seconds](https://www.youtube.com/watch?v=vKJpN5FAeF4 "https://www.youtube.com/watch?v=vKJpN5FAeF4")