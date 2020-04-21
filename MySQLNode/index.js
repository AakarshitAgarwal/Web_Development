const express=require('express');
const mysql =require('mysql');
const db=require('./data');
const app=express();
app.use(express.json());  //middleware-->executes before the remaining code run(i.e at localhost:5000/ port)

app.use('/',require('./controllers/controller'));

const PORT=5000;
app.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)});

