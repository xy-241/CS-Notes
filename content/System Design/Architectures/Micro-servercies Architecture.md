---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - system_design
Creation Date: 2023-11-02T16:45:00
Last Date: 2023-12-14T18:16:44+08:00
References:
---
## Abstract
---
- A [[Distributed Systems]] Architecture, an *Organization De-Coupling Strategy*
- Should be [[#Small]], [[#Focused on One Task]], [[#Aligned with a Bounded Context]], [[#Autonomy]], [[#Independently Deployable]] and [[#Loosely Coupled]]
- The real value is build, test & deploy *Services* independently of other *Services*
- - Isn't [[Service Based Design]]



## Terminologies 
---
### Small
- Each service can be written in one or two weeks
### Focused on One Task
- Separation of Concerns in the Problem Domain
- Accomplishes one task when viewed from outside
### Aligned with a Bounded Context
- A *Bounded Context* is a defined part of software where particular terms, definitions and rules apply in a consistent way
- Each service follows natural 'Fire-Breaks' in the Problem Domain
### Autonomy
- We can change implementation without coordinating with others
- The real value provided by *micro-services*
### Independently Deployable
- An important aspect of [[#Autonomy]]
- Teams that can decide when to deploy are significantly more effective
### Loosely Coupled
- The interface to *Micro-service* is a Public API
- It should be changed only with Great Care
- When consuming the API, use minimum data that you can to reduce coupling
- We can use *versioning* to support backward compatibility 