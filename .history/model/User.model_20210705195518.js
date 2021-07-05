const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    email: { type: String },
    books: { type: Array }
})

const UserModel = mongoose.model('testingbooks', userData);



const userObject = () => {
    let data = new UserModel({
        email: 'email@gmail.com',
        books: `hello`
    });
    console.log('user', data)
    data.save();
}

module.exports = UserModel;