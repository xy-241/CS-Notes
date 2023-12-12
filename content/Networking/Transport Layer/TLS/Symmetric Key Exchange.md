#networking 
##abstract
![[symmetric_key_exchange.png]]
- [[Host]] uses [[Public Key]] in [[TLS Certificate]] to encrypt the [[Symmetric Key]]
- [[Host]] use its [[Private Key]] to decrypt [[Symmetric Key]]
- Now both [[Host]] & [[Host]] can communicate with each other over [[Network]] with data encrypt in-transit with the help of the [[Symmetric Key]]

>[!note] In this case, the [[Symmetric Key]] also known as [[Session Key]]