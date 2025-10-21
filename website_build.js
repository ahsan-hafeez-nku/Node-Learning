const fs = require('fs');
const http = require('http')

http.createServer((req, resp) => {
    var url = req.url;
    if (url === '/') {
        fs.readFileSync('html/index.html', 'utf-8', (err, data) => {
            if (err) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                resp.end(`Internal Server Error: ${err.message}`);
                return;
            }
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.end(data);
        });
    }



}).listen(3800);
