---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - fly_io
Creation Date: 2024-02-18, 17:40
Last Date: 2026-04-19T19:50:08+08:00
References:
draft:
description: Fly.io Starter Guide
---
## Abstract
---
- A cloud platform that runs full app servers at the edge by deploying [[Docker Container|containers]] as [[Virtualisation#Firecracker|Firecracker]] micro-VMs on bare metal servers across 30+ regions worldwide
- You give it a [[Docker Image|Docker image]], it runs it as a micro-VM close to your users. The **Fly Proxy** handles global load balancing, TLS termination, and auto-start/stop
- App infra is configured declaratively with `fly.toml`, see [Fly Launch configuration (fly.toml) · Fly Docs](https://fly.io/docs/reference/configuration/) for more details

## Fly.io Cost Management
---
```toml
[[services]]
  auto_stop_machines = "stop"    # Machine will be turned off or suspended when there’s little or no traffic.
  auto_start_machines = true     # Machine will automatically start again when traffic arrives.
```
- There are special settings in the `fly.toml` file called **auto-stop** and **auto-start** (under `[[services]]` or `[http_service]`).
	- `auto_stop_machines = "stop"` or `"suspend"` means the machine will be turned off or suspended when there’s little or no traffic.
	- `auto_start_machines = true` means the machine will automatically start again when traffic arrives.
	- `min_machines_running` sets how many machines stay on even when idle (to avoid cold start delays).

>[!important] For proper shutdown
> If we don't include `auto_stop_machines` or `auto_start_machines`. The system will **automatically start** machines when needed (on traffic), but it will **not** automatically stop them when idle.
> 
> If the app has a publicly exposed service, any incoming traffic can trigger a machine to start if it was stopped. Make sure you set `auto_start_machines = false`, so you don't incur unexpected costs.

### Grandfathered Free Tier
- **Grandfathered** = an old pricing rule kept for existing users after a policy change. Newcomers get the new terms, existing users keep the old ones as long as they don't switch plans
- Fly.io retired its public free tier in October 2024. New orgs are **Pay As You Go** with no free allowance. Orgs that were already on the old **Hobby**, **Launch**, or **Scale** plans keep their allowances: up to 3 `shared-cpu-1x@256MB` machines, **3 GB** persistent volume total, and regional outbound transfer credits

>[!caution] One-way door
> The Fly docs warn: _"If you change your plan, you won't be able to return."_ Any upgrade or downgrade permanently drops grandfather status. Check the current plan first with `fly orgs show <org_slug>` or the billing dashboard. Labels **Hobby / Launch / Scale** = grandfathered, **Pay As You Go** only = not.

## Fly.io Machine Lifecycle
---
- A **Fly Machine** is a fast-launching [[Docker Container|container]]-based micro-VM powered by [[Virtualisation#Firecracker|Firecracker]]. Each machine goes through lifecycle states: `created` -> `started` -> `stopped` -> `destroyed`
- The **Fly Proxy** is a [[Reverse Proxy (反向代理)|reverse proxy]] that routes incoming traffic to machines, and is responsible for triggering `auto_stop` and `auto_start` transitions
- Stopped machines **persist indefinitely**. There is no time-based garbage collection of stopped machines
- **Rootfs** (root filesystem) is the machine's disk, made up of the container image layers plus any files written at runtime. When a machine is stopped, Fly.io keeps the rootfs assembled on the host for fast restarts, billed at $0.15/GB/month even while stopped. This is separate from **volumes** (persistent storage via `[[mounts]]`), which survive machine destruction

### Auto-stop and Auto-start Internals
- When `auto_stop_machines = "stop"` is set, the Fly Proxy monitors each machine's active connections. When a machine is idle (no connections), the proxy **cordons** the machine (stops routing new traffic to it), then sends a stop signal
- `auto_start_machines = true` works reactively. When the proxy receives a request and all running machines are at capacity or none are running, it starts a stopped machine to handle the traffic
- `auto_stop` only **stops** machines, it never creates or destroys them

### How Machines Can Disappear
- **Hardware failure** on the host. If the host is decommissioned, all machines on it are lost
- **`auto_destroy: true`** in the machine config (default `false`). When enabled, a machine destroys itself after it exits
- **Deployments** via `fly deploy` can replace old machines with new ones (new machine IDs)
- **Platform incidents** can cause machines to temporarily vanish from `fly machine list`

### Preventing Machine Loss
```toml
[[services]]
  auto_stop_machines = "stop"
  auto_start_machines = true
  min_machines_running = 1  # Always keep at least 1 machine running
```
- `min_machines_running = 1` ensures one machine **never gets stopped**, so the proxy always has a running machine to route traffic to
- Running **2+ machines** across regions mitigates hardware failure risk

>[!important] Lesson from a real incident (2026-03-18)
> An Umami analytics instance on Fly.io went completely offline. `fly machines list` returned "No machines" (destroyed, not just stopped). Root cause analysis:
>
> | Hypothesis | Evidence | Verdict |
> |---|---|---|
> | Time-based GC | Not documented, Fly.io bills for stopped machines | Ruled out |
> | `auto_destroy` | Not in machine config, defaults to `false` | Ruled out |
> | Deploy replaced machines | No deploy between Jan 7 and Mar 26 | Ruled out |
> | Platform API incident | Would be temporary, machines would return | Unlikely |
> | **Host hardware failure** | Both machines in same region (`sin`), likely same host. Fly.io decommissions failed hosts and destroys all machines on them | **Most likely** |
>
> Fix: `min_machines_running = 1` keeps at least one machine alive. Spreading machines **across regions** mitigates single-host failure.

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




## Fly.io Image Deployment
---
- `fly image update -a <app>` re-resolves the image tag pinned on each machine and rolls them onto the new digest
- Gotcha with **mutable tags** (`:latest`, `:postgresql-latest`): Fly compares the _tag string_, not the upstream digest. If the tag hasn't changed, Fly reports _"Machines successfully updated"_ while still running the old digest. Logs reveal the no-op as `Container image ...@sha256:<old_digest> already prepared`

>[!caution] Verify, don't trust "success"
> After every `fly image update`, check the app version in logs and compare `fly image show` against the upstream manifest:
> ```bash
> TOKEN=$(curl -s 'https://ghcr.io/token?scope=repository:<org>/<repo>:pull&service=ghcr.io' \
>   | python3 -c 'import sys,json; print(json.load(sys.stdin)["token"])')
> curl -sI -H "Authorization: Bearer $TOKEN" \
>      -H "Accept: application/vnd.oci.image.index.v1+json" \
>      "https://ghcr.io/v2/<org>/<repo>/manifests/<tag>" \
>   | grep -i docker-content-digest
> ```

- Force the re-pull by pinning an **explicit digest**:
```bash
fly image update -a <app> --image ghcr.io/<org>/<repo>@sha256:<digest>
```
- Trade-off: once pinned by digest, `fly image show` reports an empty tag and future `fly image update` calls without `--image` become no-ops (no tag to resolve). Either re-pin to the tag afterwards, or always supply a digest going forward

## Fly.io Volume Snapshots
---
- **Block-level** copies of a volume at a point in time, stored on Fly infra. Created without restart or downtime
- **Crash-consistent**, not transaction-consistent. A snapshot of a running Postgres restores like a sudden power-cut, so pair it with a logical `pg_dump` for anything important
- Fly auto-snapshots daily with **5-day retention**. Manual snapshots share the same retention unless overridden
- Restore creates a **new** volume from the snapshot, leaving the original untouched. Attach the new volume via `fly.toml` `[[mounts]]` or `fly machine update --volume`

```bash title="Snapshot commands"
fly volumes snapshots list <volume_id>
fly volumes snapshots create <volume_id>

fly volumes create <new_name> \
  --snapshot-id <snap_id> \
  --region <region> \
  --size <gb>
```

>[!tip] Defence in depth for unmanaged Postgres
> The **Unmanaged Fly Postgres** image has no official disaster recovery. Before a schema migration or image upgrade, take a Fly snapshot **and** a logical [[Postgres#Postgres Migration|pg_dump]] (via [[Local Port Forwarding#Fly.io App Port Forwarding|local port forward]]). Snapshots restore the whole disk, `pg_dump` gives you a portable SQL file that loads into any Postgres version.

## Fly.io SSL
---

![[flyio_ssl.png|248]]

- I am using a custom [[Hostname#Domain Name]] with my fly.io app. For some reason, the [[X.509 Certificate]] didn't get auto-renew. This leads to the inaccessibility to the fly.io app. I suspect it is because by the [Cloudflare DNS Proxy](https://developers.cloudflare.com/dns/manage-dns-records/reference/proxied-dns-records/) which causes the custom domain verification to fail. I had to stop the proxy, run `fly certs delete <custom_domain_name>` and `fly certs create <custom_domain_name>` to get a valid X.509 certificate again

>[!important] Yes, I was right!
> ![[flyio_custom_domain_ssl_proxy_issue.png]]
>
> The only way for domain name verification to work with the Cloudflare DNS proxy on is to add a [[DNS Record#CNAME Record|CNAME record]] to the [[Hostname#Domain Zone File|domain zone file]].

## References
---
- [Machine states and lifecycle - Fly Docs](https://fly.io/docs/machines/machine-states/)
- [An introduction to Fly Machines - Fly Docs](https://fly.io/docs/machines/overview/)
- [Fly Proxy autostop/autostart - Fly Docs](https://fly.io/docs/reference/fly-proxy-autostop-autostart/)
- [Fly.io Billing - Fly Docs](https://fly.io/docs/about/billing/)
- [Troubleshoot host unavailable - Fly Docs](https://fly.io/docs/apps/trouble-host-unavailable/)
- [Machines API Resource - Fly Docs](https://fly.io/docs/machines/api/machines-resource/)
- [Fly Volume snapshots - Fly Docs](https://fly.io/docs/volumes/snapshots/)
- [Fly plans and pricing - Fly Docs](https://fly.io/docs/about/pricing/)
