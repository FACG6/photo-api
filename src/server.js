const http = require('http');
const router = require('./router');

const port = process.env.PORT || 4004;


const server = http.createServer(router);

server.listen(port, () => {
  console.log(`server is run${port}`);
});
