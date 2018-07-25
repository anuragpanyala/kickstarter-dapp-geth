// Code for Geth
// **** Change IP if required ****


const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const web3 = new Web3(new Web3.providers.HttpProvider('http://104.42.114.106:8545'));  // Change IP

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const results = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: '0x' + compiledFactory.bytecode}) //no initial arguments in this smart contact
    .send({from: accounts[0], gas: 1000000});

    console.log('Contract deployed to', results.options.address);
};
deploy();
