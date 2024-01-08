---
Author:
  - Xinyang YU
Author Profile:
  - https://linkedin.com/in/xinyang-yu
tags:
  - js
Creation Date: 2023-12-15, 20:01
Last Date: 2024-01-08T17:00:25+08:00
References: 
---
## Abstract
---
- Obtain your 10X developer JS Toolset

Setup Steps:
- [ ] [[#Install NVM]]
- [ ] [[#Install Code Quality Assurance Tools]]


## Install NVM
---
- Stands for *Node Version Manager*
- You can install [here](https://github.com/nvm-sh/nvm#install--update-script)
- Includes [[Node.js]], [[#NPM]] and [[#NPX]]
### NPM
- Tool to install the *JS Modules*, refer to [[MacOs Setup]] for set up details
- Obtain the absolute path to global node modules 
```bash
npm root -g

# We can take advantage of this to copy certain runtime dep to the production build
cp -R $(npm root -g)/dd-trace ./traced-deps/node_modules
```

### NPX
- Stands for Node Package eXecute
- A *package runner tool* that comes bundled with [[#NPM]]
- Allows you to execute any package from the npm registry without having to install it globally or locally using NPM which may pollute your local or global *node_modules directory*

## Install Code Quality Assurance Tools
---
- [[Code Quality Assurance Tools|What are code quality assurance tools]]

### oxlint
- A JS [[Code Quality Assurance Tools#Linter]]
- Setup script
```shell
#!/bin/bash
npm add -D oxlint # Add oxlint to package.json

# Specify path/file to ignore
# In this case, we are ignoring all files in node_modules
touch .eslintignore
echo node_modules > .eslintignore
```

- Run the linter with `npx oxlint`
- Refer to [oxlint official docs](https://oxc-project.github.io/docs/guide/usage/linter.html) for more configuration information

>[!info]
>At the current stage, oxlint is **not intended to fully replace [ESLint](https://eslint.org/)**; it serves as an enhancement when ESLint's slowness becomes a bottleneck in your workflow.
>
>We recommend running oxlint before ESLint in your lint-staged or CI setup for a quicker feedback loop, considering it only takes a few seconds to run on large codebases.
### prettier
- A [[Code Quality Assurance Tools#Formatter]]
- Setup script
```bash
#!/bin/bash
npm install --save-dev --save-exact prettier # Add oxlint to package.json

touch .prettierignore # Specify path/file to ignore
touch .prettierrc # Config prettier
```

- Run `npx prettier . --write` to format all the files in current directory recursively
- Refer to [prettier official docs](https://prettier.io/docs/en/install.html) for more configuration information