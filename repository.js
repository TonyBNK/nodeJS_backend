const {readJSONFromFile, writeJSONToFile} = require("./fs-utils");


const getUsers = () => {
    return readJSONFromFile('users.json');
}

const addUser = async (name) => {
    const users = await getUsers();
    users.push({id: 3, name});

    return writeJSONToFile('users.json', users);
}

exports.getUsers = getUsers;
exports.addUser = addUser;
