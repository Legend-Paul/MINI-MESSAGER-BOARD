function handleError(err, req, res, next) {
    const { message, statusCode } = err;
    const code = Number.isInteger(statusCode) ? statusCode : 500;
    res.status(code).render("error", { message, statusCode: code });
}

module.exports = handleError;
