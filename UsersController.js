const {addUser, getUsers} = require("./repository");


const usersController = (req, res) => {
    if (req.method === 'POST') {
        addUser('Tobi');
        res.write(JSON.stringify({success: true}));
    } else {
        res.write(JSON.stringify(getUsers()));
    }
}

exports.usersController = usersController;
