---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - docker
Creation Date: 2023-08-28T22:34:00
Last Date: 2024-10-15T23:09:01+08:00
References: 
---
## Abstract
---
- Set of steps for [[Docker]] to build [[Docker Container]]

>[!important]
> We can use a `.dockerignore` file to exclude files from being copied into a Docker image. It's best practice to copy over the dependency files and install dependencies before copying the application files to take advantage of layer caching.

## Keyword at Runtime
---
- Keywords that have an effect when [[Docker Container]] is running
### ENV
- Set the Environment Variable in the Docker Container

### CMD
- **Purpose**: Provides default commands or arguments that can be overridden at runtime. If you specify a command when starting the container (`docker run <image> <command> <args>`), it **overrides** the `CMD`
- Typically used for setting default arguments when a container starts (e.g., parameters for the main application specified with [[#ENTRYPOINT]])
- **Exec form**: `CMD ["executable", "param1", "param2"]` (preferred as it doesn't run in a shell). Example `CMD ["python", "app.py"]`


### ENTRYPOINT
- **Purpose**: Defines the main command that will always run in the container, and you can optionally provide default arguments with [[#CMD]]. It is not overridden by arguments passed to `docker run <image> <args>` (unlike `CMD`). The container will always execute the command defined in [[#ENTRYPOINT]], and any arguments passed at runtime will be appended to it
- **Exec form**: `ENTRYPOINT ["executable", "param1"]` (recommended)

### CMD + ENTRYPOINT

```docker
ENTRYPOINT ["python"] 
CMD ["app.py"]
```

- `ENTRYPOINT` specifies the command that will always run
- `CMD` provides default arguments to the `ENTRYPOINT`
- In the above example, if you run `docker run <image> script.py`, it will execute `python script.py` because `CMD` can be overridden
- `CMD` does not execute as a separate process when `ENTRYPOINT` specifies a complete command. Instead, it is effectively ignored in that context.
- Refer to [HashiCorp Vault Dockerfile](https://github.com/hashicorp/docker-vault/blob/main/ubi/Dockerfile) for an example