'use strict'
const userSeed=require('../model/User.model');
const {
    montherSeed,
    RazanSeed
}=require('../model/User.model')

const testCountroller =(req,res)=>{
    // res.send('Hello World');
    // const userObject=userSeed();
    // res.json(userObject)

    // const userObject=montherSeed();
    const userObject=RazanSeed();

    res.json(userObject)
}

module.exports=testCountroller;