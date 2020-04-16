const express =require('express');
const nodemon =require('nodemon');
const path=require('path');
const app=express();


//CREATE,READ,UPDATE,DELETE ==>post,get,put,delete
app.get('/anything',(res,req)=>{
    res.send("Anything");
})
 
app.use(express.static(path.join(__dirname,'public')))     //express.static method ki wajha se ye sb kaam automatic kr dega

const PORT =3000;
app.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)});
