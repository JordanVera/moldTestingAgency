const express = require("express");
const app = express();
const PORT = 8080 || process.env.PORT;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res ) => {
	res.send("index");
});

app.listen(PORT, () => { 
	console.log("Server is listening");
});
