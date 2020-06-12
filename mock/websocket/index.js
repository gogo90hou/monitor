const http = require('http');
const sockjs = require('sockjs');

const echo = sockjs.createServer({ prefix: '/echo' });
console.log(echo)
echo.on('connection', function (conn) {
  conn.on('data', function (message) {
    conn.write(message);
  });
  conn.on('close', function () { });
});

const server = http.createServer();
echo.installHandlers(server);
server.listen(9999, 'localhost');
