'use strict';

const userModel=require('../model/User.model');

const UserController=(req,res)=>{
    const searchQ= req.query.email;
    userModel.find({email:searchQ},(error,user)=>{
        if(error){
            res.send('user not found');
        }else{
            console.log(user.books)
            res.json(user);
        }
    })
}


module.exports=UserController;