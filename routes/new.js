const express = require("express");
const handleNewMessage = require("../controller/handleNewMessage");

const newMessageRouter = express.Router();

newMessageRouter.get("/", handleNewMessage.createMessage);
newMessageRouter.post("/", handleNewMessage.submitMessage);

module.exports = newMessageRouter;
