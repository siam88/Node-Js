const express=require('express');
const jwt=require('jsonwebtoken');

const app=express();

app.get('/api',(req,res)=>{
    res.json({
        message:'welcome to the api'
    })
});

app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
            
        }else{
            res.json({
                message:'post created . .',
                authData
            });
        }
    })
    res.json({
        message:'post created . .'
    })
});


app.post('/api/login',(req,res)=>{
    //mock user

    const user={
        id:1,
        username:'siam',
        email:'siam@gmail.com'
    }

     jwt.sign({user},'secretkey',{expiresIn:'20s'},(err,token)=>{
         res.json({
             token
         });
     });
});

//format of token
//Authorization:Bearer <access_token>


//verify token
function verifyToken(req,res,next){
    //get auth header value
     const header=req.headers['authorization'];
   
     //check if bearer is undifined
     if(typeof header!=='undefined'){
        //Splut at the space
        const bearer=header.split(' ');
        //get token from array
        const bearerToken=bearer[1];
        //set the token
        req.token=bearerToken;
        //next midleware
        next();
     }else{
         //forbidden
         console.log("error")
         res.sendStatus(403);
     }
    }



app.listen(3000,()=>console.log("server started on port 3000"));