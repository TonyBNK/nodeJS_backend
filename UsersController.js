const {addUser, getUsers} = require("./repository");


exports.usersController = async (req, res) => {
    if (req.method === 'POST') {
        await addUser('Tobi');
        res.write(JSON.stringify({success: true}));
        res.end();
    } else {
        const users = await getUsers();
        res.write(JSON.stringify(users));
        res.end();
    }
}
