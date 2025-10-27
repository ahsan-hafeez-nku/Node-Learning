import express from 'express'
import { renderHomeScreen, renderLoginPage, renderUserData, renderUserPages, showListOfUsers } from './controller/user_controller.js';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', renderHomeScreen);
app.get('/login', renderLoginPage);
app.post('/submit', renderUserData);
app.get('/userPage', showListOfUsers);
app.get('/userPage/user/:name', renderUserPages);

app.listen(2200);   