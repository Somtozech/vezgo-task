function errorHandler(error) {
    process.exitCode = 1;

    console.error('An Error occured');
    error.message && console.error(error.message);
}

module.exports = errorHandler;