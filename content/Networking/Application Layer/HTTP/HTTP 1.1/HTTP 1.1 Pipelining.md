#networking 
>[!abstract] Allows send multiple [[HTTP Request]] in a single [[TCP Connection]], so one failed [[HTTP Request]] cant block other [[HTTP Response]]


>[!caution] [[HTTP Response]] must be received in the order of sending the [[HTTP Request]]. This is a problem, because we may lose the 1st [[HTTP Request]], then the second [[HTTP Response]] becomes the 1st [[HTTP Request]]
>![[http_pipelining.png]]