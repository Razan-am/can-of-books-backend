const userModel=require('../model/User.model');

const UserController=(req,res)=>{
    let useremail;
  useremail=req.query.useremail
  userModel.find({email:useremail,books},(error,user)=>{
    if (error){
      res.send(error.message)
    }
    res.send(user)
  })
}


module.exports=UserController