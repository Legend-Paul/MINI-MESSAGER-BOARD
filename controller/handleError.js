function handleError(err, req, res, next) {
    const { message, statusCode } = err;
    res.status(statusCode).render("error", { message, statusCode });
}

module.exports = handleError;
