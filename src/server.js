const http = require('http');
const express = require('express');
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;
app.use(express.static('static'));
const httpServer = http.createServer(app);

function sendTemplate(res, file) {
    res.sendFile(`${path.join(process.cwd(), "./templates")}/${file}`);
}

//
app.get("/", (req, res) => {
    sendTemplate(res, "index.html");
})

if (require.main === module) {
    httpServer.listen(port, "0.0.0.0", () => {
        console.log("Server up!");
    });
}


module.exports.app = app;
module.exports.httpServer = httpServer;