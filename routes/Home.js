const express = require("express");
const handleDisplayMessages = require("../middleware/handleDisplayMessages");
const handleOpenMessage = require("../middleware/handleOpenMessage");

const homeRouter = express.Router();

homeRouter.get("/", handleDisplayMessages);
homeRouter.get("/:id", handleOpenMessage);

module.exports = homeRouter;
