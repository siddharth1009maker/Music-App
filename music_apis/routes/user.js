const express = require('express');
const routes = express.Router();
routes.get('/',(request, response)=>{
    response.send('Welcome to the Home Page');
});
routes.post('/register', async (request, response)=>{
    let userObject = request.body;
    const userOperations = require('../db/services/useroperations');
    let result =await userOperations.register(userObject);
   // response.json({message:result});
   
   if(result && result._id){
    response.status(200).json({message:'Record added SuccessFully'});
   }
   else{
       response.status(200).json({message:'Record Not added'});
   }
    
});
routes.post('/login', async (request, response)=>{
    let userObject = request.body;
    const userOperations = require('../db/services/useroperations');
    let result = await userOperations.login(userObject);
   // response.json({message:result});
   if(result && result._id){
    response.status(200).json({message:'Welcome '+result.name});
   }
   else{
    response.status(200).json({message: 'Invalid Userid or Password'});
   }
});
module.exports = routes;