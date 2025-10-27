import { getUserData } from "../model/user_data.js";

export function renderLoginPage(req, resp) {
    resp.render('login');
}
export function renderUserData(req, resp) {
    var data = req.body;
    // console.log(data);
    resp.render('submit', { name: data.name, age: data.age, email: data.email, password: data.password, users: getUserData() });
}
export function renderHomeScreen(req, resp) {
    resp.render('home', { name: "Ahsan Hafeez", age: 24, email: "ahsanhafeez0324@gmail.com", learning: "Node.js", pageTitle: "Home Page" });
}

export function showListOfUsers(req, resp) {
    const users = getUserData();
    var data = ``;
    data += `<h1>List of Users and their pages</h1>`
    for (let i = 0; i < users.length; i++) {
        data += `<ul>`
        data += `<li><a href="/userPage/user/${users[i]}">${users[i].charAt(0).toUpperCase() + users[i].slice(1)}</a></li>`;
        data += `</ul>`
    }
    resp.send(data);
}
export function renderUserPages(req, resp) {
    var userName = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1);
    console.log(userName);
    resp.send(`
        <h1>This is user Page</h1>
        <p>Showing profile of ${userName}</p>
        `);
}