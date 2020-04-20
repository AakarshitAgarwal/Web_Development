const express=require('express');
const mysql =require('mysql');
const db=require('./data');
const app=express();
app.use(express.json());  //middleware
app.get('/insertposts',(req,res)=>{
    // let post ={title:'Post One',body:'This is Post One',email:'aakarshit@gmail.com'};
    let post={title:req.body.title,body:req.body.body,email:req.body.email};
    let sql ="INSERT INTO `posts` SET ?";  //PLACEHOLDER
    db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log("Data Saved");
        res.send(result);
    })
})

//fetch the data
app.get('/showalldata',(req,res)=>{
    let sql ="SELECT * FROM `posts`";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

//fetch particular data
app.get('/showalldata/:uid',(req,res)=>{
    let sql =`SELECT * FROM posts where id=${req.params.uid}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

//Update the data
app.get('/updatepost/:uid',(req,res)=>{
    let newTitle ="Post Four"
    let sql =`UPDATE posts SET title='${newTitle}' where id=${req.params.uid}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

//Delete item
app.get('/delete/:id',(req,res)=>{
    let sql=`DELETE FROM posts where id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })    
})


const PORT=5000;
app.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)});

