'use strict'

const express=require('express');
const cors=require('cors');
require('dotenv').config();
const jwt=require('jsonwebtoken');
const jwksClient=require('jwks-rsa');
const app=express();
app.use(cors());
const mongoose=require('mongoose')
const UserController=require('./controller/User.controller');

const PORT = process.env.PORT || 3001



mongoose.connect('mongodb://localhost:27017/testingbooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/books',UserController);

app.get('/test', (req, res) => {
  res.send('Hello World')
});

const client = jwksClient({
  // this url comes from your app on the auth0 dashboard 
  jwksUri: `https://dev-tiek6efc.us.auth0.com/.well-known/jwks.json`
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


app.listen(process.env.PORT,()=>{
  console.log(`listening to port: ${process.env.PORT}`);
})
