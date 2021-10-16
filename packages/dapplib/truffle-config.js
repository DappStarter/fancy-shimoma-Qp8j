require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture strong reflect pizza pupil hope another army gift'; 
let testAccounts = [
"0x79d51bba1a4c6b234055dd92eaa7dce24d1021f6825d211ddbbc4ecab82c2dc6",
"0x8a7ec8a1ce59053ebd4b19667371ed73f26280e577001da804200581fb4eab6e",
"0x67b6b5918e495a6316372fec5bd222838dbabeab06ba42ef7459154476f3a15b",
"0x9f4626f2d670f33a2e860b2b0df099d5f99ddab6723ca5f8713070d86f752d54",
"0x3253e634caed43c2f3f3a2b0d49c9f3d37c910e455e06c1b843d51f2eb7b3687",
"0x4217d49c601c4cdc47667bf4add96b33569ea3a0813bcbf3e7f2d75ac551a196",
"0x28a8405e5af5092a6d24652e68e498de97c6c147cc989a65f143aa1857ba390d",
"0x51e4325660bcb409add4c90e08931700c67a926bdf7891d38ffb01561d40c9ce",
"0xb0412fe16c8b7bea7550278e875655877035a8d89d0c5858c6b5ef3472a05f8b",
"0xb890967b147db224e2d239846f40489ffcd69198416bc0747fc1b676ac093dfb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


