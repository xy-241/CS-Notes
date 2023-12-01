#networking 
##abstract
![[symmetric_key_exchange.png]]
- [[Clients]] uses [[Public Key]] in [[TLS Certificate]] to encrypt the [[Symmetric Key]]
- [[servers]] use its [[Private Key]] to decrypt [[Symmetric Key]]
- Now both [[Clients]] & [[servers]] can communicate with each other over [[Network]] with data encrypt in-transit with the help of the [[Symmetric Key]]

>[!note] In this case, the [[Symmetric Key]] also known as [[Session Key]]