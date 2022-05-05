const { getBalances } = require("./balances");
const { getTransactions } = require("./transactions")

async function getWalletDetails(walletAddress) {
    const { positions, balance } = await getBalances(walletAddress);
    const { transactions } = await getTransactions(walletAddress)

    return { positions, balance, transactions }
}

module.exports = getWalletDetails;