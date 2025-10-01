const express = require("express");
const homeHandler = require("../controller/homeHandler");
const homeRouter = express.Router();

homeRouter.get("/", homeHandler.handleDisplayMessages);
homeRouter.get("/:id", homeHandler.handleOpenMessage);
homeRouter.delete("/delete/:id", homeHandler.handleDeleteMessage);
// homeRouter.put("/edit/:id", handleOpenMessage);

module.exports = homeRouter;
