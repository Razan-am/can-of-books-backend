'use strict';

const mongoose = require('mongoose');
const bookSchema= require('../model/BookSchema.model');

const userDataDb = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

const userModel = mongoose.model('userDataDb', userDataDb);

const userSeed = () => {
    const YearOfYes={
        name:'Year Of Yes',
        description:'Shonda Rhimes',
        status:'active'
    }
    const TheLittlePrince= {
        name:'The Little Prince',
        description:'Dimpoly',
        status:'active'
    }
    const BridgetJones={
        name:'Bridget Jones Diary',
        description:'authered by zu',
        status:'active'
    }
    const razan = new userModel({
        email: 'razanalamleh@gmail.com',
        books: [flawsOfPower,artOfWar,mySystem]
    });
    razan.save();
    console.log(razan);
    return (razan);
}
const montherSeed = () => {
    const lalallland={
        name:'lalallla',
        description:'authered by robert',
        status:'active'
    }
    const war= {
        name:'war',
        description:'authered by nizomaki',
        status:'active'
    }
    const mySystem={
        name:'new',
        description:'authered by zu',
        status:'active'
    }
    
    const munther = new userModel({
        email: 'munther.abdlrahman@gmail.com',
        books: [artOfWar,flawsOfPower,mySystem]
    });

    munther.save();
    console.log('munther',munther);
    return (munther);
}

module.exports = montherSeed;
