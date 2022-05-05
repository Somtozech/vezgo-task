const { getBalances } = require("./balances")

async function walletInfo(walletAddress) {
    const { positions, balance } = await getBalances(walletAddress);

    return { positions, balance }
}

module.exports = walletInfo;