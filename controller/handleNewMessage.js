const { body, validationResult } = require("express-validator");
const { insertMessage } = require("../db/query");

const message = "must contain aleast 2 letter";
const validate = [
    body("user").trim().isLength({ min: 2 }).withMessage(`User ${message}`),
    body("text").trim().isLength({ min: 2 }).withMessage(`Text ${message}`),
];

const submitMessage = [
    validate,
    async (req, res) => {
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).render("new", { errors: errors.array() });
        }
        const { user, text } = req.body;
        const date = new Date();

        await insertMessage(user, text, date);
        res.redirect("/");
    },
];

function createMessage(req, res) {
    res.render("new", { action: "/new" });
}

module.exports = { createMessage, submitMessage };
