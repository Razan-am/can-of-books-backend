'use strict'

const seedUser=require('../model/User.model');

const UserController=(req,res)=>{
   const userObject=seedUser();
    res.json(userObject)
}


module.exports=UserController