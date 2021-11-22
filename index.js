const express = require('express');
const users = require('./users-router');


const app = express();
const port = 3010;

app
    .get('/', (req, res) => {
        res.send(`<h1>Home</h1>`);
    })
    .get('/tasks', (req, res) => {
        res.send(`<h1>Tasks</h1>`);
    })
    .use('/users', users)
    .use((req, res) => {
        res.send(404);
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
