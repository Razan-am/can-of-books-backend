'use strict'
const userSeed=require('../model/User.model');
const {
    montherSeed,
    Raza
    =require('../model/User.model')

const testCountroller =(req,res)=>{
    // res.send('Hello World');
    // const userObject=userSeed();
    // res.json(userObject)

    const userObject=montherSeed();
    res.json(userObject)
}

module.exports=testCountroller;