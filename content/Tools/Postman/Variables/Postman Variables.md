#tool
>[!note] 2 types of values
>1. Initial value: shared among teammates (password placeholder for example)
>2. current value: private in our own account (password )

>[!tip] We can set/read/update variables inside scripts (testing scripts etc)
>So we can work with resource we created in one API call inside another API calls without manually copy & paste the resource ID into other API calls for example
>>[!example] Dynamically Setting Variables (Get the ``orderId`` from the response body & set it as value of the global variable ``orderID``)
>>```javascript
>>const response = pm.response.json();
>>const orderId = response.orderId;
>>pm.globals.set("orderId", orderId);
>>```


>[!example]
>- [[Turn base URL into a variable]]
>- [[Path Variables]]