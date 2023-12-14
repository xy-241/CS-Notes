---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - computer_organisation
Creation Date: 2023-12-01T21:55:00
Last Date: 
References:
---
## Abstract
---
- The kernel we are playing is [xv6-riscv](https://github.com/mit-pdos/xv6-riscv)


## Compilation of the [[Kernel]]
---
```bash
docker run --rm -v $(pwd):/project -it --platform linux/amd64 yuxinyang/rv-tool-chain:latest make
docker run --rm -v $(pwd):/project -it --platform linux/amd64 yuxinyang/rv-tool-chain:latest make fs.img

# Memory 128MB, 2 CPU Cores 
qemu-system-riscv64 -machine virt -bios none -kernel kernel/kernel -m 128M -smp 2 -nographic \
	-global virtio-mmio.force-legacy=false \
	-drive file=fs.img,if=none,format=raw,id=x0 \
	-device virtio-blk-device,drive=x0,bus=virtio-mmio-bus.0

# Remove the built kernel
make clean
```