const express = require("express");
const handleCreateNewMessage = require("../middleware/handleCreateNewMessage");

const newMessageRouter = express.Router();

newMessageRouter.get("/", handleCreateNewMessage);

module.exports = newMessageRouter;
