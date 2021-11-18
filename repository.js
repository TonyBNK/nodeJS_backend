const users = [{id: 1, name: "Nash"}, {id: 2, name: "Jason"}];

const getUsers = () => {
    return users;
}

const addUser = (name) => {
    users.push({id: 3, name});
}

exports.getUsers = getUsers;
exports.addUser = addUser;
