---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - hpc
  - ai
  - OS
Creation Date: 2025-09-30, 18:36
Last Date: 2025-09-30T18:46:51+08:00
References:
draft:
description:
---
## Speculative Decoding
---
- **An inference-time trick**, making models respond faster and cheaper to serve
- Speculative decoding works by using a few smaller models or logic to **guess the next tokens in parallel**, keeping the GPUs busy instead of idle. If the guesses turn out **wrong**, nothing extra is lost, we just fall back to the normal process. If the guesses are **right**, the larger model can skip work, giving us a clear speedup

>[!important] How it works in high level
> In practice, the small “draft” model runs ahead and proposes multiple next tokens quickly. The big “main” model then checks those guesses:
> - **Correct →** we save time and accelerate decoding.
> - **Incorrect →** we discard and continue as usual, with no real penalty.
> 
> This way, speculative decoding is all upside: either you keep the normal speed (worst case), or you gain significant speed improvements (best case). It’s like having a quick sidekick who runs ahead with possible moves, and the master only needs to confirm them.
> 
> **NVIDIA** benchmarks show speculative decoding can reduce **inference FLOPs by 50–70%**, depending on draft model accuracy.

>[!important] Same hardware but more throughput
> Speculative decoding makes the **same GPU deliver more throughput per unit time**, without needing to scale hardware.
> 
> Large models generate text **sequentially**: one token at a time. After producing a token, the system waits to decide the next one. During this “thinking gap,” much of the GPU is underutilized (not all cores busy).

>[!example] Real-world use cases
> - **OpenAI**: GPT-4 Turbo uses speculative decoding with smaller draft models to cut latency and cost.
> - **Google DeepMind**: Tested it with PaLM models for faster decoding.
> - **Anthropic**: Uses similar ideas for Claude to reduce serving cost.
> - **NVIDIA**: Has speculative decoding optimizations in TensorRT-LLM for enterprise deployments.