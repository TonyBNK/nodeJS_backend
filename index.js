const express = require('express');
const users = require('./users-router');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/nodeJS');
// }
//
// main().catch(err => console.log(err));

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app
    // .get('/', (req, res) => {
    //     res.send(`<h1>Home</h1>`);
    // })
    .get('/tasks', (req, res) => {
        res.send(`<h1>Tasks</h1>`);
    })
    //.use('/users', users)
    .use((req, res) => {
        res.send(404);
    });

app.listen(3010, () => {
    console.log(`Example app listening at port ${process.env.PORT}`);
});
