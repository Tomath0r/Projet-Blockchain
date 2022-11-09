
const hre = require("hardhat");

async function main() {

  const TestNFT = await hre.ethers.getContractFactory('TestNFT');
  const testNFT = await TestNFT.deploy();

  await testNFT.deployed();

  console.log("TestNFT deployed to : ", testNFT.address);
}


main()
  .then(()=> process.exit(0))
  .catch((error)=>{
      console.error(error);
      process.exit(1);
  });








  /*
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`*/
