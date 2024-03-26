---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - fly_io
Creation Date: 2024-02-18, 17:40
Last Date: 2024-03-22T20:59:46+08:00
References: 
draft: 
description: Fly.io Starter Guide
---
## Abstract
---
- Serverless Container Cloud Provier, come with **free hosting**!
- You can record down the app infra configuration with `fly.toml`, see [Fly Launch configuration (fly.toml) · Fly Docs](https://fly.io/docs/reference/configuration/) for more details

## Fly.io CLi Cheatsheet
---
```bash title="Fly CLi Setup"
brew install flyctl

fly auth login
```

```bash title="App Management"
fly apps list

fly ssh console -a <APP_NAME>

fly image update -a <APP_NAME> # Updates the app's image to the latest available version.
```

```bash title="App Secrets Management"
fly secrets list -a <APP_NAME>

fly secrets set <KEY>=<Value> -a <APP_NAME>
```

```bash title="App Networking Management"
fly ips list

fly certs add <CUSTOM_DOMAIN_ENDPOINT>
fly certs show <CUSTOM_DOMAIN_ENDPOINT>
```
- [[Port Forwarding#Port Forwarding into Fly.io App]]

```bash title="Postgres Management"
fly postgres list

fly postgres connect -a <APP_NAME>
```