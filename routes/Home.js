const express = require("express");
const homeHandler = require("../controller/homeHandler");
const homeRouter = express.Router();

homeRouter.get("/", homeHandler.handleDisplayMessages);
homeRouter.get("/:id", homeHandler.handleOpenMessage);
homeRouter.delete("/delete/:id", homeHandler.handleDeleteMessage);
homeRouter.get("/edit/:id", homeHandler.handleGetEditMessage);
homeRouter.post("/edit/:id", homeHandler.handlePostEditMessage);

module.exports = homeRouter;
