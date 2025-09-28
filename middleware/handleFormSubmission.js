const messages = require("../data");

function handleFormSubmission(req, res) {
    const { user, text } = req.body;
    messages.push({ user, text, added: new Date() });
    res.redirect("/");
}

module.exports = handleFormSubmission;
