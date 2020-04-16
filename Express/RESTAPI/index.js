const express =require('express');
const members =require('./Members');
const app=express();

app.get('/api/members',(req,res)=>{
    res.json(members)
})
app.get('/api/members/:id',(req,res)=>{
    console.log(req.params.id);   //params-->parameter
})
const PORT=3000;
app.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)});
