require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  //Tells compiler to build the artifacts in our src directory
  //Reason: React app cannot access anything outside, so it must exist inside the src directory
  paths: {
    artifacts: "./src/artifacts",
  },
  //MetaMask chainID issue. MetaMask recommends pointing to this.
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/2cf2bbd4068f45c08aeb064ce51468ed",
      accounts: [
        "9646bac3b8a9637b603c6f6af704b497c334b26f9a9050907c51100930f113bb",
      ],
    },
  },
};
