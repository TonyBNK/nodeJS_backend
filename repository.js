const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model('user', userSchema);

const getUsers = (search) => {
    if (!search) {
        return User.find();
    } else {
        return User.find({name: new RegExp(search)});
    }
}

const getUser = (_id) => {
    return User.findOne({_id});
}

const addUser = async (name) => {
    const user = new User({name});
    return user.save();
}

const removeUser = async (_id) => {
    return User.deleteOne({_id});
}

const changeUserName = async (_id, name) => {
    return User.findByIdAndUpdate(_id, {name});
}

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.addUser = addUser;
exports.removeUser = removeUser;
exports.changeUserName = changeUserName;
