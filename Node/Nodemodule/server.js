const http =require('http');
const path=require('path');
const fs=require('fs');

//req,res are request and response created by js
//Create server
// http.createServer((req,res)=>{
//     res.end("Hello world");
    
// }).listen(8000,()=>{console.log('Server is running')})


const server=http.createServer((req,res)=>{
    if(req.url==='/'){

        // res.end("<h1>Home page</h1>");
        fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
            if(err) throw err;
            // res.writeHead(200,{'Content-Type':'text/html'});
           res.writeHead(200);   //status code 200 means simply, that the request was received and understood and is being processed
            res.end(data);  
        })
    }
    else if(req.url==="/about"){
        res.end("<h1>About Page</h1>");
    
    }
    else if(req.url==="/api/users"){
        const users=[
            {name:'Bob the Builder',age:40},
            {name:'Iron Man',age:30}
        ]
        res.writeHead(200,{'Content-Type':'application/json'})     //jason format
        res.end(JSON.stringify(users));
    }
})

const PORT=3000;
server.listen(PORT,()=>{console.log(`Server is running at ${PORT}`)})
