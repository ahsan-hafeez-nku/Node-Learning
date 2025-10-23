import express from 'express';
import userData from './json/user_data.json' with {type: 'json'};

const app = express();
app.get('/', (req, resp) => {
    resp.send(userData);
});
app.listen(6400);

app.get('/user/:name', (req, resp) => {
    const name = req.params.name;
    console.log(name);
    const filteredUser = userData.filter(user => user.name === name);
    resp.send(filteredUser);
});
