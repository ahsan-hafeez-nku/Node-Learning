const http = require('http');
const readUserForm = require('./user_form');
const userDataSubmit = require('./user_data_submit');
http.createServer((req, resp) => {
    if (req.url === '/') {
        readUserForm(req, resp);
    }

    else if (req.url === '/submit' && req.method === 'POST') {
        userDataSubmit(req, resp);
    }

    else {
        resp.writeHead(404, { 'Content-Type': 'text/html' });
        resp.end('<h1>404 Not Found</h1>');
    }

}).listen(6800, () => {
    console.log('Server running on http://localhost:6800');
});