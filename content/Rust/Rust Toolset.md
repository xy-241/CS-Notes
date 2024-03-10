---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - rust
Creation Date: 2024-01-13, 16:52
Last Date: 2024-03-10T18:15:15+08:00
References: 
draft: 
---
## Abstract
----
- Setup a Rust project properly! More info can be found at [Holy Bible of Rust](https://rust-book.cs.brown.edu/foreword.html)

## Obtain Rust
---
- Script below includes the Rust [[Language Processors#Compiler]] `rustc`, `rustup` the Rust tool chain installer and [[Package Manager#Cargo]]
```bash
# Starts the installation of the `rustup` tool - managing the version of Rust, which installs the latest stable version of Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

rustc --version # Verify rust is installed properly
```

```bash title="Cargo Cheatsheet"
cargo check # Make sure the codes can be compiled - fast than actually compiling

cargo build # Compilation
cargo build --release # Compilation + optimisation

cargo run # Compilation + Run
cargo run --release # cargo run + optimisation
```