const messages = require("../data");
const { body, validationResult } = require("express-validator");

const message = "must contain aleast 2 letter";
const validate = [
    body("user").trim().isLength({ min: 2 }).withMessage(`User ${message}`),
    body("text").trim().isLength({ min: 2 }).withMessage(`Text ${message}`),
];

const handleFormSubmission = [
    validate,
    (req, res) => {
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).render("new", { errors: errors.array() });
        }
        const { user, text } = req.body;
        messages.push({ user, text, added: new Date() });
        res.status(201).redirect("/");
    },
];

module.exports = handleFormSubmission;
