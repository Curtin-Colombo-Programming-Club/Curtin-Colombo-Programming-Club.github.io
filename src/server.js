const http = require('http');
const express = require('express');
const path = require("path");

const app = express();
const httpServer = http.createServer(app);

function sendTemplate(res, file) {
    res.sendFile(`${path.join(process.cwd(), "./templates")}/${file}`);
}

// templates
app.get("/", (req, res) => {
    sendTemplate(res, "index.html");
})


// static
app.get("/static/:subDir/:file", async (req, res) => {
    const { subDir, file } = req.params;
    res.sendFile(path.join(process.cwd(), `./static/${subDir}/${file}`));
});

if (require.main === module) {
    httpServer.listen(8080, "0.0.0.0", () => {
        console.log("Server up! http://localhost:8080");
    });
}


module.exports = app;