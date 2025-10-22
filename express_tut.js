// const express = require('express')();
import express from 'express';
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

app.get('/', (req, resp) => {
    resp.send(home());
});

app.get('/login', (req, resp) => {
    resp.send(loginHtml());
});

app.get('/read', (req, resp) => {
    console.log(absPath + '/index.html');
    resp.sendFile(absPath + '/index.html');
});


app.get('/contact', (req, resp) => {
    resp.send(contact());
});
app.get("/service", (req, resp) => {
    resp.sendFile(absPath + "/service.html");
});

app.post('/submit', (req, resp) => {
    resp.send(`
        <h1>Data Submitted </h1>
    <a href="/" >Go to home</a>

        `);
});

app.use((req, resp) => {
    resp.status(404).sendFile(absPath + '/404.html')
})

app.listen(6800);