const http = require('http');
const handler = require('./handler.js');

const server = new http.Server();

server.on('request', handler);

server.listen(process.env.PORT || 3000);
