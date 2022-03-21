const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AnotherCard", function () {
  it("Should verify the Card proof and return true", async function () {
    // Deploy the VerifierCard contract
    const contractFactoryVerifierCard = await hre.ethers.getContractFactory(
      "VerifierCard"
    );
    const contractVerifierCard = await contractFactoryVerifierCard.deploy();
    await contractVerifierCard.deployed();

    // Deploy the VerifierAnotherCard contract
    const contractFactoryVerifierAnotherCard =
      await hre.ethers.getContractFactory("VerifierAnotherCard");
    const contractVerifierAnotherCard =
      await contractFactoryVerifierAnotherCard.deploy();
    await contractVerifierAnotherCard.deployed();

    // Deploy the AnotherCard contract
    const contractFactory = await hre.ethers.getContractFactory("AnotherCard");
    const contract = await contractFactory.deploy(
      contractVerifierCard.address,
      contractVerifierAnotherCard.address
    );
    await contract.deployed();

    expect(
      await contract.verifyCard(
        [
          "0x0771b9177e57803068bfbdd593d31167f14b26633fd64f6de5a59595c0b51c97",
          "0x03b1458f195353d10163b38eabf89bb2e9cce6b8229d7826ea8713709ec9b6d9",
        ],
        [
          [
            "0x077ba979f489b6570ce622ab28e5f0d9232457ce793c74e6b0869ce43073fab5",
            "0x0acbf325cfb6c9b9c1f3b55009cc9ff10d531847828621c938ef39f59be095fd",
          ],
          [
            "0x0b0767373ede726a246205bacf26d400ee19aff9e12d7ff4de07fecc769917f8",
            "0x019948b0da32febb3e65ef1fca0d8adf61e43fc5d267bbf56436caa7caebe9b7",
          ],
        ],
        [
          "0x0e085e21625d9bce432accc5692dcd5b63fa612731d0ce2ec97e1fcbeba2e12e",
          "0x009d3cf2ad2260767a6c1470b4b3e1e1fc102334ed1cf4bad73c51d1e9f4721c",
        ],
        [
          "0x27c0255bb9469084f3911b5ce63c15cb1b9f8456fde97dffc415499d4ad73442",
          "0x27c0255bb9469084f3911b5ce63c15cb1b9f8456fde97dffc415499d4ad73442",
        ]
      )
    ).to.equal(true);
  });
  it("Should verify the AnotherCard proof and return true", async function () {
    // Deploy the VerifierCard contract
    const contractFactoryVerifierCard = await hre.ethers.getContractFactory(
      "VerifierCard"
    );
    const contractVerifierCard = await contractFactoryVerifierCard.deploy();
    await contractVerifierCard.deployed();

    // Deploy the VerifierAnotherCard contract
    const contractFactoryVerifierAnotherCard =
      await hre.ethers.getContractFactory("VerifierAnotherCard");
    const contractVerifierAnotherCard =
      await contractFactoryVerifierAnotherCard.deploy();
    await contractVerifierAnotherCard.deployed();

    // Deploy the AnotherCard contract
    const contractFactory = await hre.ethers.getContractFactory("AnotherCard");
    const contract = await contractFactory.deploy(
      contractVerifierCard.address,
      contractVerifierAnotherCard.address
    );
    await contract.deployed();

    expect(
      await contract.verifyAnotherCard(
        [
          "0x150604fbc13906b77f3e175da953f8a19bae80b3b889a4ee42f0b27e7333da79",
          "0x05eb6295625544f46ccc49ee750c0c16f1aa88127f3386282ea17cce4b688bf2",
        ],
        [
          [
            "0x02c8f016e114f570a24618fff8b74ca9ca18361e556a62a938d34615b6d3df7a",
            "0x0777ab772d39b40d91dd765a8e8be505eadb9e7e1a2af88d5269a4909ebe54be",
          ],
          [
            "0x1ca23756bbe28ac7116ef95800731409e47f676377c35d39bdc0ea10538ff65b",
            "0x16abbc78f7ab393092224841354a76e2c78f4c26de86d2ff06d1bae3ad7770fe",
          ],
        ],
        [
          "0x13598d530f4b8ed856445a62e2e2e50e30868b4d7a210eb5b6232fe6984f87a3",
          "0x2cd6832079c40d28e90b1ad2fdb42f10572a2f939b22a0adf9ed6217dc431f4e",
        ],
        [
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x2e532c3aac0940c18215ed87665b1722b5fff6d27ae108160573fe8ff9e889cb",
          "0x18ab495c04fa7bfe6db6babc23c102681ef00fdc53664812960e15d30d573926",
        ]
      )
    ).to.equal(true);
  });
});
