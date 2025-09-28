const express = require("express");
const path = require("node:path");
const homeRouter = require("./routes/Home");

const app = express();
const PORT = 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", homeRouter);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("Server running at port", PORT);
});
