const hre = require("hardhat");

async function main() {
    const nelo = await hre.ethers.getContractFactory("Nelo");
    const deployment = await nelo.deploy();

    await deployment.deployed();

    console.log("Nelo token deployed to:", deployment.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});