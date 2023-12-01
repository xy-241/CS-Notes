#browser 
>[!abstract] User requests a site and the browser prepares to render a page



## Chrome (Starts with [[Browser Process]])
### 1) Handling input
![[browser_navigation_handling_input.png]]
* The [[Browser Process#^5d9f7f | UI Thread]] decides if it is a search query or an [[URL]]

### 2) Start Navigation
![[browser_navigation_start_navigation.png]]
1. [[Browser Process#^5d9f7f | UI Thread]] initiates a network call to get site content. Loading spinner is displayed on the corner of the tab
2. The [[Browser Process#^346e55 | Network Thread]] goes through [[Protocol]] like [[DNS]] && [[HTTP]] to get the site content
3. The [[Browser Process#^346e55 | Network Thread]] may receive [[301 (Permanent Redirect)]]. Then [[Browser Process#^346e55 | Network Thread]] will communicate with [[Browser Process#UI Thread | UI Thread]] for another URL Request

### 3) Read [[HTTP Response]]
![[broser_navigation_read_response.png]]
1. [[Browser Process#^346e55 | Network Thread]] decides what is the [[Content-Type]] of the [[HTTP Response]]
![[browser_navigation_http_response_security_check.png]]
2. 