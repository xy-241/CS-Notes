#vault 
1. Run the Terraform codes
2. Initialise
3. >[!note] Initialise the Vault Autopilot
>```bash
>vault operator raft autopilot set-config \
>    -dead-server-last-contact-threshold=10 \
>    -server-stabilization-time=30 \
>    -cleanup-dead-servers=true \
>    -min-quorum=3
>```