const messages = require("../data");

function handleOpenMessage(req, res) {
    const { id } = req.params;

    const message = messages[id - 1];
    if (!message) {
        throw new Error("Could not find the message");
    }
    res.render("message", { message });
}

module.exports = handleOpenMessage;
