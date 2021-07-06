'use strict'

const testCountroller =(req,res)=>{
    res.send('Hello World');
    //    const userObject=userSeed();
    res.json(userObject)
}

module.exports=testCountroller;