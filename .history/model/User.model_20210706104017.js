'use strict';

const mongoose = require('mongoose');
const bookSchema= require('../model/BookSchema.model');

const userDataDB = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

const userModel = mongoose.model('favbooks', userDataDB);


const userObject = () => {
    let data = new userModel({
        email: 'email@gmail.com',
        books: [{
            name: 'String',
            description: 'String',
            status: 'String'
        }]
    });
    console.log(data);
    data.save();
}

module.exports = userModel;
userModel();