function logger(req, res, next) {
    const date = new Date();
    console.log(`какой-то чувак зашел на сервер, ${date.getHours()}:${date.getMinutes()}`);
    next();
}

module.exports = logger;