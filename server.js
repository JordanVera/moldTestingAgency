const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.static(__dirname + "/public"));

app.get("/", (req, res ) => {
	res.send("index");
});

app.listen(PORT, () => { 
	console.log("Server is listening");
});
