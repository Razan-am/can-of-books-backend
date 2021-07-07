'use strict';

const userModel=require('../model/User.model');

const UserController=(req,res)=>{
    
    const searchQ= req.query.email;
    console.log('req.query.email',req.query.email)
    userModel.findOne({email:searchQ},(error,user)=>{
    
        if(!user){
            res.send('user not found');
        }else{
            // console.log(user.books)
            res.json(user.books);
        }
    })
}


module.exports=UserController;