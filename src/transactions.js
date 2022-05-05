const { formatValueFromWeiToEther } = require("./utils/formatValue");
const httpService = require("./utils/http");

async function getTransactions(walletAddress) {
    const response = await httpService.getTransactions(walletAddress);

    const transactions = response.items.map((transaction) => ({
        transaction_type:
            transaction.from_address.toLowerCase() === walletAddress.toLowerCase()
                ? "sent"
                : "receive",
        success: transaction.successful,
        from: transaction.from_address,
        to: transaction.to_address,
        tx_hash: transaction.tx_hash,
        amount: formatValueFromWeiToEther(transaction.value),
        fiat_value: transaction.value_quote,
        fees_paid: formatValueFromWeiToEther(transaction.fees_paid),
        fees_paid_in_fiat: transaction.gas_quote,
        ticker: response.quote_currency
    }));

    return {
        transactions
    };
}

module.exports = {
    getTransactions
};
