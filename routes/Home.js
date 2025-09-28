const express = require("express");
const handleDisplayMessages = require("../controller/handleDisplayMessages");
const handleOpenMessage = require("../controller/handleOpenMessage");

const homeRouter = express.Router();

homeRouter.get("/", handleDisplayMessages);
homeRouter.get("/:id", handleOpenMessage);

module.exports = homeRouter;
