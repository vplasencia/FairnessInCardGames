pragma circom 2.0.0;

// Import the hash function MiMCSponge
include "./utils/mimcsponge.circom";

// There are 52 cards

template OneCard() {  

   // Declaration of signals.  

   // Private inputs

   // card number 0-51
   signal input number;  
   signal input password;

   // Public input
   signal input cardHash;

   // Output
   signal output card;

   component mimc = MiMCSponge(2, 220, 1);
   mimc.ins[0] <== number;
   mimc.ins[1] <== password;
   mimc.k <== 0;

   card <== mimc.outs[0];
   log(card);
   cardHash === card;
}

component main {public [cardHash]} = OneCard();