---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
  - security
  - terraform
Creation Date: 2023-09-12T15:34:55+08:00
Last Date: 2024-03-20T13:39:11+08:00
References: 
---
## Abstract
---
- Also known as **Digital Certificate**
- Contains [[Asymmetric Cryptography#Public Key]] that the client can use to perform [[TLS 1.2#Symmetric Key Exchange]]
- Sent with [[Digital Signature]](created by [[#Certificate Authority (CA)]]) which is used to **verify** the digital certificate on the [[Host#Client]] side
- The component that powers [[TLS]]

>[!code]- Show certificate information
> `openssl x509 -in <YOUR_CERTIFICATE_FILE_NAME> -text -noout`


### Self-signed Certificate
- A self-created [[X.509 Certificate]] that isn't signed by anyone else
</br>

- Without a trusted [[Digital Signature]] on the X.509 Certificate, it is prone to **Man-in-the-middle Attack**. Because [[Host#Client]] has no way to check if the X.509 Certificate is modified in the process of receiving the X.509 Certificate from the [[Host#Server]]

>[!code]- Use Terraform to create a self-signed cert with a self-signed CA
> Refer to [[#Certificate Authority (CA)]] to setup the self-signed CA first!
> >[!attention] Not scalable
> >
> > We need to ensure each client trusts the self-signed root CA cert, in order to trust the certs signed by the self-signed root CA Cert. This isn't a scalable solution when the number of clients grow! 
> > 
> > A way to go round this is to use [LetsEncrypt Certificates for the LAN - YouTube](https://youtu.be/Z81jegMCrfk?si=5ndXpSYtXRJZi4Gi). Or if our clients are onboarded to a service like [Microsoft Intune](https://learn.microsoft.com/en-us/mem/intune/fundamentals/what-is-intune#protect-data-on-any-device), we can push down the self-signed root CA automatically, as part of the client's onboarding workflow.
> 
> ```hcl
> # Generate another private key. This one will be used
> # To create the certs for apps running server
> resource "tls_private_key" "file_browser" {
>   algorithm = "RSA"
>   rsa_bits  = 4096
> 
>   provisioner "local-exec" {
>     command = "echo '${tls_private_key.file_browser.private_key_pem}' > ./file_browser-private_key.pem"
>   }
> }
> 
> resource "tls_cert_request" "file_browser" {
>   private_key_pem = tls_private_key.file_browser.private_key_pem
> 
>   subject {
>     common_name = "file_browser"
>   }
> 
>   dns_names = [
>     "localhost"
>   ]
> 
>   ip_addresses = [
>     "127.0.0.1"
>   ]
> }
> 
> resource "tls_locally_signed_cert" "file_browser" {                   // Self signed cert for server
>   cert_request_pem   = tls_cert_request.file_browser.cert_request_pem // cert request
>   ca_private_key_pem = tls_private_key.ca.private_key_pem             // ca private key
>   ca_cert_pem        = tls_self_signed_cert.ca.cert_pem               // ca cert pem
> 
>   validity_period_hours = 721 # 30 days
> 
>   allowed_uses = [
>     "client_auth",
>     "digital_signature",
>     "key_agreement",
>     "key_encipherment",
>     "server_auth",
>   ]
> 
>   provisioner "local-exec" {
>     command = "echo '${tls_locally_signed_cert.file_browser.cert_pem}' > ./file_browser-crt.pem"
>   }
> }
> ```


## Certificate Authority (CA)
---
- The entity that is trusted by the [[Host#Client]]. CA signs the [[X.509 Certificate]] of  [[Host#Server]] with its [[Asymmetric Cryptography#Private Key]], the signature is known as [[Digital Signature]]
- Server will always to send the digital signature with its X.509 Certificate to client, so client can valid the digital signature with the public key of the Certificate Authority(CA) it trusts. The validation will fail if the X.509 Certificate is manipulated by hackers


>[!code]- Use Terraform to create a self-signed root CA Cert
>
> ```hcl
> # Generate a private key so you can create a CA cert with it.
> resource "tls_private_key" "ca" {
>   algorithm   = "ECDSA"
>   ecdsa_curve = "P521"
> }
> 
> # Create a CA cert with the private key you just generated.
> resource "tls_self_signed_cert" "ca" {
>   private_key_pem = tls_private_key.ca.private_key_pem
> 
>   subject {
>     common_name = "ca.yxy.ninja"
>   }
> 
>   validity_period_hours = 720 # 30 days
> 
>   allowed_uses = [
>     "cert_signing",
>     "crl_signing",
>   ]
> 
>   is_ca_certificate = true
> 
>   provisioner "local-exec" {
>     command = "echo '${tls_self_signed_cert.ca.cert_pem}' > ./yxy-ninja-ca-crt.pem"
>   }
> }
> ```


>[!code]- Show certificate info for a certificate signing request
> `openssl req -text -noout -in <YOUR_CERTIFICATE_SIGNING_REQUEST_FILE_NAME>`

### Trust Self-signed CA
**MacOS**
- Drag and drop the CA cert into **Keychain Access** under **System Keychain**
- Set the trust setting of the cert to **Always Trust**

**IPhone**
- Upload the CA cert to **Files**
- Open the CA cert to install the CA cert
- Verify the CA cert under **VPN & Device Management**
- Enable full trust for the CA cert under **Certificate Trust Settings**


**Android**
- Double click to install and trust the CA Cert


## References
---
- [Certificates from Scratch - X.509 Certificates explained - YouTube](https://youtu.be/kAaIYRJoJkc?si=wAQ-Ddb1k1W811Fa)
- [Server Certificates - Self Signed and LetsEncrypt Certificates for the LAN - YouTube](https://youtu.be/Z81jegMCrfk?si=s98O_Vv9oFQha_4h)