import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4D7eD2b80b2d86B6B246ff62eaa4e422C91A967d'
);

export default instance;
