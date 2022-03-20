const main = async () => {
  const contractFactoryVerifier = await hre.ethers.getContractFactory(
    "Verifier"
  );
  const contractVerifier = await contractFactoryVerifier.deploy();
  await contractVerifier.deployed();
  console.log("Contract deployed to:", contractVerifier.address);

  const contractFactory = await hre.ethers.getContractFactory("OneCard");
  const contract = await contractFactory.deploy(contractVerifier.address);
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);

  let result = await contract.verifyCard(
    [
      "0x019b392db8f9f0a4701620360592693ba1c4885137da962474c1e7b7e88ba5b8",
      "0x2638726e9863618b43fe6062f113a6e0837f6629e963f0b192dc68e61b6cb7cd",
    ],
    [
      [
        "0x303274e55ec3cb01720bf4c9d0e98968db1b68d453a3f3674968df8067f85d5f",
        "0x0b70ef583d665216d07efb59399700e492a0df78805cb4eb64ed95e1b0e47a53",
      ],
      [
        "0x25ef7dd7be608c1147509fc2c44db3c63cdb97a3b5a4c5a201469ed5ad689108",
        "0x08d9808004a3ad9e893b820c974a33ef12ad87342f74a24d0ccdad9181d2468f",
      ],
    ],
    [
      "0x12e6ebf227228a16823fef3fef80e292c9978020d78c46c5babaf0a8a3be8f63",
      "0x08bd1f16239a9e5ed41347bee9aee14e98c7475b2193b364e54c1c3915dedc21",
    ],
    [
      "0x0e8869f1645ac399b2bd6ce6cc6f9b5e6a843678c09a53b666d37846c0c053c6",
      "0x0e8869f1645ac399b2bd6ce6cc6f9b5e6a843678c09a53b666d37846c0c053c6",
    ]
  );

  console.log("Result", result);
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
