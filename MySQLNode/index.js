const express=require('express');
const mysql =require('mysql');
const db=require('./data');
const app=express();
app.use(express.json());  //middleware
app.get('/insertposts',(req,res)=>{
    //let post ={title:'Post One',body:'This is Post One',email:'aakarshit@gmail.com'};
    let post={title:req.body.title,body:req.body.body,email:req.body.email};
    let sql ="INSERT INTO `posts` SET ?";  //PLACEHOLDER
    db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log("Data Saved");
        res.send(result);
    })
})
const PORT=5000;
app.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)});

