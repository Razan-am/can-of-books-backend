'use strict'

const express=require('express');
const cors=require('cors');
require('dotenv').config();
const mongoose=require('mongoose');
const app=express();

app.use(cors());
const jwt=require('jsonwebtoken');
const jwksClient=require('jwks-rsa');
const testCountroller=require('./controller/test.controller')
const UserController=require('./controller/User.controller');

const PORT = process.env.PORT || 3001

app.use(express.json())
mongoose.connect('mongodb://localhost:27017/favbooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/test',testCountroller);
app.get('/books',UserController);
app.post('/books',UserController);

// const client = jwksClient({
//   jwksUri: `https://dev-tiek6efc.us.auth0.com/.well-known/jwks.json`
// });


// const getKey = (header, callback) => {
//   client.getSigningKey(header.kid, function (err, key) {
//     const signingKey = key.publicKey || key.rsaPublicKey;
//     callback(null, signingKey);
//   });
// }

// app.get('/authorize',(req,res)=>{
//   console.log(req.headers);
//   try{
//     const token=req.headers.authorization.split('*')[1];
//     jwt.verify(token,getKey,{},(err,user)=>{
//         if(err){
//             res.send('invalid token');
//         }
//         res.send(user)
//     })
//     res.send(token);
//   }catch(error){
//     res.send(error.message)
//   }
// });


app.listen(process.env.PORT,()=>{
  console.log(`listening to port: ${process.env.PORT}`);
})
