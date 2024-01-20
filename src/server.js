const http = require('http');
const express = require('express');
const path = require("path");


function sendTemplate(res, file) {
    res.sendFile(`${path.join(process.cwd(), "./templates")}/${file}`);
}


const app = express();
const httpServer = http.createServer(app);

//
app.get("/", (req, res) => {
    sendTemplate(res, "index.html");
})

app.get("/static/:subDir/:file", async (req, res) => {
    const { subDir, file } = req.params;
    res.sendFile(path.join(process.cwd(), `./static/${subDir}/${file}`));
})


//
httpServer.listen(8080, "0.0.0.0", () => {
    console.log("Server up!");
});