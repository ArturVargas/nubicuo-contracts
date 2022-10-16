require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("dotenv").config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.8",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 80001,
    },
    arbitrumG: {
      url: `https://alien-twilight-voice.arbitrum-goerli.discover.quiknode.pro/f08321d64f93dcd1f396e09c85713017755de651/`,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 421613,
    },
  },
  gasReporter: {
    currency: "USD",
    gasPriceApi: `https://api.polygonscan.com/api
    ?module=proxy
    &action=eth_gasPrice
    &apikey=${process.env.GAS_PRICE}`,
    token: "MATIC",
    coinmarketcap: process.env.API_KEY,
  },
};
