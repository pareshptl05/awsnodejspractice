
const http = require('http');

var server=http.createServer((request,response)=>{
    console.log("request is received from client");
    response.write("<h1>welcome</h1>");
    response.end();
});

server.listen(9000);
console.log("HTTP server is listening on port 9000");