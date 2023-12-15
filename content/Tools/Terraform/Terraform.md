---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - terraform
Creation Date: 2023-09-30T19:23:19+08:00
Last Date: 2023-12-14T17:27:12+08:00
References: 
---
>[Terraform Installation](https://developer.hashicorp.com/terraform/downloads?product_intent=terraform)


## Injecting values into file dynamically 
---
- [[User Data]] example
>![[userdata.tpl.png]]
>![[preparing_dynamic_file.png]]
>![[substitute_values_dynamically.png]]

## Dependencies
---
- When some resources need to use other resources' info. We can use `-target` to create the dependencies resources first. Example (RAiD Vault), we need to have private subnets, before creating the [[Layer 4 Load Balancer]] attachement
```bash
terraform apply -target=module.networking.aws_subnet.vault_private -target=module.networking.aws_vpc.main --auto-approve && terraform apply --auto-approve
```

## Create a [[Self-signed Certificate]]
---
```hcl
# Generate a private key so you can create a CA cert with it.
resource "tls_private_key" "ca" {
  algorithm = "RSA"
  rsa_bits  = 2048
}

# Create a CA cert with the private key you just generated.
resource "tls_self_signed_cert" "ca" {
  private_key_pem = tls_private_key.ca.private_key_pem

  subject {
    common_name = "ca.vault.server.com"
  }

  validity_period_hours = 720 # 30 days

  allowed_uses = [
    "cert_signing",
    "crl_signing",
  ]

  is_ca_certificate = true

  #  provisioner "local-exec" {
  #    command = "echo '${tls_self_signed_cert.ca.cert_pem}' > ./vault-ca.pem"
  #  }
}

# Generate another private key. This one will be used
# To create the certs on your Vault nodes
resource "tls_private_key" "server" {
  algorithm = "RSA"
  rsa_bits  = 2048

  #  provisioner "local-exec" {
  #    command = "echo '${tls_private_key.server.private_key_pem}' > ./vault-key.pem"
  #  }
}

resource "tls_cert_request" "server" {
  private_key_pem = tls_private_key.server.private_key_pem

  subject {
    common_name = "vault.server.com"
  }

  dns_names = [
    # var.shared_san,
    "localhost",
  ]

  ip_addresses = [
    "127.0.0.1",
  ]
}

resource "tls_locally_signed_cert" "server" {
  cert_request_pem   = tls_cert_request.server.cert_request_pem
  ca_private_key_pem = tls_private_key.ca.private_key_pem
  ca_cert_pem        = tls_self_signed_cert.ca.cert_pem

  validity_period_hours = 720 # 30 days

  allowed_uses = [
    "client_auth",
    "digital_signature",
    "key_agreement",
    "key_encipherment",
    "server_auth",
  ]

  #  provisioner "local-exec" {
  #    command = "echo '${tls_locally_signed_cert.server.cert_pem}' > ./vault-crt.pem"
  #  }
}

locals {
  tls_data = {
    vault_ca   = base64encode(tls_self_signed_cert.ca.cert_pem)
    vault_cert = base64encode(tls_locally_signed_cert.server.cert_pem)
    vault_pk   = base64encode(tls_private_key.server.private_key_pem)
  }
}

locals {
  secret = jsonencode(local.tls_data)
}

resource "aws_acm_certificate" "vault" {
  private_key       = tls_private_key.server.private_key_pem
  certificate_body  = tls_locally_signed_cert.server.cert_pem
  certificate_chain = tls_self_signed_cert.ca.cert_pem
}
```