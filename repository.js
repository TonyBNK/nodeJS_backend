const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model('user', userSchema);

const getUsers = () => {
    return User.find();
}

const addUser = async (name) => {
    const user = new User({name});
    return user.save();
}

const removeUser = async (_id) => {
    return User.deleteOne({_id});
}

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.removeUser = removeUser;
