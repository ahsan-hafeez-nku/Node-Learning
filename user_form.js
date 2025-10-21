const fs = require('fs');


function readUserForm(
    req, resp
) {
    fs.readFile('html/index.html', 'utf-8', (err, data) => {
        if (err) {
            resp.writeHead(500, { 'Content-Type': 'text/plain' });
            resp.end(`Internal Server Error: ${err.message}`);
            return;
        }
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.end(data);
    });
}
module.exports = readUserForm;