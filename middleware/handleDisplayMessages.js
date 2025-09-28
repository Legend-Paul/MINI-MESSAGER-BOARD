const messages = require("../data");

function handleDisplayMessages(req, res) {
    res.render("home", { messages });
}

module.exports = handleDisplayMessages;
