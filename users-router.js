const {addUser, getUsers, removeUser, changeUserName} = require("./repository");
const express = require("express");


const router = express.Router();

router
    .get('/', async (req, res) => {
        let users = await getUsers(req.query.search);
        res.send(JSON.stringify(users));
    })
    .get('/:id', async (req, res) => {
        const users = await getUsers();
        const userId = req.params.id;
        const user = users.find(u => u.id === +userId);
        if (user) {
            res.send(JSON.stringify(user));
        } else {
            res.send(404);
        }
    })
    .post('/', async (req, res) => {
        await addUser(req.body.name);
        res.send(JSON.stringify({success: true}));
    })
    .delete('/:id', async (req, res) => {
        await removeUser(req.params.id);
        res.send(204);
    })
    .put('/:id', async (req, res) => {
        await changeUserName(req.params.id, req.body.name);
        res.send(200);
    })
    .use((req, res) => {
        res.send(404);
    });

module.exports = router;
