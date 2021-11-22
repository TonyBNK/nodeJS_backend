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

const addUser = async (name) => {
    const users = await getUsers();
    users.push({id: 3, name})

    return new Promise((resolve, reject) => {
        fs.writeFile('users.json', JSON.stringify(users), (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

exports.getUsers = getUsers;
exports.addUser = addUser;
