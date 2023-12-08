#cicd_tools 
>[!note]
>Share simple values among jobs

>[!note] Achieved with
>- ``outputs`` keyword
>- [[Github Action Environment Variables]]
>- [[Github Action Contexts]]

>[!example] Syntax
>```bash
>echo '{OUTPUT_NAME}={OUTPUT_VALUE}' >> $GITHUB_OUTPUT
>```

>[!example]
>- Filename

>[!note] Reference
>[Github Output Official Docs](https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs)