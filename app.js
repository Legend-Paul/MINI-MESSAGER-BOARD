const express = require("express");
const path = require("node:path");
const homeRouter = require("./routes/Home");
const newMessageRouter = require("./routes/new");
const handleError = require("./controller/handleError");
const pool = require("./db/pool");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newMessageRouter);
app.use("/", homeRouter);

app.use(handleError);

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("Server running at port", PORT);
});
