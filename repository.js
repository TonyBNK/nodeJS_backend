const fs = require('fs');


const getUsers = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('users.json', (err, buf) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(buf.toString()));
        })
    });
}

const addUser = (name) => {
    users.push({id: 3, name});
}

exports.getUsers = getUsers;
exports.addUser = addUser;
