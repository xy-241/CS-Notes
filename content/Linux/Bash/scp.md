#bash
>[!example] Transfer a file to another server with [[SSH Key Pair]]
>```bash
>scp -i <SSH_KEY_PAIR> <FILE>  <SERVER_HOSTNAME>@<SERVER_IP>:<DESTINATION_PATH>
>```