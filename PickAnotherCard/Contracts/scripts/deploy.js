const main = async () => {
  // Deploy the VerifierCard contract
  const contractFactoryVerifierCard = await hre.ethers.getContractFactory(
    "VerifierCard"
  );
  const contractVerifierCard = await contractFactoryVerifierCard.deploy();
  await contractVerifierCard.deployed();
  console.log("Contract deployed to:", contractVerifierCard.address);

  // Deploy the VerifierAnotherCard contract
  const contractFactoryVerifierAnotherCard =
    await hre.ethers.getContractFactory("VerifierAnotherCard");
  const contractVerifierAnotherCard =
    await contractFactoryVerifierAnotherCard.deploy();
  await contractVerifierAnotherCard.deployed();
  console.log("Contract deployed to:", contractVerifierAnotherCard.address);

  // Deploy the AnotherCard contract
  const contractFactory = await hre.ethers.getContractFactory("AnotherCard");
  const contract = await contractFactory.deploy(
    contractVerifierCard.address,
    contractVerifierAnotherCard.address
  );
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
