---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - software_engineering
Creation Date: 2023-07-22T18:39:52+08:00
Last Date: 2024-07-06T01:28:46+08:00
References: 
---
## Abstract
---
- **Decouple** the nitty-gritty **lower level details** from the higher level implementation, achieving **ease of use**

### Control Abstraction
- We focus on results, not the process. Just give us the inputs, and we'll handle the rest.
- [[Function]] is a form of abstraction over computation

### Data Abstraction
- The states/data that is hidden away from us but is used during the processing
- Variable is a form of abstraction over data

### Abstraction Barrier
- **Features and the associated data** are grouped in a container aka module
- Providing an interface for other modules to interactive with

>[!important]
> **Granting full access** to **features and data behind the abstraction barrier** should be reserved for users with a **well-justified reason**. Doing so can lead to a **breach of the abstraction barrier** itself. If a user builds their product using this data directly, it can **make it difficult** for us, the implementers, to **modify the data** without causing **disruptions to the user's product**.

>[!success] Changes made to the modules are limited
> Changes made within the module don't require other modules to get modified, as long as the exposed interface is unchanged.

>[!success] Easier to build on top
> Abstraction allows us to use a set of concepts without the need to know the nitty gritty.

>[!warning] Reduced Flexibility 
> If we want to modify the features protected by the abstraction barrier. We need to get the one who implemented the nitty gritty to help us. This can be helped with [[Code for Change]].




## Programming Abstraction
---
![[layers_of_abstraction_in_programming.png|300]]
- Layer 1. [[Instruction]]
- Layer 2. [[Assembly language]]
- Layer 3. [[C]]
- Layer 4. Even high-level languages like Python