const {readJSONFromFile, writeJSONToFile} = require("./fs-utils");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model('User', userSchema);

const getUsers = () => {
    return readJSONFromFile('users.json');
}

const addUser = async (name) => {
    const user = new User({name});
    return user.save();

    // const users = await getUsers();
    // users.push({id: 3, name});
    //
    // return writeJSONToFile('users.json', users);
}

exports.getUsers = getUsers;
exports.addUser = addUser;
