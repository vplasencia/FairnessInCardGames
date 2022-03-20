#!/bin/bash

# Compile the circuit
circom onecard.circom --r1cs --wasm --sym --c

# Copy the input file inside the multiplier_js directory
cp input.json onecard_js/input.json

# Go inside the multiplier_js directory and generate the witness.wtns
cd onecard_js
node generate_witness.js onecard.wasm input.json witness.wtns

# Copy the witness.wtns to the outside and go there
cp witness.wtns ../witness.wtns
cd ..

# Start a new powers of tau ceremony
snarkjs powersoftau new bn128 12 pot12_0000.ptau -v

# Contribute to the ceremony
snarkjs powersoftau contribute pot12_0000.ptau pot12_0001.ptau --name="First contribution" -v

# Start generating th phase 2
snarkjs powersoftau prepare phase2 pot12_0001.ptau pot12_final.ptau -v

# Generate a .zkey file that will contain the proving and verification keys together with all phase 2 contributions
snarkjs groth16 setup onecard.r1cs pot12_final.ptau onecard_0000.zkey

# Contribute to the phase 2 of the ceremony
snarkjs zkey contribute onecard_0000.zkey onecard_0001.zkey --name="1st Contributor Name" -v

# Export the verification key
snarkjs zkey export verificationkey onecard_0001.zkey verification_key.json

# Generate a zk-proof associated to the circuit and the witness. This generates proof.json and public.json
snarkjs groth16 prove onecard_0001.zkey witness.wtns proof.json public.json

# Verify the proof
snarkjs groth16 verify verification_key.json public.json proof.json

# Generate a Solidity verifier that allows verifying proofs on Ethereum blockchain
snarkjs zkey export solidityverifier onecard_0001.zkey verifier.sol

# Generate and print parameters of call
snarkjs generatecall | tee parameters.txt