const http =require('http');
const path=require('path');
const fs=require('fs');

//req,res created by js
//Create server
http.createServer((req,res)=>{
    res.end("Hello world");
    
}).listen(8000,()=>{console.log('Server is running')})


// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){

//         res.end("<h1>Home page</h1>");
//     }
//     else if(req.url==="/about"){
//         res.end("<h1>About Page</h1>");
    
//     }
// })

// const PORT=3000;
// server.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)})