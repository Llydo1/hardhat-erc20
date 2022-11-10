const { network, ethers } = require("hardhat");

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { log, deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const initialSupply = ethers.utils.parseEther("50");
    try {
        const Llydo1Token = await deploy("Llydo1Token", {
            from: deployer,
            args: [initialSupply],
            log: true,
            waitConfimations: network.config.blockConfirmations || 1,
        });
        log("Wait for confirmation");
    } catch (e) {
        console.log(e);
    }
};

module.exports.tags = ["all", "raffle"];
