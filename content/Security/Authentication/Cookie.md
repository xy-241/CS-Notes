#security 
## Abstract
- Small pieces of data stored on the client-side (typically in the user's web browser) and are associated with a specific website or domain
- When a user makes an [[HTTP Request]] to a server, the server may include a `Set-Cookie` header in the response to instruct the client to store a cookie
- This cookie is then sent back to the server with subsequent requests to that same domain. However, cookies are only sent to the server if they are associated with the domain of the server being accessed.