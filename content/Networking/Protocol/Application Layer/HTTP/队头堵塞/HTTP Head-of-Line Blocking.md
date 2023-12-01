#networking 
>[!example] [[HTTP 1.1]] on a single [[TCP Connection]]
>![[http1.1_HOL_blocking.png]]
>- The above diagram shows when we aren't able to receive the CSS file. We aren't able to request for the JS file. Thus, the CSS file is blocking other files in the queue from be requested & received
>>[!tip] A few ways to handle it on the software development side
>>1. Having different domains serving different [[Object]], the browser will have a different [[TCP Connection]] with each domain. Thus, if one [[HTTP Request]] failed, it doesn't block browser from retrieving [[Object]] from other domains 
>>2. Technologies like [[Webpack]]to consolidate many [[Object]] into a few [[Object]]
>
>>[!success] Solved by [[HTTP 1.2 Multiplexing (多路复用)]] on a Networking level