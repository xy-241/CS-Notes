#OS 
[YouTube Reference](https://youtu.be/2quKyPnUShQ?si=1jc9zDESuSoje2XC)
## Abstract
- An abstraction that powers [[Address Space]] a [[Process]] use
- Address Space decoupled from the physical Main Memory
- Each [[Process]] thinks it is the only one running inside the [[Main Memory]]
- Mapping handled by [[Memory Management Unit (MMU)]]

## C Implementation
- [How to make memory read-only](https://youtu.be/AYSISa95oJE?si=3FJPQoTuLC5MHei8)

## Benefits
- Avoid [[Memory Fragmentation]] - the [[Address Space]] can be broken down into sizes to fit inside fragmented [[Main Memory]]. The [[#Virtual Address]] ensures a continuous memory block presented to [[Process]]
- Isolated [[Address Space]] 
- Used when a [[Process]] has more [[Address Space]] than [[Main Memory]] by placing them on [[disk]] and using main memory as a kind of [[Cache]] for most heavily executed parts -> but this can lead to [[Page Faults]]


## Terminologies
### Logical Address


