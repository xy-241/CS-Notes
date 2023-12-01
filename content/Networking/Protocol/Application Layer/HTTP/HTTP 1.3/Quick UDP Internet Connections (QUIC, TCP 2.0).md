#networking 
>[!abstract] Think of QUIC as being similar to [[TCP]]+[[TLS]]+[[HTTP 1.2]] implemented on [[UDP]] (Like [[TCP]] 2.0)
>![[quic_comparsion.png]]
>>[!success] Solve [[TCP Head-of-Line Blocking]] with [[QUIC Stream]]
>
>
>>[!info] We can't change [[TCP]] like how we change [[HTTP]] to solve the [[TCP Head-of-Line Blocking]] issue, because changing [[TCP]] requires changes made to all the [[OS]] [[Kernel]] which is much harder than changing browser 

>[!note]  Integrating [[TCP Handshake]] with [[TLS Handshake]] into [[QUIC Handshake]]
>![[http1.3_tcp_tls_integration.png]]

>[!caution] Built on top of [[UDP]] but the mechanism is based on [[TCP]]

