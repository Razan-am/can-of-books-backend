const userModel=require('../model/User.model');

const UserController=(req,res)=>{
    let useremail;
  useremail=req.query.useremail
  booksdata=req.query.booksdata
  userModel.find({email:useremail,books:},(error,user)=>{
    if (error){
      res.send(error.message)
    }
    res.send(user)
  })
}


module.exports=UserController