const UserModel=require('../model/User.model');

const UserController=(req,res)=>{
    let useremail;
  useremail=req.query.useremail
  UserModel.find({email:useremail},(error,user)=>{
    if (error){
      res.send(error.message)
    }
    res.send(user)
  })
}


module.exports=UserController