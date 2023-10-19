import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * @param hre HardhatRuntimeEnvironment object.
 */
const addGreeting: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `pnpm deploy --network goerli`), the deployer account
    should have sufficient balance to pay for the gas fees for contract interaction.

    You can generate a random account with `pnpm generate` which will fill DEPLOYER_PRIVATE_KEY
    with a random private key in the .env file (then used on hardhat.config.ts)
    You can run the `pnpm account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();

  const contract = await hre.ethers.getContract("YourContract", deployer);

  await contract.setGreeting("Hi this is the deployer!");
};

export default addGreeting;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. pnpm deploy --tags AddGreeting
addGreeting.tags = ["AddGreeting"];
