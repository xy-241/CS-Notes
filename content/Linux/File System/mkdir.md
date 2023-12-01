#linux 
>[!note] ``-p``
>- Tells the "mkdir" command to create parent directories as needed 
>- If you omit this option and the parent directory doesn't exist, you'll get an error

>[!note] ``-m``
>- Used to set the mode (permissions) for the newly created directory
>>[!example] 
>>```bash 
>>mkdir -pm 0755 /etc/vault.d
>>```