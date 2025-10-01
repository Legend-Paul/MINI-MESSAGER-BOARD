const ConnectionParameters = require("pg/lib/connection-parameters");
const query = require("../db/query");
const CustomError = require("../error/CustomError");

async function handleOpenMessage(req, res) {
    const { id } = req.params;

    const result = await query.getMessage(id);
    const message = result.rows[0];
    if (!message) {
        throw new CustomError("Could not find the message", 404);
    }
    res.render("message", { message, id });
}

async function handleDisplayMessages(req, res) {
    try {
        const result = await query.getAllMessages();
        const messages = result.rows || [];
        res.render("home", { messages });
    } catch (err) {
        res.status(500).render("error", {
            message: "Failed to load messages",
            statusCode: 500,
        });
    }
}

async function handleDeleteMessage(req, res) {
    const { id } = req.params;
    await query.deleteMessage(id);
    res.redirect("/");
}

function handleGetEditMessage(req, res) {
    const { id } = req.params;
    query
        .getMessage(id)
        .then((result) => {
            const message = result.rows[0];
            res.render("new", { message });
        })
        .catch(() => {
            res.render("new", { message: null });
        });
}

async function handlePostEditMessage(req, res) {
    const { id } = req.params;
    const { user, text } = req.body;
    const date = new Date();
    await query.updateMessage(id, user, text, date);
    res.redirect("/");
}
module.exports = {
    handleOpenMessage,
    handleDisplayMessages,
    handleDeleteMessage,
    handleGetEditMessage,
    handlePostEditMessage,
};
