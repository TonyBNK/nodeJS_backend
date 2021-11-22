const {usersController} = require("./UsersController");
const express = require('express');
const {addUser} = require("./repository");


const app = express();
const port = 3010;

app.get('/', (req, res) => {
    res.send(`<h1>Home</h1>`);
});

app.get('/users', async (req, res) => {
    const users = await usersController(req, res);
    res.send(JSON.stringify(users));
});

app.post('/users', async (req, res) => {
    await addUser('Tobi');
    res.send(JSON.stringify({success: true}));
});

app.get('/tasks',(req, res) => {
    res.send(`<h1>Tasks</h1>`);
});

app.use((req, res) => {
   res.send(404);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
