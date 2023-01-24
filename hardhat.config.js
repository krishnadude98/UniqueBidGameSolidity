require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
require("hardhat-gas-reporter");
/** @type import('hardhat/config').HardhatUserConfig */
const GORELLI_RPC_URL = process.env.GORELLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.ETHERSCAN_API_KEY;
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY;
module.exports = {
    solidity: "0.8.17",
    defaultNetwork: "hardhat",
    networks: {
        gorelli: {
            url: GORELLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainid: 5,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainid: 31337,
        },
    },
    etherscan: {
        apiKey: API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COIN_MARKET_CAP_API_KEY,
        token: "MATIC",
    },
};