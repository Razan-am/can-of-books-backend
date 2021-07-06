const mongoose = require('mongoose');
const BookSchema= require('../model/BookSchema.model')


const userDataDB = new mongoose.Schema({
    email: { type: String },
    books: [BookSchema]
})

const userModel = mongoose.model('bookscollections', userDataDB);


const userObject = () => {
    let data = new userModel({
        email: 'email@gmail.com',
        books: [{
            name: 'String',
            description: 'String',
            status: 'String'
        }]
    });
    console.log(data)
    data.save();
}

module.exports = userModel;
userModel();