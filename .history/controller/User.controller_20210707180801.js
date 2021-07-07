'use strict';

const userModel=require('../model/User.model');

const UserController=(req,res)=>{
    const searchQ= req.query.email;
    userModel.findOne({email:searchQ},(error,user)=>{
        if(!user){
            res.send('user not found');
        }else{
            // console.log(user.books)
            res.json(user.books);
        }
    })
}

const userPost =(req,res)=>{
    const{
        userEmail,
        bookName,
        bookDescreption,
        bookStatus
    }=req.body;
    console.log(req.body)
    userModel.find({email:userEmail},(error,user)=>{
        if(error){
            res.send('user not found');
        }else{
            const newBook = {
                name:bookName,
                description:bookDescreption,
                status:bookStatus
            }
            user.books.push(newBook)
            user.save();
            console.log(user.books);
            res.json(user.books);
        }
    })
}

module.exports={
    UserController,
    userPost
}