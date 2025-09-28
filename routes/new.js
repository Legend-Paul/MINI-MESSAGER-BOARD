const express = require("express");
const handleCreateNewMessage = require("../middleware/handleCreateNewMessage");
const handleFormSubmission = require("../middleware/handleFormSubmission");

const newMessageRouter = express.Router();

newMessageRouter.get("/", handleCreateNewMessage);
newMessageRouter.post("/", handleFormSubmission);

module.exports = newMessageRouter;
