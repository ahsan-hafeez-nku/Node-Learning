const http = require('http');
var age = 20;
http.createServer((req, resp)=>{
    resp.setHeader('content-type','text/html');
    // resp.write('<h1>This is a new Server<\h1>');

    resp.write(
        `
        <html>
        <head>
            <title>Node Tutorial</title>
        </head>
        <body>
            <h1>This is a new Server<\h1>
            <h2>This is a  using nodemon package for this.<\h2>
            <h3>Age: `+age+` <\h3>
            <h3>Age: `+new Date()+` <\h3>
        </body>
        </html>

        `
        
        );
    resp.end();
    // process.end();

}).listen(4800);


// var fs = require('fs');
// var os = require('os');

// fs.writeFileSync('NewFile.txt','Hello World');

// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());



// var {userName} = require('./data');
// console.log(userName);


// console.log('Hello World!');
// console.log(20+20);

// function add(num1, num2){
//     return console.log(num1+num2);
// }

// add(2002,5);