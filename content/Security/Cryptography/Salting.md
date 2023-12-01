#security 
## Abstract
- Add a random value to the text before [[Hashing]]





## Example
### Nodejs
```js
const { scryptSync, randomBytes } = require('crypto');

let user;
function signup(email, password) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');

  user = {email, password: `${salt}:${hash}`};

  return user;
}

function login(email, password) {
  const [salt, hash] = user.password.split(':');
  const verifyHash = scryptSync(password, salt, 64).toString('hex');

  return hash === verifyHash;
}


user = signup('me@yxy.ninja', 'password123');
console.log(login('me@yxy.ninja', 'password123'))
```

## Terminologies
### scrypt
- A salting algorithm
- A [[PoS (Proof of Work)]] algorithm