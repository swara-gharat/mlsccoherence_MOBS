import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "gKaz8h6w6kDaOJ73aTYB0CihoWp8JJZf",
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then(console.log);