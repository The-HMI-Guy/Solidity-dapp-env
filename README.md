# A Minting dApp Built Using Solidity

---

## Table of contents

- [General info](#general-info)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [To Do List](#to-do-list)

## General info

This project was built from the mentorship by Firebug509.

## Features

- UI for minting
- Ability for a user to connect wallet
- Ability for a user to mint an NFT

## Setup

- Create dapp-env folder
- Check that node.js installed
  - Run
    ```
    node -v
    ```

```
npx create-react-app dapp
```

- If you run into issues about the verison being behind, run

  ```
  npm uninstall -g create-react-app && npm i -g npm@latest && npm cache clean -f
  ```

- Run

  ```
  cd dapp
  ```

- Run

  ```
  npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
  ```

- npx hardhat
  - Enter all default settings
  - Original README.md had to be renamed to avoid conflict
- Post install, replaced Hardhat's content and pasted original content.
- Add the following code inside hardhat.config.js under solidity: "0.8.4",
  - //Tells compiler to build the artifacts in our src directory
    //Reason: React app cannot access anything outside, so it must exist inside the src directory
    paths: {
    artifacts: "./src/artifacts",
    },
    //MetaMask chainID issue. MetaMask recommends pointing to this.
    networks: {
    hardhat: {
    chainId: 1337
    },
    },
- Run

  ```
  npx hardhat compile
  ```

- artifacts folder created in the src directory
- Open new terminal and run cd app
- Run

  ```
  npx hardhat node
  ```

- Local blockchain i.e. http://127.0.0.1:8545/

- Switch MetaMask to LocalHost 8545 & import account using local node PK
- ![MetaMask-Hardhat](https://user-images.githubusercontent.com/96752508/168085825-7963931a-867a-4fc7-99d9-0afdbc7fdd9d.png)
- Leave node terminal running and switch back to the original terminal
- Go to scripts and change original file name to deploy.js
- Run

  ```
  npx hardhat run scripts/deploy.js --network localhost
  ```

- This deploys contract. To verify, switch back to the node terminal and check consol log or check MetaMask account, which should have a reduced amount of eth
- Example on how to run test script to check contract test/functions

  ```
  npx hardhat test
  ```

- Update app.js
  - Open new terminal and run cd dapp/

```
npm run start
```

- Inside the hardhat.config.js file, add Rinkeby network block of code
  - Include Infura URL and test MetaMask PK
- Run

```
npx hardhat run scripts/deploy.js --network rinkeby
```

- Part 1 New Terminal
- Run

```
 npx hardhat clean
```

- Run

```
npx hardhat node
```

- New Terminal
- Run
  ```
  npx hardhat run --network localhost scripts/deploy.js
  ```
- Always run

```
 npx hardhat compile
```

- after making a change to the contract (best practice)
- Then run

```
npx hardhat test
```

- Finally, run

```
npx hardhat run --network localhost scripts/deploy.js
```

- Working on manager-test.js
- Run

```
 npx hardhat test
```

## Technologies

Project is created with:

- Solidity Version: 0.8.0
- Ethereum-Waffle Version: 3.4.4
- Ethers Version: 5.6.5
- Chai Version: 4.3.6
- Hardhat Version: 2.9.4

## To Do List

- Create UI
- Ability for user to connect wallet
- Ability for user to mint an NFT
