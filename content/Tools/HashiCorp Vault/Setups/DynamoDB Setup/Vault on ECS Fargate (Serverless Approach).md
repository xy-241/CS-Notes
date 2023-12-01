#vault 
>[!abstract] This deployment approach has the same set of cloud infrastructure except the compute component is changed from [[EC2]] to [[Elastic Container Service (ECS) Fargate]]
>- Since the compute component is stateless and we are able to get the HashiCorp Vault container working on the EC2, we could potentially leverage the Elastic Container Service (ECS) Fargate option to reduce infrastructure costs and minimize the operational overhead of managing the Docker container and EC2 instances

>[!caution] This approach is still under early research and testing stage

## Potential security risk with this approach
>[!info] Swap
>- The modern operating system has virtual memory, which allows us to use some disk space as if it were part of the RAM. By doing so, we are able to allocate more RAM for processes. The disk space used as part of the RAM is known as **swap**

>[!info] Memory Locking in Vault's context
>- The ability to prevent a vault's data from being stored as swap
>- Vault has built-in logic to lock memory, but it requires permissions from the operating system to have the capability to lock memory

>[!success] Benefit of memory locking in Vault's context
>- To prevent sensitive values from being swapped to disk

>[!caution] Fargate doesn't have the configuration option to allow the container to have permission to lock memory
>![[ecs doesn't support IPC_LOCK.png]]
>- This isn't an concern if the swap is encrypted or we can disable swap (still under research & testing)


## Custom Dockerfile for better flexibility
>[!note] Why don't we just use the official Vault image?
>- The official Vault image still requires manual configuration to function. Unlike EC2, where we can SSH in and configure, ECS Fargate is serverless. Thus, the manual configuration aspect is quite complex and hard to debug. However, we can achieve greater flexibility by fine-tuning the Dockerfile and incorporating helper scripts into the Docker image
