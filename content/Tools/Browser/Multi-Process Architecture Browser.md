#browser 
## Abstract
- Isolated [[Process]] for each main functionality
- Modern architecture for [[Browser]]
- Enpowers [[Servicification]] & [[Site Isolation]]


## Benefits ([[Site Isolation]])
### Security and [[sandboxing]]
- Since [[OS]] provide a way to restrict [[Process]]’ privileges, the browser can sandbox certain [[Process]] from certain features
### Durability
- When tab is crashed, the other tabs are still responsive since we can have an individual [[process]] for each tab

## Cons
### Use a lot more [[Main Memory]]
- Unlike [[Thread#^bdc571 | Threads's shared address space]], [[Process]] has their own [[Address Space]], often contain copies of common infrastructure (like [[V8]] which is a Chrome's JavaScript engine) 
 - In order to save memory, Chrome puts a limit on how many processes it can spin up
- The limit varies depending on how much memory and CPU power your device has
- But when Chrome hits the limit, it starts to run **multiple tabs from the same site** in one [[Process]]