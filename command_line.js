const http = require('http');


console.log('Ahsan Hafeez');
const arg = process.argv;
console.log(arg);
const port = arg[2];

http.createServer((req, resp)=>{
    resp.setHeader('content-type','text/html');
    resp.write('<h1>This is a new Server<\h1>');
    resp.end();
}).listen(port);
