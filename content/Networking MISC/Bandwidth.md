---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - networking
Creation Date: 2023-09-25T17:16:00
Last Date: 2024-05-10T19:45:48+08:00
---
## Abstract
---
- The **theoretical maximum rate** of data transfer across a [[Computer Network]]

>[!important] Speed measurement unit
> Measured in `Kbps`, `Mbps` and `Gbps` etc, which refer to $1,000$, $1,000,000$ and $1,000,000,000$ [[Computer Data Representation#Bit]] **per second** correspondingly. 

## Network Throughput
---
- **Actual rate** of successful data transfer over a network. It represents the real-world performance of the connection and takes into account factors such as [[Network Congestion]], packet loss, and other forms of interference that can affect data transmission. Throughput is often lower than the theoretical [[Bandwidth]] due to these factors

>[!code] Test the Internet Throughput 
> Run `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python3 -`.

>[!code] Test the localhost Throughput
> Run the benchmarking server on `localhost` on [[Network Port]] `3000` with `iperf3-darwin -s -p 3000`.
> 
> Run the benchmarking client to test for the bandwidth of `localhost` with `iperf3 -c localhost -p 3000 -f M`.

### Bandwhich
- A CLI tool that show the [[#Network Throughput]] of all apps on the machine, the remote addresses the apps are connecting to, and the [[Network Interface]] that is handling the connection
- Install with `brew install bandwhich`, and run it with `sudo bandwhich`



## References
---
- [What is iPerf?. Or, how fast is localhost? | by Matt Lim | Medium](https://pencilflip.medium.com/what-is-iperf-5f1943d6781)
