#security 
## Abstract
- Hash means Chop & Mix
- Take in a variable-length text and give a fixed-length output
- Same input -> Same output
- Infeasible to reverse from the hash value to the original text
- We want the algorithm to have [[Avalanche effect (雪崩效应)]] and be [[Collision resistance (抗碰撞性)]]

## Use Cases
- Store secrete data in plaintext in the hash form (e.g Password)



## Cons
- Can be hacked by [[Rainbow Attack]], Try generate a [[#Nodejs |hash of common text]] & reverse it with [this website](https://crackstation.net/) - can be avoided using [[Salting]]

## Code Examples
### Nodejs
```js
const { createHash } = require('crypto')

function hash(input) {
  return createHash('sha256').update(input).digest("hex")
}

let password = 'password123'
console.log(hash(password));
```

## Terminologies
### MD5 (Message Digest)
- A Hashing Algorithm that can be broken 
### SHA256 (Secure Hash Algorithm)
- A Hashing Algorithm that produces a fix length of [[#Digest]] that is 256-bits
```bash
# Output is hex encoded
shasum -a 256 <FILE_NAME>
```
### Digest
- A hash value that is commonly formatted as hex or [[Base 64]]