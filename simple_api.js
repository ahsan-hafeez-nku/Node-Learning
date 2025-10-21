const http = require('http');

const userData =[ 
    {
        name:'Ahsan',
        age:20,
        email:'ahsan@gmail.com'
    },
    {
        name:'Asad',
        age:22,
        email:'asad@gmail.com'
    },
    {
        name:'Ali',
        age:16,
        email:'ali@gmail.com'
    },
    
]
  //      resp.write(JSON.stringify(userData));

server = http.createServer((req, resp)=>{
    resp.setHeader('content-type','text/html');
    if(req.url=='/'){
        resp.write(`<h1>This is the Main Page</h1>`);
    }
    else if(req.url=='/home'){
        resp.write(`<h1>This is the Home Page</h1>`);

    }

    resp.end();
}).listen(4800);