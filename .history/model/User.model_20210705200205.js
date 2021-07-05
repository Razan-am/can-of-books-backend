const mongoose = require('mongoose');
const BookSchema= require('../model/BookSchema.model')

const userData = new mongoose.Schema({
    email: { type: String },
    books: [BookSchema]
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