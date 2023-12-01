#vault 
>[!note] Command to start container in the [[Docker Host Network]]
>```bash
>sudo docker run --cap-add=IPC_LOCK  -d -v /home/ubuntu/vault.hcl:/vault/config/vault.hcl --network host hashicorp/vault server
>```