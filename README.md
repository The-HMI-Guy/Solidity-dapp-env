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
    - node -v
- npx create-react-app dapp
    - If you run into issues about the verison being behind, run npm uninstall -g create-react-app && npm i -g npm@latest && npm cache clean -f
- cd dapp
- npm install ethers hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers

## Technologies

Project is created with:

- Solidity Version: 0.8.0
- Truffle Version: 1.5.1
- Ganache-CLI Version: 6.12.2
- Mocha Version: 9.1.2
- Web3 Version: 1.6.0

## To Do List

- Create UI
- Ability for user to connect wallet
- Ability for user to mint an NFT
