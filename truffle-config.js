require("ts-node").register({
  files: true,
});

const { mnemonic, secret, password, email } = require("./faucet.json");
const { alice } = require('./scripts/sandbox/accounts');

module.exports = {
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  contracts_directory: "./contracts/main",
  networks: {
    development: {
      host: "http://localhost",
      port: 8732,
      network_id: "*",
      secretKey: alice.sk,
      type: "tezos"
    },
    edonet: {
      host: "https://rpctest.tzbeta.net",
      network_id: "*",
      secretKey: "edsk4ZjoVYBKxSFGGT2V7UN2aJGTuFzHTzW4H6Bnw84FA4g8d5HwTF",
      type: "tezos"
    },
  }
};
