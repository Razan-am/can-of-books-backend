'use strict';

const mongoose = require('mongoose');
const bookSchema= require('../model/BookSchema.model');

const userDataDb = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

const userModel = mongoose.model('userDataDb', userDataDb);

const userSeed = () => {
    const flawsOfPower={
        name:'48 laws of power',
        description:'authered by robert',
        status:'active'
    }
    const artOfWar= {
        name:'art of war',
        description:'authered by nizomaki',
        status:'active'
    }
    const mySystem={
        name:'my system',
        description:'authered by zu',
        status:'active'
    }
    const razan = new userModel({
        email: 'razanalamleh@gmail.com',
        books: [flawsOfPower,artOfWar,mySystem]
    });
    const munther = new userModel({
        email: 'munther.abdlrahman@gmail.com',
        books: [flawsOfPower,artOfWar,mySystem]
    });
    razan.save();
    console.log(razan);
    return (razan)
}

module.exports = userModel;
