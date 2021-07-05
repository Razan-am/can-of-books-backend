const userModel=require('../model/User.model');

const UserController=(req,res)=>{
    let useremail;
  useremail=req.query.useremail
  userModel.find({email:useremail},(error,user)=>{
    if (error){
      res.send(error.message)
    }
    res.send('hello')
  })
}


module.exports=UserController