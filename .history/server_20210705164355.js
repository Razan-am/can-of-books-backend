'use strict';

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {
  response.send('hello')
  // TODO: 
  // STEP 1: get the jwt from the headers
  // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
  // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
  // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end
})

const client = jwksClient({
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

const getKey=(header, callback)=>{
  client.getSigningKey(header.kid, function(err, key) {
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
