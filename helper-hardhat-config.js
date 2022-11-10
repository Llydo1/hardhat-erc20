const networkConfigs = {
    5: {
        name: "goerli",
        explorer_url: "https://goerli.etherscan.io/",
    },
    31337: {
        name: "hardhat",
    },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
    networkConfigs,
    developmentChains,
};
