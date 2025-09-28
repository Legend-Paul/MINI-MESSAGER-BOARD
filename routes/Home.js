const express = require("express");
const handleDisplayMessages = require("../middleware/handleDisplayMessages");

const homeRouter = express.Router();

homeRouter.get("/", handleDisplayMessages);

module.exports = homeRouter;
