'use strict';

const userModel=require('../model/User.model');

const UserController=(req,res)=>{
    const searchQ= req.query.email;
    userModel.find({email:searchQ},(error,user)=>{
        if(error){
            res.send('user not found');
        }else{
            res.json(user.books);
        }
    })
}


module.exports=UserController;