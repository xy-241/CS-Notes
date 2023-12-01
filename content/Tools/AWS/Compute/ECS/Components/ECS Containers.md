#aws 
>[!tip] SSH use [[ECS Exec]]

>[!note] Obtain Private IP of the container (must have [[curl]] && [[jq (JSON Processor)]])
>```bash
>containerPrivateIP=$(curl $ECS_CONTAINER_METADATA_URI | jq -r '.Networks[0].IPv4Addresses[0]') >/dev/null 2>&1
>```
