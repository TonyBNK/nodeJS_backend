const {addUser, getUsers} = require("./repository");
const express = require("express");


const router = express.Router();

router
    .get('/', async (req, res) => {
        const users = await getUsers();
        res.send(JSON.stringify(users));
    })
    .get('/:id', async (req, res) => {
        const users = await getUsers();
        const userId = req.params.id;
        debugger
        const user = users.find(u => u.id === +userId);
        if (user) {
            res.send(JSON.stringify(user));
        } else {
            res.send(404);
        }
    })
    .post('/', async (req, res) => {
        await addUser('Tobi');
        res.send(JSON.stringify({success: true}));
    })
    .use((req, res) => {
        res.send(404);
    });

module.exports = router;
