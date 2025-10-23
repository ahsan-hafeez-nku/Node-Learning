// const express = require('express')();
import express from 'express';
import morgan from 'morgan';


import path from 'path'
import home from './pages/home.js';
import loginHtml from './pages/login.js';
import contact, { about } from './pages/contact.js';
const app = express();
const absPath = path.resolve("html",);
const cssPath = path.resolve("css");
console.log("Absolute Path for HTML: " + absPath);
console.log("Absolute Path for CSS: " + cssPath);
app.use('/css', express.static(cssPath));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

function ageCheck(req, resp, next) {
    if (req.query.age < 18 || !req.query.age) {
        resp.send('Alert! You are not eligible');
    }
    else {
        next();
    }
}



app.get('/', (req, resp) => {
    resp.send(home());
});

app.get('/login', ageCheck, (req, resp) => {
    resp.send(loginHtml());
});

app.get('/read', (req, resp) => {
    console.log(absPath + '/index.html');
    resp.sendFile(absPath + '/index.html');
});

app.get("/wait", (req, resp) => {
    setTimeout(() => {
        resp.send('<h1>Home Page</h1>');
    }, 2000);
});

app.get('/contact', (req, resp) => {
    resp.send(contact());
});
app.get("/service", (req, resp) => {
    resp.sendFile(absPath + "/service.html");
});
app.get("/error", (req, resp, next) => {
    var error = new Error('');
    error.status = 403;
    next(error);
});

app.post('/submit', (req, resp) => {
    resp.send(`<h1>Data Submitted </h1>
        <a href="/" >Go to home</a>`);
    console.log(req.body);
});

app.listen(6800);

app.use((req, resp) => {
    resp.status(404).sendFile(absPath + '/404.html')
})

app.use((error, req, resp, next) => {
    resp.status(error.status || 500).send('Something went wrong, try again later');

})