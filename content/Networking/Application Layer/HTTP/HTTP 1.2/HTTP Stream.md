#networking 
>[!abstract] An [[Abstraction]] of [[HTTP Request]]/[[HTTP Response]] into [[HTTP Frame]]


>[!success] Each stream(a pair of [[HTTP Request]]/[[HTTP Response]]) doesn’t need to be sent in order in the same [[TCP Connection]], [[HTTP Response]] be received in a different order of sending the [[HTTP Request]]
>- Achieved with [[HTTP Stream]] ID (流标示符) in the [[HTTP Frame]]
>

