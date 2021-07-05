'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const mongoose=require('mongoose')
const UserController=require('./controller/User.controller');
const UserModel=require('./model/User.model');
app.use(cors());
const PORT = process.env.PORT || 3001



mongoose.connect('mongodb://localhost:27017/testingbooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/books',UserController);


app.get('/proof',(req,res)=>{
  UserModel();
  
  // let useremail;
  // useremail=req.query.useremail
  // UserModel.find({email:useremail},(error,user)=>{
  //   if (error){
  //     res.send(error.message)
  //   }
  //   res.send(user)
  // })
})



const client = jwksClient({
  // this url comes from your app on the auth0 dashboard 
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});



app.get('/test', (req, res) => {
  res.send('Hello World')
});

// this is a ready to use function
const getKey = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
}
// 'Bearer ;alsdkj;laskd;lkasd;lkl'
app.get('/authorize',(req,res)=>{
  console.log(req.headers);
  try{
    const token=req.headers.authorization.split(' ')[1];
    jwt.verify(token,getKey,{},(err,user)=>{
        if(err){
            res.send('invalid token');
        }
        res.send(user)
    })
    res.send(token);
  }catch(error){
    res.send(error.message)
  }
});




app.listen(PORT, () => console.log(`listening on ${PORT}`));
