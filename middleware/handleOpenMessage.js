const messages = require("../data");
const CustomError = require("../error/CustomError");

function handleOpenMessage(req, res) {
    const { id } = req.params;

    const message = messages[id - 1];
    if (!message) {
        throw new Error("Could not find the message", 404);
    }
    res.render("message", { message });
}

module.exports = handleOpenMessage;
