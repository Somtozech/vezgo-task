const ethers = require("ethers")

function formatValueFromWeiToEther(value) {
    return ethers.utils.formatEther(value);
}

module.exports = {
    formatValueFromWeiToEther
}