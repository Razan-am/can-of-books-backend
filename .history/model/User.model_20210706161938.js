'use strict';

const mongoose = require('mongoose');
const bookSchema= require('../model/BookSchema.model');

const userDataDb = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});

const userModel = mongoose.model('userDataDb', userDataDb);

const RazanSeed = () => {
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
        books: [YearOfYes,TheLittlePrince,BridgetJones]
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
    const TheTaoOfPooh={
        name:'The Tao Of Pooh',
        description:'Authered by Bemjemain',
        status:'active'
    }
    
    const munther = new userModel({
        email: 'munther.abdlrahman@gmail.com',
        books: [TheAlchemist,Brenadette,TheTaoOfPooh]
    });

    munther.save();
    console.log('munther',munther);
    return (munther);
}

const MaysaaSeed = () => {
    const TheHappinessProject={
        name:'The Happeness Project',
        description:'Authered by Gabrielle',
        status:'Finish'
    }
    const StoriedLife= {
        name:'The Storied Life of A.J.Fikry',
        description:'Authered by Zevin',
        status:'finish'
    }
    const WangsVsWorld={
        name:'The Wangs Vs The Worlds',
        description:'Authered by Jade ',
        status:'active'
    }
    
    const maysaa = new userModel({
        email: 'maysaa@gmail.com',
        books: [TheHappinessProject,StoriedLife,WangsVsWorld]
    });

    maysaa.save();
    console.log('maysaa',maysaa);
    return (maysaa);
}

module.exports = RazanSeed;
