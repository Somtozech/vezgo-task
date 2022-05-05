#!/usr/bin/env node

const errorHandler = require("../src/utils/errorHandler");
const getWalletDetails = require("../src/index");
const getArg = require("../src/utils/getArgs");

(async function main() {
    process.on('uncaughtException', errorHandler);
    process.on('unhandledRejection', errorHandler);

    try {
        const walletAddress = getArg("--wallet");

        if (!walletAddress) {
            throw new Error("Ethereum wallet address is required")
        }

        const result = await getWalletDetails(walletAddress);

        console.log(JSON.stringify(result));
    } catch (error) {
        errorHandler(error)
    }


})()