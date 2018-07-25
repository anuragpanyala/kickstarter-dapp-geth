// Code for Geth
// **** Change IP if required ****

import Web3 from 'web3';

let web3;

const provider = new Web3.providers.HttpProvider(
    'https://104.42.114.106:8545'  //change depending on IP address
);
web3 = new Web3(provider);

export default web3;