const axios = require("axios");

class HttpService {
    constructor() {
        this.axiosInstance = axios.create({});
    }

    async get(url, params) {
        try {
            const result = await this.axiosInstance.get(url, { params });
            return result;
        } catch (error) {
            throw error
        }
    }

    async getTransactions(walletAddress) {

    }

    async getBalances(walletAddress) {
        const url = `https://api.covalenthq.com/v1/1/address/${walletAddress}/balances_v2/?key=ckey_8b9471dbe88546c7b56749167e2&nft=false&no-nft-fetch=true`;

        const balances = this.get(url);
        return balances;
    }
}

module.exports = new HttpService();