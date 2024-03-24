// https://eth-goerli.g.alchemy.com/v2/kOAIibGI9QHr-TDyN2a2KAFu4rn5FSkI
require('@nomiclabs/hardhat-waffle'); //hardhat-waffle: it is a plugin to build smart contract tests using waffle in hardhat, taking advantage of both.

module.exports = {
  solidity: '0.8.0',
  defaultNetwork: 'goerli',
  networks: {
      goerli: {
        url: 'https://eth-goerli.g.alchemy.com/v2/kOAIibGI9QHr-TDyN2a2KAFu4rn5FSkI',
        accounts: [ '3efd3004b07e4187f96374e0ccaef5e1340c96c91a479e3c910bad78b1fbde8f' ],
      },
    },
};