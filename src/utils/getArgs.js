function getArg(key) {
    const args = process.argv;

    for (let arg of args) {
        if (arg.startsWith(`${key}=`)) return arg.replace(`${key}=`, '')
    }

    return null;
}

module.exports = getArg;