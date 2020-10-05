require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift rate night puppy hunt lobster fringe giant'; 
let testAccounts = [
"0xae7d75bc82f2a8900bb0f2187386ea0b7c1b90c702d10b5162c2a505604aa0f1",
"0x965fb7bf59c578e040fd728663fce1f1112bc5849bf8fcba8af77d1e3c07ab7e",
"0xd9466083c11078da3be4712af14b77427025971efc6bbc74501f9b4ec58aca45",
"0x5031ae408b50d1a341869786e3d150ce73b86485a4a59ec6f845248f6ab5f462",
"0xa98d4e88d37be341816336ec3dc0e749d0e290b59fc9ca9be849f6d8bf3e916c",
"0x8aef4cd749732a5b264295d6de6bc924f9162aba139c2bae1cdd9b1a9315e9fa",
"0x2054cdca80ce32672ffba8ff36a2d538f4a8ccd479401301af03a10b0290b6cd",
"0x392de64d77dc840085517f6c2f2594875410c10e8b9658f3515d2c6ffe48eaa1",
"0x9cb814faf1321d6bed6ae482e48a7c304935d44eccba648f41c10487ae3cf8ae",
"0x6b00ceb4f04e400ad1c91b3b8a6e01940ace6246442f2d796baf09dc258191b9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
