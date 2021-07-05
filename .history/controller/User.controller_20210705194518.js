const UserModel=require('../model/User.model');

const UserController=(req,res)=>{
    res.send(UserModel)
}


module.exports=UserController