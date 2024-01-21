const http = require('http');
const express = require('express');
const path = require("path");
const port = process.env.PORT || 3001;

function sendTemplate(res, file) {
    res.sendFile(`${path.join(process.cwd(), "./templates")}/${file}`);
}


const app = express();
app.use(express.static('static'));
const httpServer = http.createServer(app);

//
app.get("/", (req, res) => {
    sendTemplate(res, "index.html");
})


//
httpServer.listen(port, "0.0.0.0", () => {
    console.log("Server up!");
});