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
        description:'Authered by Shonda Rhimes',
        status:'Finish'
    }
    const TheLittlePrince= {
        name:'The Little Prince',
        description:'Authered by Dimpoly',
        status:'Finish'
    }
    const BridgetJones={
        name:'Bridget Jones Diary',
        description:'Authered by Samantha ',
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
    const TheAlchemist={
        name:'The Alchemist',
        description:'Authered by Paulo Ceolho',
        status:'Finish'
    }
    const Brenadette= {
        name:'Where You Go Brenadette',
        description:'Authered by Maria Semple',
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
