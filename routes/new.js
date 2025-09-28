const express = require("express");
const handleCreateNewMessage = require("../controller/handleCreateNewMessage");
const handleFormSubmission = require("../controller/handleFormSubmission");

const newMessageRouter = express.Router();

newMessageRouter.get("/", handleCreateNewMessage);
newMessageRouter.post("/", handleFormSubmission);

module.exports = newMessageRouter;
