const httpService = require("./utils/http");
const { formatValueFromWeiToEther } = require("./utils/formatValue")

async function getBalances(walletAddress) {
    const response = await httpService.getBalances(walletAddress);

    const formatBalance = balance => ({
        name: balance.contract_name,
        address: balance.contract_address,
        amount: formatValueFromWeiToEther(balance.balance),
        fiat_rate: `${balance.quote_rate}`,
        fiat_value: `${balance.quote}`,
        fiat_ticker: response.quote_currency,
        logo: balance.logo_url
    })

    const balances = response.items.map(formatBalance);

    const balance = balances.find(({ name }) => name === "Ether");
    const positions = balances.filter(({ name }) => name !== "Ether");


    return {
        balance,
        positions
    }
}

module.exports = {
    getBalances
}