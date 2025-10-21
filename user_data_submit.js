const fs = require('fs');
const queryString = require('querystring');
const colors = require('colors'); // correct variable name


function userDataSubmit(
    req, resp
) {
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.write(`<h1>Form Submitted</h1>`);

    let dataChunks = [];
    req.on('data', (chunk) => {
        dataChunks.push(chunk);
    });

    req.on('end', () => {
        const string = Buffer.concat(dataChunks).toString();
        console.log(colors.blue(string));

        const queryObjects = queryString.parse(string);
        console.log(queryObjects);

        resp.write(`<h3>${queryObjects.name} and ${queryObjects.email}</h3>`);
        let dataString = `My name is ${queryObjects.name} and email is ${queryObjects.email}`;
        // fs.writeFileSync('text/' + queryObjects.name + '.txt', dataString);
        // console.log('File Created');
        fs.writeFile('text/' + queryObjects.name + '.txt', dataString, (err) => {
            if (err) {
                console.log(err);
                return false;
            } else {
                console.log('File Created');

            }
        })

        resp.end();
    });


}
module.exports = userDataSubmit;