const { app, httpServer } = require("./src/server");

if (require.main === module) {
    httpServer.listen(port, "0.0.0.0", () => {
        console.log("Server up!");
    });
}