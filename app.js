const express = require("express");
const path = require("node:path");

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");


app.listen(PORT, (err)=>{
	if(err) throw err;
	console.log("Server running at port", PORT)
})
