//Dependencies
const http = require ('http');
const app = require('./app');

//initilize port and server
const port = process.env.PORT || 5000;
const server = http.createServer(app);

//Listen for request
server.listen(port);
