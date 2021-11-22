const {addUser, getUsers} = require("./repository");
const express = require("express");


const router = express.Router();

router
    .get('/', async (req, res) => {
        const users = await getUsers();
        res.send(JSON.stringify(users));
    })
    .post('/', async (req, res) => {
        await addUser('Tobi');
        res.send(JSON.stringify({success: true}));
    })
    .use((req, res, next) => {
        console.log(`Time: ${Date.now()}`);
        next();
    });

module.exports = router;
