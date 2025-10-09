---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - fly_io
Creation Date: 2024-02-18, 17:40
Last Date: 2025-10-09T09:38:52+08:00
References:
draft:
description: Fly.io Starter Guide
---
## Abstract
---
- Serverless Container Cloud Provider, come with **free hosting**!
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
fly image update -a umami-self-host --image <IMAGE_ENDPOINT> # Full flexibility in the image we want to use

fly config save --app <app-name> # Asks Fly’s control plane for the _current remote configuration_ and writes a `fly.toml` locally.
```

```bash title="App Secrets Management"
fly secrets list -a <APP_NAME>

fly secrets set <KEY>=<Value> -a <APP_NAME>
```

```bash title="App Networking Management"
fly ips list

fly certs add <CUSTOM_DOMAIN_ENDPOINT>
fly certs show <CUSTOM_DOMAIN_ENDPOINT>
fly certs delete <CUSTOM_DOMAIN_ENDPOINT>
```
- [[Local Port Forwarding#Fly.io App Port Forwarding]]

```bash title="App Observability"
fly logs -a umami-self-host # Get live logs

fly dashboard metrics -a # Open the Metrics UI for your app
```
- [[Observability]]

```bash title="Postgres Management"
fly postgres list

fly postgres connect -a <APP_NAME>
```
- If you want to view the database using DBeaver on your laptop, you have to first [[Local Port Forwarding#Fly.io App Port Forwarding|local port forward]] the db to your localhost port.

```bash title="App volume"
fly volumes create <volume_name> --size <volume_size> --region <region_name> -a <app_name> # create a volume for an app

fly volumes list -a <app_name> # inspect all the volume we have
```

```toml title="fly.io toml volume attachment"
[[mounts]]
  source = <volume_name>
  destination = <container_path_to_attach_the_volume>
  auto_extend_size_threshold = 80      # when usage > 80%, try to grow
  auto_extend_size_increment = "1GB"   # grow by 1 GB each time
  auto_extend_size_limit = "20GB"      # ABSOLUTE cap (must be >= current size)
```




## Fly.io SSL
---

![[flyio_ssl.png|500]]

- I am using a custom [[Hostname#Domain Name]] with my fly.io app. For some reason, the [[X.509 Certificate]] didn't get auto-renew. This leads to the inaccessibility to the fly.io app. I suspect it is because by the [Cloudflare DNS Proxy](https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/) which causes the custom domain verification to fail. I had to stop the proxy, run `fly certs delete <custom_domain_name>` and `fly certs create <custom_domain_name>` to get a valid X.509 certificate again

>[!important] Yes, I was right!
> ![[flyio_custom_domain_ssl_proxy_issue.png]]
> 
> The only way for domain name verification to work with the Cloudflare DNS proxy on is to add a [[DNS Record#CNAME Record|CNAME record]] to the [[Hostname#Domain Zone File|domain zone file]].

