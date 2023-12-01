#dsa 

>[!abstract] 
>- 'Connect' the start and end of the [[Array]] to form a loop by taking the remainder of ``frontIndex % arrayCapacity``, so the space before the start index can be reused
>- Take a look at [Visual](https://www.hello-algo.com/chapter_stack_and_queue/queue/#2) for better understanding

>[!note] Front Index
>- A variable to keep track the index for the start of the circular array

>[!note] Rear Index
>- A variable to keep track the index of the slot after the last element of the circular array
>- Can be obtained with ``frontIndex + arraySize``

>[!example] Use to implement
>1. [[Queue (FIFO)#Implementation| Queue]]