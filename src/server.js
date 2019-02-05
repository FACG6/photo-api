const http = require('http');
const request =require('request');
const router = require('./router');
const server =http.createServer(router);
const port =process.env.PORT || 4004;
server.listen(port ,()=>{
    console.log(`server is run${port}`);
})