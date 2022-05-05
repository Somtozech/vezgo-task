const httpService = require("./utils/http");
const { formatValueFromWeiToEther } = require("./utils/formatValue")

async function getBalances(walletAddress) {
    const balances = await httpService.getBalances(walletAddress);

    const positions = balances.items.filter(balance => balance.contract_name !== "Ether");
    const etherBalance = balances.items.find(balance => balance.contract_name === "Ether");

    return {
        balance: {
            name: etherBalance.contract_name,
            address: etherBalance.contract_address,
            amount: formatValueFromWeiToEther(etherBalance.balance),
            fiat_rate: etherBalance.quote_rate,
            fiat_value: etherBalance.quote,
            fiat_ticker: balances.quote_currency,
            logo: etherBalance.logo_url
        },
        positions: positions.map(position => ({
            name: position.contract_name,
            address: position.contract_address,
            amount: formatValueFromWeiToEther(position.balance),
            fiat_rate: position.quote_rate,
            fiat_value: position.quote,
            fiat_ticker: balances.quote_currency,
            logo: position.logo_url
        }))
    }
}

module.exports = {
    getBalances
}