const app = require("./src/server");

const server = app.listen(port, () => console.log(`app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;