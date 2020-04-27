const express=require('express');
const db=require('../models/data');

const router =express.Router(); //use to join two URL



//insert data
router.post('/insertposts',(req,res)=>{  //while localhost:5000/insertposts
    // let post ={title:'Post One',body:'This is Post One',email:'aakarshit@gmail.com'};
    let post={title:req.body.title,body:req.body.body,email:req.body.email};
    //res.send(post);
    let sql ="INSERT INTO `posts` SET ?";  //PLACEHOLDER
    db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log("Data Saved");
        res.send(result);
    })
})

//fetch the data
router.get('/showalldata',(req,res)=>{
    let sql ="SELECT * FROM `posts`";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        // console.log(result);
        // res.send(result);
        res.render('showdata',{result1:result});
    })
})

//fetch particular data
router.get('/showalldata/:uid',(req,res)=>{
    let sql =`SELECT * FROM posts where id=${req.params.uid}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

//Update the data
router.get('/updatepost/:uid',(req,res)=>{
    let newTitle ="Post Four"
    let sql =`UPDATE posts SET title='${newTitle}' where id=${req.params.uid}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

//Delete item
router.get('/delete/:id',(req,res)=>{
    let sql=`DELETE FROM posts where id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })    
})

module.exports=router;
